# frog Wallet Fuel 🐸 - TypeScript

## Installation

```
npm install @frog-sdk/wallet-fuel
```

## Usage

```typescript
import { Provider, Wallet } from "fuels";
import { fuel } from "@frog-sdk/wallet-fuel";
import { getOnChainTools } from "@frog-sdk/core";

const provider = await Provider.create(
    "https://mainnet.fuel.network/v1/graphql"
);

const tools = await getOnChainTools({
    wallet: fuel({
        privateKey: process.env.FUEL_WALLET_PRIVATE_KEY,
        provider,
    }),
});
```
