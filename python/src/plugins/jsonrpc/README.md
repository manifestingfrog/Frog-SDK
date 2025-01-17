# frog SDK JSON-RPC Plugin

A plugin for the frog SDK that enables making JSON-RPC calls to any compatible endpoint.

## Features

- Make JSON-RPC calls to any compatible endpoint
- Supports standard JSON-RPC 2.0 protocol
- Fully async implementation using aiohttp
- Integrates seamlessly with frog SDK and LangChain

## Installation

```bash
poetry add frog-sdk-plugin-jsonrpc
```

## Usage

```python
from frog_plugins.jsonrpc import jsonrpc, JSONRpcPluginOptions

# Initialize the plugin with your RPC endpoint
tools = get_on_chain_tools(
    wallet=wallet_client,
    plugins=[
        jsonrpc(options=JSONRpcPluginOptions(endpoint="your-rpc-endpoint"))
    ],
)

# Example JSON-RPC call
response = await tools.JSONRpcFunc({
    "method": "eth_blockNumber",
    "params": [],
    "id": 1,
    "jsonrpc": "2.0"
})
```

## License

This project is licensed under the terms of the MIT license.
