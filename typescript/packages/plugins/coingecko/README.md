# frog Coingecko Plugin 🐸 - TypeScript

Coingecko plugin for frog. Allows you to create tools for interacting with the CoinGecko API.

## Installation
```
npm install @frog-sdk/plugin-coingecko
```

## Setup
    
```typescript
import { coingecko } from "@frog-sdk/plugin-coingecko";

const plugin = coingecko({ 
    apiKey: process.env.COINGECKO_API_KEY 
});
```

## Available Actions

### Get Trending Coins
Fetches the current trending cryptocurrencies.

### Get Coin Price
Fetches the current price and optional market data for a specific cryptocurrency.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
