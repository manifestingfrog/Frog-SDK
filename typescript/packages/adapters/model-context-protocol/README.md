# frog Adapter Model Context Protocol (Claude) 🐸 - TypeScript

## Installation
```
npm install @frog-sdk/adapter-model-context-protocol
```

## Usage

Check out the [viem example](https://github.com/frog-sdk/frog/tree/main/typescript/examples/model-context-protocol/viem) for a full MCP server example.

```ts
const { listOfTools, toolHandler } = await getOnChainTools({
    wallet: viem(walletClient),
    plugins: [sendETH(), erc20({ tokens: [USDC, MODE] }), kim()],
});
```

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
