# frog Pump.fun Plugin 🐸 - TypeScript

Pump.fun plugin for frog. Allows you to create tools for interacting with the Pump.fun API.

## Installation
```
npm install @frog-sdk/plugin-pumpfun
```

## Setup

```typescript
import { pumpfun } from "@frog-sdk/plugin-pumpfun";

const plugin = pumpfun();
```

## Available Actions

### Create and Buy Token
Creates a token and buys it using pump.fun.

Parameters:
- `name`: The name of the token.
- `symbol`: The symbol of the token.
- `description`: The description of the token.
- `imageUrl`: The image URL of the token.
- `amountToBuyInSol`: The amount of tokens to buy in SOL base units.
- `slippage`: The slippage percentage.
- `priorityFee`: The priority fee in lamports.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
