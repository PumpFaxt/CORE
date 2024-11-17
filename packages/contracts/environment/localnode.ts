import { cliError, consoleFmt } from "../utils.ts";
import { createTestClient, http, parseEther } from "viem";
import { privateKeyToAddress } from "viem/accounts";
import { anvil } from "viem/chains";
import environmentConfig from "../environment.config.ts";

const decoder = new TextDecoder();
async function main() {
  let command = new Deno.Command(
    "nohup ../../../../bin/anvil </dev/null >/dev/null 2>&1 ",
  );
  console.log("intefar");

  const cmdOut = await command.output();
  console.log("spawned \n", decoder.decode(cmdOut.stdout));

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

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

if (import.meta.main) {
  main().catch((e) => {
    throw e;
  });
}
