# frog Uniswap Plugin 🐸 - TypeScript

Uniswap plugin for [frog 🐸](https://ohmyfrog.dev). Allows you to create tools for interacting with Uniswap.

## Installation
```
npm install @frog-sdk/plugin-uniswap
```

## Usage

```typescript
import { uniswap } from "@frog-sdk/plugin-uniswap";


const plugin = uniswap({
    baseUrl: process.env.UNISWAP_BASE_URL as string,
    apiKey: process.env.UNISWAP_API_KEY as string,
});
```

## Working example

See the [Vercel AI example](https://github.com/frog-sdk/frog/tree/main/typescript/examples/vercel-ai/uniswap) for a working example of how to use the Uniswap plugin.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/2F8zTVnnFz)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
