import { parseArgs } from "jsr:@std/cli";
import config from "./environment.config.ts";
import { cliError, consoleFmt } from "./utils.ts";

const args = parseArgs(Deno.args);

const command = args._[0];

const decoder = new TextDecoder();

async function main() {
  if (args._.length < 1) {
    throw new Error("Missing command");
  } else if (args._.length > 1) {
    throw new Error("Too many commands");
  }

  const environmentState = JSON.parse(
    Deno.readTextFileSync("./environment/environment.tmp.json"),
  );

  const inputNetwork = args["network"];

  if (
    inputNetwork !== undefined &&
    !config.networks.viem.includes(inputNetwork) &&
    !config.networks.custom[inputNetwork]
  ) {
    throw new Error(
      `Specified network ${consoleFmt.underline(inputNetwork)} not recognized`,
    );
  }

  environmentState.currentNetwork = args["network"] ||
    config.networks.default ||
    "anvil";

  if (command === "compile") {
    await commands.compile();
  } else if (command === "tests") {
    await commands.compile();
    // await commands.node();
    await commands.tests();
  } else if (command === "node") {
    await commands.node([args.log && "--log"]);
  }
}

async function execCommand(
  ...args: ConstructorParameters<typeof Deno.Command>
) {
  const cmd = new Deno.Command(...args);

  const { code, stdout, stderr } = await cmd.output();

  if (code === 0) {
    console.log(decoder.decode(stdout));
  } else {
    throw new Error(decoder.decode(stderr));
  }
}

const commands = {
  compile: () =>
    execCommand("deno", { args: ["run", "-A", "environment/compiler.ts"] }),

  tests: () => execCommand("deno", { args: ["test"] }),

  node: (args?: string[]) =>
    execCommand("deno", {
      args: ["run", "-A", "environment/localnode.ts", ...(args || [])],
    }),
};

if (import.meta.main) {
  main().catch((e) => {
    cliError(e);
  });
}
