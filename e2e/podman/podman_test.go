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
	t.Run("testAuthFileStatic", testAuthFileStatic)
}

func testRedis(t *testing.T) {
	job, cleanup := jobs3.Submit(t, "./input/redis.hcl")
	t.Cleanup(cleanup)

	logs := job.TaskLogs("cache", "redis")
	must.StrContains(t, logs.Stdout, "oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo")
}

func findService(t *testing.T, name string) (string, int) {
	services, _, err := e2eutil.NomadClient(t).Services().Get(name, nil)
	must.NoError(t, err, must.Sprintf("failed to find %q service", name))
	must.Len(t, 1, services, must.Sprintf("expected 1 %q service", name))
	return services[0].Address, services[0].Port
}

func testAuthBasic(t *testing.T) {
	// start the private registry
	_, regCleanup := jobs3.Submit(t, "./input/registry.hcl",
		jobs3.Timeout(40*time.Second), // pulls an image
	)
	t.Cleanup(regCleanup)

	// find the private registry service
	regAddr, regPort := findService(t, "registry")

	// run the private bash image
	bashJob, bashCleanup := jobs3.Submit(t, "./input/auth_basic.hcl",
		jobs3.Var("registry_address", regAddr),
		jobs3.Var("registry_port", strconv.Itoa(regPort)),
		jobs3.WaitComplete("basic"),
	)
	t.Cleanup(bashCleanup)
	logs := bashJob.TaskLogs("basic", "echo")
	must.StrContains(t, logs.Stdout, "The auth basic test is OK!")
}

func testAuthFileStatic(t *testing.T) {
	// start the private registry
	_, regCleanup := jobs3.Submit(t, "./input/registry.hcl",
		jobs3.Timeout(40*time.Second), // pulls an image
	)
	t.Cleanup(regCleanup)

	// find the private registry service
	regAddr, regPort := findService(t, "registry")

	// run the private bash image
	bashJob, bashCleanup := jobs3.Submit(t, "./input/auth_static.hcl",
		jobs3.Var("registry_address", regAddr),
		jobs3.Var("registry_port", strconv.Itoa(regPort)),
		jobs3.WaitComplete("static"),
	)
	t.Cleanup(bashCleanup)
	logs := bashJob.TaskLogs("static", "echo")
	must.StrContains(t, logs.Stdout, "The static auth test is OK!")
}
