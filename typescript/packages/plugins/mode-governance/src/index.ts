import { Chain, PluginBase } from "@frog-sdk/core";
import { EVMWalletClient } from "@frog-sdk/wallet-evm";
import { mode } from "viem/chains";
import { ModeGovernanceService } from "./mode-governance.service";

const SUPPORTED_CHAINS = [mode];

export class ModeGovernancePlugin extends PluginBase<EVMWalletClient> {
    constructor() {
        super("mode-governance", [new ModeGovernanceService()]);
    }

    supportsChain = (chain: Chain) => chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id);
}

export const modeGovernance = () => new ModeGovernancePlugin();

export * from "./constants";