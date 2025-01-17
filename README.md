
<div align="center">
🐸 Frog SDK (Fast & Reliable Onchain Gateway) is an open-source framework designed to seamlessly integrate blockchain tools such as wallets, token trading, and smart contract interactions into your AI agent.
</div>


**Problem**: 

Making AI agents perform onchain actions is a cumbersome process. The blockchain ecosystem is fragmented, encompassing numerous agent frameworks, multiple programming languages, and diverse blockchain and wallet architectures. For developers without blockchain expertise, executing simple tasks—like transferring USDC or interacting with DeFi protocols—can feel insurmountable.

**Solution**: 
Frog SDK simplifies this complexity by offering an open-source, provider-agnostic framework that abstracts these combinations into a cohesive, user-friendly interface.

- **For agent developers**: Frog SDK provides an ever-expanding catalog of ready-to-use blockchain actions—such as sending tokens, interacting with DeFi protocols, and querying blockchain data—that can be integrated into your existing AI agent. It is compatible with popular agent frameworks such as Langchain, Vercel’s AI SDK, and Eliza, supporting development in both TypeScript and Python. Frog SDK connects to over 30 blockchains (e.g., Solana, Base, Polygon, Mode) and works with a variety of wallet providers.

- **For dApp / smart contract developers**: By developing a plugin within Frog SDK, you can enable AI agents from multiple frameworks to access and utilize your service seamlessly.


### Key features
1. **Works Everywhere**: Compatible with major agent frameworks, including Langchain, Vercel’s AI SDK, and Eliza.
2. **Wallet Agnostic**:    Supports all wallet types, from personal key pairs to solutions like Crossmint Smart Wallets and Coinbase Wallets.
3. **Multi-Chain**:   Works with EVM-compatible chains, Solana, and more blockchains in development.

4. **Customizable**:    Build and use plugins for any onchain functionality (e.g., sending tokens, checking wallet balances, executing smart contract interactions) and protocol integrations (e.g., Polymarket, Uniswap).


**Why Frog SDK?**
Frog SDK enables developers to leapfrog past the technical barriers of blockchain integration. Whether you're building AI-driven trading bots, DeFi protocols, or decentralized applications, Frog SDK simplifies the complexity and brings the power of the blockchain to your fingertips.


### How it works
frog plugs into your agents tool calling capabilities adding all the functions your agent needs to interact with the blockchain. 

High-level, here's how it works:

#### Configure the wallet you want to use
```typescript
// ... Code to connect your wallet (e.g createWalletClient from viem)
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
})
```

#### Add the plugins you need to interact with the protocols you want
```typescript
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
  plugins: [
    sendETH(),
    erc20({ tokens: [USDC, PEPE] }),
    faucet(),
    polymarket(),
    // ...
  ],
})
```

#### Connect it to your agent framework of choice
```typescript
// ... Code to connect your wallet (e.g createWalletClient from viem)
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
  plugins: [ 
    sendETH(),
    erc20({ tokens: [USDC, PEPE] }), 
    faucet(), 
    polymarket(), 
    // ...
  ],
})

// Vercel's AI SDK
const result = await generateText({
    model: openai("gpt-4o-mini"),
    tools: tools,
    maxSteps: 5,
    prompt: "Send 420 ETH to ohmyfrog.eth",
});
```

See [here](https://github.com/frog-sdk/frog/tree/main/typescript/examples) for more examples.