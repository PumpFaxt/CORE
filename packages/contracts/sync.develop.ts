import fs from "node:fs";
import type { Abi } from "viem";

type ContractDefinition = {
  name: string;
  abi: Abi;
  bytecode: string;
};

function getFilePath(fileType: "abi" | "bytecode") {
  return `definitions/develop.${fileType}.ts`;
}

async function main() {
  const files = fs.readdirSync("src").filter((file) => file.endsWith(".sol"))
    .map((name) => name.slice(0, name.length - 4));
  // .filter((name) =>  !(name[0] === "I" && name[1] === name[1].toUpperCase()));

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

  fs.writeFileSync(
    getFilePath("abi"),
    "",
  );
  for (const definition of resolvedDefinitions) {
    fs.appendFileSync(
      getFilePath("abi"),
      `
const ${definition.name} = ${JSON.stringify(definition.abi)} as const;
`,
    );
  }
  fs.appendFileSync(
    getFilePath("abi"),
    `export default {${files.join(", ")}};`,
  );

  fs.writeFileSync(
    getFilePath("bytecode"),
    ``,
  );
  for (const definition of resolvedDefinitions) {
    fs.appendFileSync(
      getFilePath("bytecode"),
      `
const ${definition.name} = 
  "${definition.bytecode}";
`,
    );
  }
  fs.appendFileSync(
    getFilePath("bytecode"),
    `export default {${files.join(", ")}};`,
  );
}

main();
