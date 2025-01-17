import { createToolParameters } from "@frog-sdk/core";
import { z } from "zod";

export class ResolveSNSDomainParameters extends createToolParameters(
    z.object({
        domain: z.string(),
    }),
) {}
