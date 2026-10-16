const { spawnSync } = require("node:child_process");
const { rmSync } = require("node:fs");
const { resolve } = require("node:path");

const npmCli = process.env.npm_execpath;

if (!npmCli) {
  throw new Error("Run this script through npm so the npm CLI path is available.");
}

function runNpm(args) {
  const result = spawnSync(process.execPath, [npmCli, ...args], {
    stdio: "inherit"
  });

  if (result.error) {
    throw result.error;
  }

  return result.status ?? 1;
}

rmSync(resolve(__dirname, "..", "allure-results"), {
  force: true,
  recursive: true
});

const testExitCode = runNpm(["test"]);
const reportExitCode = runNpm(["run", "report:allure"]);

process.exitCode = testExitCode || reportExitCode;
