import { tool } from 'ai';
import { z } from 'zod';

import { searchSuppliers } from './db/models/suppliers';

export const listSuppliersTool = tool({
    description: 'Return a few suppliers. Optionally specify how many to return.',
    parameters: z.object({
        limit: z.number().min(1).max(100).optional(),
    }),
    execute: async ({ limit }) => {
        const finalLimit = limit ?? 5;
        return searchSuppliers.allLimited(finalLimit);
    },
});

export const getSuppliersByRiskScoreTool = tool({
    description: 'Return Suppliers based on a provided threshold and comparison option',
    parameters: z.object({
        threshold: z.number(),
        comparison: z.enum(['greater', 'less', 'equal']).default('greater'),
    }),
    execute: async ({ threshold, comparison }) => {
        return searchSuppliers.byRiskScore(threshold, comparison)
    }
})