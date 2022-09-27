export const jobSpec = {
  "Job": {
      "Region": null,
      "Namespace": null,
      "ID": "trying-multi-dupes",
      "Name": "trying-multi-dupes",
      "Type": null,
      "Priority": null,
      "AllAtOnce": null,
      "Datacenters": [
          "dc1"
      ],
      "Constraints": null,
      "Affinities": null,
      "TaskGroups": [
          {
              "Name": "fakepy",
              "Count": 3,
              "Constraints": null,
              "Affinities": null,
              "Tasks": [
                  {
                      "Name": "http.server",
                      "Driver": "raw_exec",
                      "User": "",
                      "Lifecycle": null,
                      "Config": {
                          "args": [
                              "-m",
                              "http.server",
                              "${NOMAD_PORT_http}"
                          ],
                          "command": "python3"
                      },
                      "Constraints": null,
                      "Affinities": null,
                      "Env": null,
                      "Services": [
                          {
                              "Name": "task-fake-py",
                              "Tags": null,
                              "CanaryTags": null,
                              "EnableTagOverride": false,
                              "PortLabel": "http",
                              "AddressMode": "",
                              "Address": "",
                              "Checks": [
                                  {
                                      "Name": "task-happy",
                                      "Type": "http",
                                      "Command": "",
                                      "Args": null,
                                      "Path": "/",
                                      "Protocol": "",
                                      "PortLabel": "",
                                      "Expose": false,
                                      "AddressMode": "",
                                      "Advertise": "",
                                      "Interval": 5000000000,
                                      "Timeout": 1000000000,
                                      "InitialStatus": "",
                                      "TLSSkipVerify": false,
                                      "Header": null,
                                      "Method": "GET",
                                      "CheckRestart": null,
                                      "GRPCService": "",
                                      "GRPCUseTLS": false,
                                      "TaskName": "",
                                      "SuccessBeforePassing": 0,
                                      "FailuresBeforeCritical": 0,
                                      "Body": "",
                                      "OnUpdate": ""
                                  },
                                  {
                                      "Name": "task-sad",
                                      "Type": "http",
                                      "Command": "",
                                      "Args": null,
                                      "Path": "/ohno",
                                      "Protocol": "",
                                      "PortLabel": "",
                                      "Expose": false,
                                      "AddressMode": "",
                                      "Advertise": "",
                                      "Interval": 45000000000,
                                      "Timeout": 1000000000,
                                      "InitialStatus": "",
                                      "TLSSkipVerify": false,
                                      "Header": null,
                                      "Method": "GET",
                                      "CheckRestart": null,
                                      "GRPCService": "",
                                      "GRPCUseTLS": false,
                                      "TaskName": "",
                                      "SuccessBeforePassing": 0,
                                      "FailuresBeforeCritical": 0,
                                      "Body": "",
                                      "OnUpdate": ""
                                  }
                              ],
                              "CheckRestart": null,
                              "Connect": null,
                              "Meta": null,
                              "CanaryMeta": null,
                              "TaggedAddresses": null,
                              "TaskName": "",
                              "OnUpdate": "",
                              "Provider": "nomad"
                          },
                          {
                              "Name": "web",
                              "Tags": [
                                  "web",
                                  "tcp",
                                  "lol",
                                  "lmao"
                              ],
                              "CanaryTags": null,
                              "EnableTagOverride": false,
                              "PortLabel": "http",
                              "AddressMode": "",
                              "Address": "",
                              "Checks": [
                                  {
                                      "Name": "tcp_probe",
                                      "Type": "tcp",
                                      "Command": "",
                                      "Args": null,
                                      "Path": "",
                                      "Protocol": "",
                                      "PortLabel": "",
                                      "Expose": false,
                                      "AddressMode": "",
                                      "Advertise": "",
                                      "Interval": 5000000000,
                                      "Timeout": 1000000000,
                                      "InitialStatus": "",
                                      "TLSSkipVerify": false,
                                      "Header": null,
                                      "Method": "",
                                      "CheckRestart": null,
                                      "GRPCService": "",
                                      "GRPCUseTLS": false,
                                      "TaskName": "",
                                      "SuccessBeforePassing": 0,
                                      "FailuresBeforeCritical": 0,
                                      "Body": "",
                                      "OnUpdate": "ignore"
                                  }
                              ],
                              "CheckRestart": null,
                              "Connect": null,
                              "Meta": null,
                              "CanaryMeta": null,
                              "TaggedAddresses": null,
                              "TaskName": "",
                              "OnUpdate": "",
                              "Provider": "nomad"
                          },
                          {
                              "Name": "duper",
                              "Tags": [
                                  "web",
                                  "tcp",
                                  "lol",
                                  "lmao"
                              ],
                              "CanaryTags": null,
                              "EnableTagOverride": false,
                              "PortLabel": "http",
                              "AddressMode": "",
                              "Address": "",
                              "Checks": [
                                  {
                                      "Name": "tcp_probe",
                                      "Type": "tcp",
                                      "Command": "",
                                      "Args": null,
                                      "Path": "",
                                      "Protocol": "",
                                      "PortLabel": "",
                                      "Expose": false,
                                      "AddressMode": "",
                                      "Advertise": "",
                                      "Interval": 5000000000,
                                      "Timeout": 1000000000,
                                      "InitialStatus": "",
                                      "TLSSkipVerify": false,
                                      "Header": null,
                                      "Method": "",
                                      "CheckRestart": null,
                                      "GRPCService": "",
                                      "GRPCUseTLS": false,
                                      "TaskName": "",
                                      "SuccessBeforePassing": 0,
                                      "FailuresBeforeCritical": 0,
                                      "Body": "",
                                      "OnUpdate": "ignore"
                                  }
                              ],
                              "CheckRestart": null,
                              "Connect": null,
                              "Meta": null,
                              "CanaryMeta": null,
                              "TaggedAddresses": null,
                              "TaskName": "",
                              "OnUpdate": "",
                              "Provider": "nomad"
                          }
                      ],
                      "Resources": null,
                      "RestartPolicy": null,
                      "Meta": null,
                      "KillTimeout": null,
                      "LogConfig": null,
                      "Artifacts": null,
                      "Vault": null,
                      "Templates": null,
                      "DispatchPayload": null,
                      "VolumeMounts": null,
                      "Leader": false,
                      "ShutdownDelay": 0,
                      "KillSignal": "",
                      "Kind": "",
                      "ScalingPolicies": null
                  }
              ],
              "Spreads": null,
              "Volumes": null,
              "RestartPolicy": null,
              "ReschedulePolicy": null,
              "EphemeralDisk": null,
              "Update": null,
              "Migrate": null,
              "Networks": [
                  {
                      "Mode": "host",
                      "Device": "",
                      "CIDR": "",
                      "IP": "",
                      "DNS": null,
                      "ReservedPorts": null,
                      "DynamicPorts": [
                          {
                              "Label": "http",
                              "Value": 0,
                              "To": 0,
                              "HostNetwork": ""
                          }
                      ],
                      "Hostname": "",
                      "MBits": null
                  }
              ],
              "Meta": null,
              "Services": [
                  {
                      "Name": "fake-py",
                      "Tags": null,
                      "CanaryTags": null,
                      "EnableTagOverride": false,
                      "PortLabel": "http",
                      "AddressMode": "",
                      "Address": "",
                      "Checks": [
                          {
                              "Name": "happy",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 5000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          },
                          {
                              "Name": "sad",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/ohno",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 45000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          }
                      ],
                      "CheckRestart": null,
                      "Connect": null,
                      "Meta": null,
                      "CanaryMeta": null,
                      "TaggedAddresses": null,
                      "TaskName": "",
                      "OnUpdate": "",
                      "Provider": "nomad"
                  },
                  {
                      "Name": "duper",
                      "Tags": null,
                      "CanaryTags": null,
                      "EnableTagOverride": false,
                      "PortLabel": "http",
                      "AddressMode": "",
                      "Address": "",
                      "Checks": [
                          {
                              "Name": "happy",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 5000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          },
                          {
                              "Name": "sad",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/ohno",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 45000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          }
                      ],
                      "CheckRestart": null,
                      "Connect": null,
                      "Meta": null,
                      "CanaryMeta": null,
                      "TaggedAddresses": null,
                      "TaskName": "",
                      "OnUpdate": "",
                      "Provider": "nomad"
                  }
              ],
              "ShutdownDelay": null,
              "StopAfterClientDisconnect": null,
              "MaxClientDisconnect": null,
              "Scaling": null,
              "Consul": null
          },
          {
              "Name": "fakepy-consul",
              "Count": null,
              "Constraints": null,
              "Affinities": null,
              "Tasks": [
                  {
                      "Name": "http.server",
                      "Driver": "raw_exec",
                      "User": "",
                      "Lifecycle": null,
                      "Config": {
                          "args": [
                              "-m",
                              "http.server",
                              "${NOMAD_PORT_http}"
                          ],
                          "command": "python3"
                      },
                      "Constraints": null,
                      "Affinities": null,
                      "Env": null,
                      "Services": [
                          {
                              "Name": "consul-task-example",
                              "Tags": [
                                  "global",
                                  "cache"
                              ],
                              "CanaryTags": null,
                              "EnableTagOverride": false,
                              "PortLabel": "db",
                              "AddressMode": "",
                              "Address": "",
                              "Checks": [
                                  {
                                      "Name": "alive",
                                      "Type": "tcp",
                                      "Command": "",
                                      "Args": null,
                                      "Path": "",
                                      "Protocol": "",
                                      "PortLabel": "",
                                      "Expose": false,
                                      "AddressMode": "",
                                      "Advertise": "",
                                      "Interval": 10000000000,
                                      "Timeout": 2000000000,
                                      "InitialStatus": "",
                                      "TLSSkipVerify": false,
                                      "Header": null,
                                      "Method": "",
                                      "CheckRestart": null,
                                      "GRPCService": "",
                                      "GRPCUseTLS": false,
                                      "TaskName": "",
                                      "SuccessBeforePassing": 0,
                                      "FailuresBeforeCritical": 0,
                                      "Body": "",
                                      "OnUpdate": ""
                                  }
                              ],
                              "CheckRestart": null,
                              "Connect": null,
                              "Meta": null,
                              "CanaryMeta": null,
                              "TaggedAddresses": null,
                              "TaskName": "",
                              "OnUpdate": "",
                              "Provider": ""
                          }
                      ],
                      "Resources": null,
                      "RestartPolicy": null,
                      "Meta": null,
                      "KillTimeout": null,
                      "LogConfig": null,
                      "Artifacts": null,
                      "Vault": null,
                      "Templates": null,
                      "DispatchPayload": null,
                      "VolumeMounts": null,
                      "Leader": false,
                      "ShutdownDelay": 0,
                      "KillSignal": "",
                      "Kind": "",
                      "ScalingPolicies": null
                  }
              ],
              "Spreads": null,
              "Volumes": null,
              "RestartPolicy": null,
              "ReschedulePolicy": null,
              "EphemeralDisk": null,
              "Update": null,
              "Migrate": null,
              "Networks": [
                  {
                      "Mode": "host",
                      "Device": "",
                      "CIDR": "",
                      "IP": "",
                      "DNS": null,
                      "ReservedPorts": null,
                      "DynamicPorts": [
                          {
                              "Label": "db",
                              "Value": 0,
                              "To": 0,
                              "HostNetwork": ""
                          },
                          {
                              "Label": "http",
                              "Value": 0,
                              "To": 0,
                              "HostNetwork": ""
                          }
                      ],
                      "Hostname": "",
                      "MBits": null
                  }
              ],
              "Meta": null,
              "Services": [
                  {
                      "Name": "consul-example",
                      "Tags": [
                          "global",
                          "cache"
                      ],
                      "CanaryTags": null,
                      "EnableTagOverride": false,
                      "PortLabel": "http",
                      "AddressMode": "",
                      "Address": "",
                      "Checks": [
                          {
                              "Name": "happy",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 5000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          },
                          {
                              "Name": "sad",
                              "Type": "http",
                              "Command": "",
                              "Args": null,
                              "Path": "/ohno",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 45000000000,
                              "Timeout": 1000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "GET",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          },
                          {
                              "Name": "alive",
                              "Type": "tcp",
                              "Command": "",
                              "Args": null,
                              "Path": "",
                              "Protocol": "",
                              "PortLabel": "",
                              "Expose": false,
                              "AddressMode": "",
                              "Advertise": "",
                              "Interval": 10000000000,
                              "Timeout": 2000000000,
                              "InitialStatus": "",
                              "TLSSkipVerify": false,
                              "Header": null,
                              "Method": "",
                              "CheckRestart": null,
                              "GRPCService": "",
                              "GRPCUseTLS": false,
                              "TaskName": "",
                              "SuccessBeforePassing": 0,
                              "FailuresBeforeCritical": 0,
                              "Body": "",
                              "OnUpdate": ""
                          }
                      ],
                      "CheckRestart": null,
                      "Connect": null,
                      "Meta": null,
                      "CanaryMeta": null,
                      "TaggedAddresses": null,
                      "TaskName": "",
                      "OnUpdate": "",
                      "Provider": ""
                  }
              ],
              "ShutdownDelay": null,
              "StopAfterClientDisconnect": null,
              "MaxClientDisconnect": null,
              "Scaling": null,
              "Consul": null
          }
      ],
      "Update": null,
      "Multiregion": null,
      "Spreads": null,
      "Periodic": null,
      "ParameterizedJob": null,
      "Reschedule": null,
      "Migrate": null,
      "Meta": null,
      "ConsulToken": null,
      "VaultToken": null,
      "Stop": null,
      "ParentID": null,
      "Dispatched": false,
      "DispatchIdempotencyToken": null,
      "Payload": null,
      "ConsulNamespace": null,
      "VaultNamespace": null,
      "NomadTokenID": null,
      "Status": null,
      "StatusDescription": null,
      "Stable": null,
      "Version": null,
      "SubmitTime": null,
      "CreateIndex": null,
      "ModifyIndex": null,
      "JobModifyIndex": null
  }
}