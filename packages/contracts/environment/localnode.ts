import { createTestClient, http, parseEther } from "viem";
import { privateKeyToAddress } from "viem/accounts";
import { anvil } from "viem/chains";
import environmentConfig from "../environment.config.ts";
import { cliError, consoleFmt } from "../utils.ts";
import { spawn } from "node:child_process";

async function windowsNohup() {
  // setTimeout(() => {
  //   const process = spawn(
  //     "nohup",
  //     ["cmd", "/c", "start", "../../bin/anvil.exe"],
  //     { stdio: "ignore" },
  //   );
  // }, 0);
  const worker = new Worker(new URL("worker.ts", import.meta.url), {
    type: "module", // Specify module type for Deno
  });

  // console.log(`Started Anvil with PID: ${process.pid}`);
}

async function main() {
  const os = Deno.build.os;

  if (os === "linux" || os === "darwin") {
    console.log(
      consoleFmt.magenta(
        "NOTE TO SELF : TODO : Add localnode support for Linux and MacOS",
      ),
    );
  } else if (os === "windows") {
    new Worker(new URL("windows-localnode-worker.ts", import.meta.url), {
      type: "module", // Specify module type for Deno
    });

    console.log("first");
  } else {
    cliError("Unsupported OS");
  }

  const admin = createTestClient({
    mode: "anvil",
    transport: http(),
    chain: anvil,
  });

  // environmentConfig.accounts.forEach(async (key) => {
  //   await admin.setBalance({
  //     address: privateKeyToAddress(key),
  //     value: parseEther("1000"),
  //   });
  // });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (import.meta.main) {
  main();
}
