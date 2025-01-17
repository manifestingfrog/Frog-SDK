import { createToolParameters } from "@frog-sdk/core";
import { z } from "zod";

export class GetTrendingCoinsParameters extends createToolParameters(
    z.object({
        limit: z.number().optional().describe("The number of trending coins to return. Defaults to all coins."),
        include_platform: z
            .boolean()
            .optional()
            .describe("Include platform contract addresses (e.g., ETH, BSC) in response"),
    }),
) {}

export class GetCoinPriceParameters extends createToolParameters(
    z.object({
        coinId: z.string().describe("The ID of the coin on CoinGecko (e.g., 'bitcoin', 'ethereum')"),
        vsCurrency: z
            .string()
            .default("usd")
            .describe("The target currency to get price in (e.g., 'usd', 'eur', 'jpy')"),
        includeMarketCap: z.boolean().optional().default(false).describe("Include market cap data in the response"),
        include24hrVol: z.boolean().optional().default(false).describe("Include 24 hour volume data in the response"),
        include24hrChange: z
            .boolean()
            .optional()
            .default(false)
            .describe("Include 24 hour price change data in the response"),
        includeLastUpdatedAt: z
            .boolean()
            .optional()
            .default(false)
            .describe("Include last updated timestamp in the response"),
    }),
) {}

export class SearchCoinsParameters extends createToolParameters(
    z.object({
        query: z.string().describe("The search query to find coins (e.g., 'bitcoin' or 'btc')"),
    }),
) {}

export class GetCoinPriceByContractAddressParameters extends createToolParameters(
    z.object({
        id: z.string().describe("Asset platform's id (e.g., 'ethereum')"),
        contractAddresses: z.array(z.string()).describe("List of contract addresses for the tokens"),
        vsCurrency: z.string().default("usd").describe("Target currency (e.g., 'usd', 'eur')"),
        includeMarketCap: z.boolean().optional().default(false).describe("Include market cap data"),
        include24hrVol: z.boolean().optional().default(false).describe("Include 24hr volume"),
        include24hrChange: z.boolean().optional().default(false).describe("Include 24hr change"),
        includeLastUpdatedAt: z.boolean().optional().default(false).describe("Include last updated timestamp"),
    }),
) {}

export class GetCoinDataParameters extends createToolParameters(
    z.object({
        id: z.string().describe("Pass the coin id (can be obtained from the supported coins endpoint)"),
        localization: z.boolean().optional().default(false).describe("Include all localizations"),
        tickers: z.boolean().optional().default(true).describe("Include tickers data"),
        marketData: z.boolean().optional().default(true).describe("Include market data"),
        communityData: z.boolean().optional().default(true).describe("Include community data"),
        developerData: z.boolean().optional().default(true).describe("Include developer data"),
        sparkline: z.boolean().optional().default(false).describe("Include sparkline 7 days data"),
    }),
) {}

export class GetSupportedCoinsParameters extends createToolParameters(
    z.object({
        includePlatform: z.boolean().optional().default(false).describe("Include platform contract addresses"),
    }),
) {}

export class GetHistoricalDataParameters extends createToolParameters(
    z.object({
        id: z.string().describe("Pass the coin id (can be obtained from the supported coins endpoint)"),
        date: z.string().describe("The date of data snapshot in dd-mm-yyyy format"),
        localization: z.boolean().optional().default(true).describe("Include localized languages"),
    }),
) {}

export class GetOHLCParameters extends createToolParameters(
    z.object({
        id: z.string().describe("Pass the coin id (can be obtained from the supported coins endpoint)"),
        vsCurrency: z.string().default("usd").describe("The target currency of market data (usd, eur, jpy, etc.)"),
        days: z.number().describe("Data up to number of days ago (1/7/14/30/90/180/365/max)"),
    }),
) {}