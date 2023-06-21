# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# This job runs a podman task using a container stored in a private registry
# configured with basic authentication. The registry.hcl job should be running
# and healthy before running this job. The registry_address and registry_port
# HCL variables must be provided.

variable "registry_address" {
  type        = string
  description = "The HTTP address of the local registry"
  default     = "localhost"
}

variable "registry_port" {
  type        = number
  description = "The HTTP port of the local registry"
}

variable "registry_username" {
  type        = string
  description = "The Basic Auth username of the local registry"
  default     = "e2euser"
}

variable "registry_password" {
  type        = string
  description = "The Basic Auth password of the local registry"
  default     = "e2epassword"
}

locals {
  registry_auth = base64encode("${var.registry_username}:${var.registry_password}")
}

job "auth_basic" {
  type = "batch"

  constraint {
    attribute = "${attr.kernel.name}"
    value     = "linux"
  }

  group "basic" {
    reschedule {
      attempts  = 0
      unlimited = false
    }

    network {
      mode = "host"
    }

    task "echo" {
      driver = "podman"

      #       template {
      #         data        = <<EOH
      # {
      #   "auths": {
      #     "${var.registry_address}:${var.registry_port}": {
      #       "auth": "${local.registry_auth}"
      #     }
      #   }
      # }
      #         EOH
      #         destination = "local/auth.json"
      #       }

      config {
        image = "${var.registry_address}:${var.registry_port}/docker.io/library/bash:private"
        args  = ["echo", "The auth basic test is OK!"]

        auth {
          username   = "e2euser"
          password   = "e2epassword"
          tls_verify = false
        }
      }

      resources {
        cpu    = 50
        memory = 32
      }
    }
  }
}