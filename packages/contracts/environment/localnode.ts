import { createTestClient, http, parseEther } from "viem";
import { privateKeyToAddress } from "viem/accounts";
import { anvil } from "viem/chains";
import environmentConfig from "../environment.config.ts";
import { cliError, consoleFmt } from "../utils.ts";
import { spawn } from "node:child_process";

async function main() {
  const os = Deno.build.os;

  if (os === "linux" || os === "darwin") {
  } else if (os === "windows") {
    console.log(
      consoleFmt.magenta(
        "NOTE TO SELF : TODO : Add localnode support for Windows\nWorkaround : deno task win-node.",
      ),
    );
  } else {
    cliError("Unsupported OS");
  }

  // const admin = createTestClient({
  //   mode: "anvil",
  //   transport: http(),
  //   chain: anvil,
  // });

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
  console.log(`Detected ${Deno.build.os}`);
  main();
}
