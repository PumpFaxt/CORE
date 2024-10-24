import fs from "node:fs";
import type { Abi } from "viem";

type ContractDefinition = {
    name: string;
    abi: Abi;
    bytecode: string;
};

async function main() {
    const files = fs.readdirSync("src").filter((file) => file.endsWith(".sol"))
        .map((name) => name.slice(0, name.length - 4));

    const promisedDefinitions = [];
    for (const fileName of files) {
        const definition = import(
            `./artifacts/src/${fileName}.sol/${fileName}.json`,
            {
                with: { type: "json" },
            }
        );
        promisedDefinitions.push(definition);
    }
    const definitions = await Promise.all(promisedDefinitions);

    const resolvedDefinitions: ContractDefinition[] = [];
    for (const definition of definitions) {
        resolvedDefinitions.push({
            name: definition.default.contractName,
            abi: definition.default.abi,
            bytecode: definition.default.bytecode,
        });
    }

    for (const definition of resolvedDefinitions) {
        fs.writeFileSync(
            "definitions/develop.ts",
            `import type {Address} from "viem"`,
        );
        fs.appendFileSync(
            "definitions/develop.ts",
            `
const ${definition.name} = {
  abi : ${JSON.stringify(definition.abi)} as const,
  bytecode : "${definition.bytecode}"
} as const;
`,
        );
    }
    fs.appendFileSync(
        "definitions/develop.ts",
        `export default {${files.join(", ")}};`,
    );
}

main();
