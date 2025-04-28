import { tool } from 'ai';
import { z } from 'zod';

import { searchSuppliers } from './db/models/suppliers';

export const listSuppliers = tool({
    description: 'Return a few suppliers. Optionally specify how many to return.',
    parameters: z.object({
        limit: z.number().min(1).max(100).optional(),
    }),
    execute: async ({ limit }) => {
        const finalLimit = limit ?? 5;
        return searchSuppliers.allLimited(finalLimit);
    },
});

export const getSuppliersByRiskScore = tool({
    description: 'Return Suppliers based on a provided threshold and comparison option',
    parameters: z.object({
        threshold: z.number(),
        comparison: z.enum(['greater', 'less', 'equal']).default('greater'),
    }),
    execute: async ({ threshold, comparison }) => {
        return searchSuppliers.byRiskScore(threshold, comparison)
    }
})

export const getTopRiskiestSuppliers = tool({
    description: 'Return the top N suppliers with the highest risk scores',
    parameters: z.object({
        count: z.number().min(1).max(50).default(3),
    }),
    execute: async ({ count }) => {
        return searchSuppliers.topRiskiest(count);
    }
});

export const getLowestRiskSuppliers = tool({
    description: 'Return the N suppliers with the lowest risk scores',
    parameters: z.object({
        count: z.number().min(1).max(50).default(3),
    }),
    execute: async ({ count }) => {
        const allSuppliers = searchSuppliers.all();
        return [...allSuppliers]
            .sort((a, b) => a.riskScore - b.riskScore)
            .slice(0, count);
    }
});

export const getSuppliersByIndustry = tool({
    description: 'Return suppliers in a specific industry',
    parameters: z.object({
        industry: z.string(),
    }),
    execute: async ({ industry }) => {
        return searchSuppliers.byIndustry(industry);
    }
});

export const getSuppliersByRiskCategory = tool({
    description: 'Return suppliers that have a specific risk category',
    parameters: z.object({
        category: z.string(),
    }),
    execute: async ({ category }) => {
        return searchSuppliers.byRiskCategory(category);
    }
});

export const getSuppliersByMultipleRiskCategories = tool({
    description: 'Return suppliers that have multiple specified risk categories (e.g. Financial AND Compliance)',
    parameters: z.object({
        categories: z.array(z.string()).min(1),
    }),
    execute: async ({ categories }) => {
        const allSuppliers = searchSuppliers.all();
        return allSuppliers.filter(supplier => 
            categories.every(category => {
                const lowerCategory = category.toLowerCase();
                return supplier.riskCategories.some(cat => 
                    cat.toLowerCase().includes(lowerCategory)
                );
            })
        );
    }
});

export const getSuppliersByLocation = tool({
    description: 'Return suppliers in a specific location',
    parameters: z.object({
        location: z.string(),
    }),
    execute: async ({ location }) => {
        return searchSuppliers.byLocation(location);
    }
});