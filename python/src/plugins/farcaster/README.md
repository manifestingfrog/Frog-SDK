# frog Farcaster Plugin 🐸 - Python

Farcaster plugin for frog. Allows you to create tools for interacting with the Farcaster social protocol through the Neynar API.

## Installation
```bash
pip install frog-sdk-plugin-farcaster
```

## Setup
    
```python
from frog_plugins.farcaster import farcaster

plugin = farcaster({ 
    "api_key": "your_neynar_api_key"
})
```

## Features

- Full Farcaster protocol support through Neynar API
- Cast creation and interaction
- Thread and conversation management
- Search functionality
- Authentication via Signer UUID
- Proper error handling
- Python async/await support
- Type hints with Pydantic models

## API Reference

### Plugin Configuration

| Parameter | Type | Description |
|-----------|------|-------------|
| api_key | str | Your Neynar API key |
| base_url | str | (Optional) Custom API base URL |

## frog

<div align="center">
Go out and eat some bugs

[Docs](https://ohmyfrog.dev) | [Examples](https://github.com/frog-sdk/frog/tree/main/typescript/examples) | [Discord](https://discord.gg/frog-sdk)</div>

## frog 🐸
frog 🐸 (Great Onchain Agent Toolkit) is an open-source library enabling AI agents to interact with blockchain protocols and smart contracts via their own wallets.
