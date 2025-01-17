import { type Chain, PluginBase } from "@frog-sdk/core";
import { arbitrum, avalanche, base, celo, mainnet, optimism, polygon, zora } from "viem/chains";
import type { UniswapCtorParams } from "./types/UniswapCtorParams";

const SUPPORTED_CHAINS = [mainnet, polygon, avalanche, base, optimism, zora, arbitrum, celo];

export class UniswapPlugin extends PluginBase {
    constructor(params: UniswapCtorParams) {
        super("uniswap", []);
    }

    supportsChain = (chain: Chain) => chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id);
}

export const uniswap = (params: UniswapCtorParams) => new UniswapPlugin(params);