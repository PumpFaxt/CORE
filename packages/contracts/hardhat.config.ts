import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: { optimizer: { enabled: true, runs: 2000 } },
  },
  paths: { sources: "src", tests : "tests" },
};

export default config;
