import solc from "npm:solc";
import { resolve } from "jsr:@std/path";
import { consoleFmt } from "../utils.ts";

const PATHS = {
  SOURCES: "src",
  MODULES: "../../node_modules",
  OUTPUT_DIR: ".",
};

const sourcesPath = resolve(import.meta?.dirname || "", "..", PATHS.SOURCES);

// Collect contracts
const sources: Record<string, { content: string }> = {};
const contractNames: string[] = [];
for (const file of Deno.readDirSync(sourcesPath)) {
  if (file.name.endsWith(".sol")) {
    const filePath = resolve(sourcesPath, file.name);
    const content = Deno.readTextFileSync(filePath);
    const fileKey = file.name; // Extract file name without path
    contractNames.push(fileKey);
    sources[fileKey] = { content };
  }
}

// Solidity compiler input configuration
const input = {
  language: "Solidity",
  sources,
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// Custom import resolver
function findImports(relativePath: string) {
  const basePath = relativePath.startsWith("@") ? PATHS.MODULES : PATHS.SOURCES;
  const absolutePath = resolve(basePath, relativePath);

  try {
    const source = Deno.readTextFileSync(absolutePath);
    return { contents: source };
  } catch {
    return { error: `File not found: ${relativePath}` };
  }
}

// Compile contracts
const output = JSON.parse(
  solc.compile(JSON.stringify(input), { import: findImports }),
);

if (output.errors && output.errors.length > 0) {
  for (const error of output.errors) {
    console.error(consoleFmt.red(error.formattedMessage || error.message));
  }
  throw new Error("Compilation failed.");
}

// Process compiled contracts
const abiEntries: string[] = [];
const bytecodeEntries: string[] = [];

for (const fileName of contractNames) {
  const contractDefinitions = output.contracts[fileName];
  for (
    const contractName of Object.keys(
      contractDefinitions,
    )
  ) {
    const contractDefinition = contractDefinitions[contractName];

    if (contractDefinition) {
      abiEntries.push(
        `${contractName}: ${
          JSON.stringify(contractDefinition.abi, null, 2)
        } as const`,
      );
      bytecodeEntries.push(
        `${contractName}: "0x${contractDefinition.evm.bytecode.object}"`,
      );
    }
  }
}

// Generate TypeScript definitions
const generatedCode = `
export const abi = {
  ${abiEntries.join(",\n  ")}
} as const;

export const bytecode = {
  ${bytecodeEntries.join(",\n  ")}
} as const;

export type ContractName = keyof typeof abi;

export default { abi, bytecode };
`;

Deno.writeTextFileSync(
  resolve(PATHS.OUTPUT_DIR, "definitions.gen.ts"),
  generatedCode,
);

console.log(
  consoleFmt.green(`Successfully compiled ${contractNames.length} contracts.`),
);
