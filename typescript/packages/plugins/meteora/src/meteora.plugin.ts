import { type Chain, PluginBase } from "@frog-sdk/core";
import { MeteoraService } from "./meteora.service";

export class MeteoraPlugin extends PluginBase {
    constructor() {
        super("meteora", [new MeteoraService()]);
    }

    supportsChain = (chain: Chain) => chain.type === "solana";
}

export const meteora = () => new MeteoraPlugin();
