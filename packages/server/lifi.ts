import { ChainId, createConfig, getQuote } from "@lifi/sdk";

createConfig({
  integrator: "pFrax",
});

const quote = await getQuote({
  fromAddress: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  fromChain: ChainId.ARB,
  toChain: ChainId.OPT,
  fee: 0.005,
  fromToken: "0x0000000000000000000000000000000000000000",
  toToken: "0x0000000000000000000000000000000000000000",
  fromAmount: "1000000000000000000",
});

console.log(quote);
