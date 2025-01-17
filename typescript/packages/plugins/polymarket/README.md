# frog Polymarket Plugin 🐸 - TypeScript

Polymarket plugin for [frog 🐸](https://ohmyfrog.dev). Allows you to create tools for interacting with Polymarket.

## Installation
```
npm install @frog-sdk/plugin-polymarket
```

## Usage

```typescript
import { polymarket } from "@frog-sdk/plugin-polymarket";


const plugin = polymarket({
    credentials: {
        key: process.env.POLYMARKET_API_KEY as string,
        secret: process.env.POLYMARKET_SECRET as string,
        passphrase: process.env.POLYMARKET_PASSPHRASE as string,
    },
});
```

## Working example

See the [Vercel AI example](https://github.com/frog-sdk/frog/tree/main/typescript/examples/vercel-ai/polymarket) for a working example of how to use the Polymarket plugin.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
