import { createToolParameters } from "@frog-sdk/core";
import { z } from "zod";

export class GetBalancesParameters extends createToolParameters(
    z.object({
        walletAddress: z.string().optional().describe("The wallet address to check balances for"),
    }),
) {}
