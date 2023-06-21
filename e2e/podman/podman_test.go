// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

package podman

import (
	"strconv"
	"testing"
	"time"

	"github.com/hashicorp/nomad/e2e/e2eutil"
	"github.com/hashicorp/nomad/e2e/v3/cluster3"
	"github.com/hashicorp/nomad/e2e/v3/jobs3"
	"github.com/shoenig/test/must"
)

func TestPodman(t *testing.T) {
	cluster3.Establish(t,
		cluster3.Leader(),
		cluster3.LinuxClients(1),
	)

	t.Run("testRedis", testRedis)
	t.Run("testAuthBasic", testAuthBasic)
}

func testRedis(t *testing.T) {
	job, cleanup := jobs3.Submit(t, "./input/redis.hcl")
	t.Cleanup(cleanup)

	logs := job.TaskLogs("cache", "redis")
	must.StrContains(t, logs.Stdout, "oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo")
}

func testAuthBasic(t *testing.T) {
	// start the private registry
	_, regCleanup := jobs3.Submit(t, "./input/registry.hcl",
		jobs3.Timeout(90*time.Second), // may need to pull 3 images
	)
	t.Cleanup(regCleanup)

	// find the private registry service
	services, _, err := e2eutil.NomadClient(t).Services().Get("registry", nil)
	must.NoError(t, err, must.Sprint("failed to find registry service"))
	must.Len(t, 1, services, must.Sprint("expected 1 registry service"))

	// run the private bash image
	regService := services[0]
	bashJob, bashCleanup := jobs3.Submit(t, "./input/auth_basic.hcl",
		jobs3.Var("registry_address", regService.Address),
		jobs3.Var("registry_port", strconv.Itoa(regService.Port)),
		jobs3.WaitComplete("basic"),
	)
	t.Cleanup(bashCleanup)
	logs := bashJob.TaskLogs("basic", "echo")
	must.StrContains(t, logs.Stdout, "The auth basic test is OK!")
}
