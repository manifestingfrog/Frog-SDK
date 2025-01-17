# frog Wallet EVM 🐸 - TypeScript

## Installation
```
npm install @frog-sdk/wallet-viem
```

## Usage
```typescript
import { http } from "viem";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

import { getOnChainTools } from "@frog-sdk/adapter-vercel-ai";
import { viem } from "@frog-sdk/wallet-viem";


require("dotenv").config();

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);

const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: sepolia,
});

   const tools = await getOnChainTools({
        wallet: viem(walletClient),
    });

```
