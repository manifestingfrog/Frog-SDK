# frog Opensea Plugin 🐸 - TypeScript

Opensea plugin for [frog 🐸](https://ohmyfrog.dev). Allows you to create tools for getting NFT collection data from Opensea.

## Installation
```
npm install @frog-sdk/plugin-opensea
```

## Usage

```typescript
import { opensea } from "@frog-sdk/plugin-opensea";

const plugin = opensea({
    apiKey: process.env.OPENSEA_API_KEY as string,
});
```

## Working example

See the [Vercel AI example](https://github.com/frog-sdk/frog/tree/main/typescript/examples/vercel-ai/opensea) for a working example of how to use the Opensea plugin.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/2F8zTVnnFz)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
