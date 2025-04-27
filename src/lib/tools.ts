import { tool } from 'ai';
import { z } from 'zod';

import { searchSuppliers } from './db/models/suppliers';

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