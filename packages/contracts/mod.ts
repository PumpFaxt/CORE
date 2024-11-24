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

  Deno.writeTextFileSync(
    "./environment/environment.tmp.json",
    JSON.stringify(environmentState, null, 2),
  );

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
  const cmd = new Deno.Command(args[0], {
    ...args[1],
    stdout: "piped",
    stdin: "piped",
  });

  const child = cmd.spawn();

  // deno-lint-ignore no-explicit-any
  const consoleStream = new WritableStream<any>({
    write(chunk) {
      console.log(decoder.decode(chunk));
    },
  });

  await child.stdout.pipeTo(consoleStream);
  child.stdin.close();
}

const commands = {
  compile: () =>
    execCommand("deno", { args: ["run", "-A", "environment/compiler.ts"] }),

  tests: () => execCommand("deno", { args: ["test", "-A"] }),

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
