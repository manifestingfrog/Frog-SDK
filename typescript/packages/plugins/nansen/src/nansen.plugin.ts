import { PluginBase } from "@frog-sdk/core";
import { NansenService } from "./nansen.service";

interface NansenPluginOptions {
    apiKey: string;
}

export class NansenPlugin extends PluginBase {
    constructor({ apiKey }: NansenPluginOptions) {
        super("nansen", [new NansenService(apiKey)]);
    }

    supportsChain = () => true;
}

export function nansen(options: NansenPluginOptions) {
    return new NansenPlugin(options);
}
