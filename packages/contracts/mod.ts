import { parseArgs } from "jsr:@std/cli";
import config from "./environment.config.ts";
import { consoleFmt } from "./utils.ts";

const args = parseArgs(Deno.args);

function store(name: string, value: unknown) {
  Deno.writeTextFileSync(
    "./environment/environment.tmp.ts",
    `export const ${name} = ${JSON.stringify(value)} as const;`,
    {
      append: true,
    },
  );
}

function main() {
  Deno.writeTextFileSync(
    "./environment/environment.tmp.ts",
    "",
  );

  const inputNetwork = args["network"];

  if (
    !config.networks.viem.includes(inputNetwork) &&
    !config.networks.custom[inputNetwork]
  ) {
    throw new Error(
      `Specified network ${consoleFmt.underline(inputNetwork)} not recognized`,
    );
  }

  store(
    "currrentNetwork",
    args["network"] || config.networks.default || "anvil",
  );

  Deno.writeTextFileSync("./environment/environment.tmp.ts", "");
}

if (import.meta.main) {
  try {
    main();
  } catch (e) {
    console.log(consoleFmt.red(e as string));
  }
}
