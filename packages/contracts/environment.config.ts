import type * as chains from "viem/chains";
import type { Chain, Hash } from "viem";

export type EnvironmentConfig = {
  networks: {
    default: string;
    viem: (keyof typeof chains)[];
    custom: Record<string, Chain>;
  };
  accounts: Hash[];
};

const environmentConfig: EnvironmentConfig = {
  networks: {
    default: "anvil",
    viem: ["anvil"],
    custom: {},
  },
  accounts: [
    "0x6b1a221f9715a6b1d4f3d4fdae6460d0c8d365da99a99b0783e3867dcf48f9d9",
    "0x1485b0ac0da4803ea0eb6d3a4494c0266581659da16a7aaaa9db144a294edcf7",
    "0x4c512e738cb3595e63551b9bcaf974246d57cdadfee96add477146b5a41a884a",
    "0x9840d838f9c37394bece6acf45fc44057513819e6970a8455b95266252f48e98",
  ],
};

export default environmentConfig;
