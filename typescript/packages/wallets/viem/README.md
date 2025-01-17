# frog Wallet Viem 🐸 - TypeScript

## Installation
```
npm install @frog-sdk/wallet-viem
```

## Usage
```typescript
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import { http } from "viem";

import { getOnChainTools } from "@frog-sdk/adapter-vercel-ai";
import { viem } from "@frog-sdk/wallet-viem";

const account = privateKeyToAccount(
    process.env.WALLET_PRIVATE_KEY as `0x${string}`
);

const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.ALCHEMY_API_KEY),
    chain: sepolia,
});

const tools = await getOnChainTools({
    wallet: viem(walletClient),
});
```
