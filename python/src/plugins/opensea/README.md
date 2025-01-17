# OpenSea Plugin for frog SDK

This plugin provides integration with the OpenSea API for the frog SDK, allowing you to:
- Get NFT collection statistics
- Get recent NFT sales

## Installation

```bash
pip install frog-sdk-plugin-opensea
```

## Usage

```python
from frog_plugins.opensea import opensea, OpenSeaPluginOptions

# Initialize the plugin with your API key
plugin = opensea(OpenSeaPluginOptions(api_key="your-api-key"))

# Get NFT collection statistics
stats = await plugin.get_nft_collection_statistics({"collectionSlug": "collection-slug"})

# Get recent NFT sales
sales = await plugin.get_nft_sales({"collectionSlug": "collection-slug"})
```
