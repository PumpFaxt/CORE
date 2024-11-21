import { createTestClient, http, parseEther } from "viem";
import { privateKeyToAddress } from "viem/accounts";
import environmentConfig from "../environment.config.ts";
import { parseArgs } from "jsr:@std/cli";
import { cliError, consoleFmt } from "../utils.ts";
import { resolve } from "jsr:@std/path";
import { spawn } from "node:child_process";
import { anvil } from "viem/chains";

const args = parseArgs(Deno.args);

function main() {
  const os = Deno.build.os;

  if (os === "linux" || os === "darwin") {
    const process = spawn(
      resolve(`../../scripts/evm-node${args.log ? "-logged" : ""}.sh`),
    );

    if (!args.log) {
      console.log(`Running EVM node in background with pid : ${process.pid}`);
    } else {
      console.log(`Running EVM node and logging to evmnode.logs`);
    }
  } else if (os === "windows") {
    console.log(
      consoleFmt.magenta(
        "NOTE TO SELF : TODO : Add localnode support for Windows\nWorkaround : deno task win-node.",
      ),
    );
  } else {
    cliError("Unsupported OS");
  }

  const admin = createTestClient({
    mode: "anvil",
    transport: http(),
    chain: anvil,
  });

  environmentConfig.accounts.forEach(async (key) => {
    await admin.setBalance({
      address: privateKeyToAddress(key),
      value: parseEther("1000"),
    });
  });
}

if (import.meta.main) {
  console.log(`Detected ${Deno.build.os}`);
  main();
}
