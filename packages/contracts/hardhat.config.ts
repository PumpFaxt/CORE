import type { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  paths: {
    sources: "./src",
  },
}

export default config
