import { Chain, PluginBase } from "@frog-sdk/core";
import { SNSService } from "./sns.service";

export class SNSPlugin extends PluginBase {
    constructor() {
        super("sns", [new SNSService()]);
    }

    supportsChain = (chain: Chain) => chain.type === "solana";
}

export const sns = () => new SNSPlugin();
