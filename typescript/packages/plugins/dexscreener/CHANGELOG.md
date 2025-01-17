# @frog-sdk/plugin-dexscreener

## 0.1.4

### Patch Changes

- 2b4b8e8: worldstore: initial release
- Updated dependencies [2b4b8e8]
  - @frog-sdk/core@0.4.6

## 0.1.3

### Patch Changes

- Updated dependencies [b9af25b]
  - @frog-sdk/core@0.4.5

## 0.1.2

### Patch Changes

- Updated dependencies [50180d4]
  - @frog-sdk/core@0.4.4

## 0.1.1

### Patch Changes

- 02ccdca: feat: add dexscreener plugin with rate-limited API tools for DEX pair data

  - Implements getPairsByChainAndPair for fetching specific pairs
  - Adds searchPairs for query-based pair discovery
  - Provides getTokenPairs for bulk token pair information
  - Includes built-in rate limiting (300 req/min for pairs endpoint)