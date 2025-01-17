# frog SPL Token Plugin 🐸 - TypeScript

SPL Token plugin for frog. Allows you to create tools for transferring and getting the balance of SPL tokens.

## Installation
```
npm install @frog-sdk/plugin-spl-token
```

## Usage

```typescript
import { splToken, USDC, frog } from "@frog-sdk/plugin-spl-token";

const plugin = splToken({
    connection,
    network: "mainnet",
    tokens: [USDC, frog],
});
```

### Adding custom tokens
```typescript
import { splToken } from "@frog-sdk/plugin-spl-token";


const plugin = splToken({
    tokens: [
        USDC,
        {
            decimals: 9,
            symbol: "POPCAT",
            name: "Popcat",
            mintAddresses: {
                "mainnet": "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
            },
        },
    ],
});
```

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
