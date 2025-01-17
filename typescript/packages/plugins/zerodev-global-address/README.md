# frog ZeroDev Global Address Plugin 🐸 - TypeScript

ZeroDev Global Address plugin for [frog 🐸](https://ohmyfrog.dev). Allows you to create tools for managing global addresses that can receive tokens from multiple chains.

## Installation
```
npm install @frog-sdk/plugin-zerodev-global-address
```

## Usage

```typescript
import { ZeroDevGlobalAddressService } from "@frog-sdk/plugin-zerodev-global-address";
import { optimism } from 'viem/chains';

const plugin = new ZeroDevGlobalAddressService(
  // Optional parameter with default:
  defaultSlippage = 5000 // Slippage tolerance in basis points (50%)
);

// Create a global address with custom parameters
await plugin.createGlobalAddressConfig({
  owner: '0x...', // Required: Address that will own the global address
  destChain: optimism, // Optional: Destination chain (defaults to Optimism)
  slippage: 5000 // Optional: Slippage tolerance in basis points (50%)
});
```

## Features

- Create global addresses that can receive tokens from multiple chains
- Automatic token bridging to your destination chain
- Support for multiple chains:
  - Ethereum Mainnet
  - Polygon
  - Optimism
  - Arbitrum
  - Base
  - Scroll
  - Mode
- Support for different token types:
  - Native tokens
  - ERC20 tokens
  - USDC
  - Wrapped native tokens

## Working example

See the [Vercel AI example](https://github.com/frog-sdk/frog/tree/main/typescript/examples/vercel-ai/zerdev-global-address-transfer) for a working example of how to use the ZeroDev Global Address plugin.

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/2F8zTVnnFz)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
