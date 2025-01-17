import { Chain, PluginBase } from "@frog-sdk/core";
import { CosmosClient } from "@frog-sdk/wallet-cosmos";
import { BankService } from "./bank.service";

export class BANKPlugin extends PluginBase<CosmosClient> {
    constructor() {
        super("cosmosbank", [new BankService()]);
    }

    supportsChain = (chain: Chain) => chain.type === "cosmos";
}

export async function cosmosbank() {
    return new BANKPlugin();
}
