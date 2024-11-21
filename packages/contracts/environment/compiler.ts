import solc from "npm:solc";
// import {read} from "jsr:@std/text";
import { resolve } from "jsr:@std/path";
import { consoleFmt } from "../utils.ts";

const PATH_SOURCES = "src";
const PATH_MODULES = "../../node_modules";
const PATH_OUT_DIR = ".";

const sourcesPathResolved = resolve(
  import.meta?.dirname || "",
  "..",
  PATH_SOURCES,
);

const contractNames: string[] = [];
const sources: Record<string, { content: string }> = {};
for (const file of Deno.readDirSync(sourcesPathResolved)) {
  if (file.name.endsWith(".sol")) {
    const fileName = resolve(sourcesPathResolved, file.name);
    const content = Deno.readTextFileSync(fileName);

    const fileKey = fileName.split("/").pop()?.split("\\").pop();
    if (fileKey) {
      contractNames.push(fileKey);
      sources[fileKey] = { content };
    }
  }
}

const input = {
  language: "Solidity",
  sources: sources,
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

function findImports(relativePath: string) {
  let absolutePath = resolve(
    PATH_SOURCES,
    relativePath,
  );

  if (relativePath.startsWith("@")) {
    // Check if the import is relative
    absolutePath = resolve(
      PATH_MODULES,
      relativePath,
    );
  }

  const source = Deno.readTextFileSync(absolutePath);

  return { contents: source };
}

const output = JSON.parse(
  solc.compile(JSON.stringify(input), { import: findImports }),
);

if (output.errors) {
  throw console.error(consoleFmt.red(output.errors[0]));
}

let abiObject = "";
let bytecodeObject = "";
for (const contract in contractNames) {
  if (!contract.includes("/") && !contract.includes("\\")) {
    const fileName = contractNames[contract];
    const contractEntities = Object.keys(output.contracts[fileName]);
    const contractName = contractEntities[contractEntities.length - 1];

    const contractDefinition = output.contracts[fileName][contractName];

    const abiText = JSON.stringify(contractDefinition.abi, null, 2);

    abiObject += `${contractName} : ${abiText} as const,`;
    bytecodeObject +=
      `${contractName} : "0x${contractDefinition.evm.bytecode.object}",\n`;
  }
}

let genText = "";
genText += `export const abi = {${abiObject}} as const;`;
genText += `export const bytecode = {${bytecodeObject}} as const;`;
genText += `export type ContractName = keyof typeof abi;`;
genText += `export default { abi, bytecode };`;

Deno.writeTextFileSync(
  resolve(PATH_OUT_DIR, "definitions.gen.ts"),
  genText,
);
console.log(
  consoleFmt.green(`Successfully compiled ${contractNames.length} contracts`),
);
