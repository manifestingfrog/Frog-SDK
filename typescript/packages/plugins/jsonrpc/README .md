# frog JsonRpc Plugin 🐸 - TypeScript

JsonRpc plugin for [frog 🐸](https://ohmyfrog.dev). Use this plugin to make Rpc calls to endpoints.

## Installation
```
npm install @frog-sdk/plugin-jsonrpc
```

## Usage

```typescript
import { jsonrpc } from "@frog-sdk/plugin-jsonrpc";


const plugin = jsonrpc({
    endpoint: process.env.ENDPOINT_URL as string,
});
```

## Available Actions

### Call A Method
- Make rpc call to an on chain method using an agent and a  chat model e.g input  
    -`make a JSONRpc call with this method {{ eth_blockNumber }}` 


## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/2F8zTVnnFz)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
