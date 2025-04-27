import suppliersData from '../data.json';

export type RiskCategory = 
  | 'Financial' 
  | 'Compliance' 
  | 'Operational' 
  | 'Reputational' 
  | 'Environmental' 
  | 'Geopolitical'
  | 'Cybersecurity'
  | 'Legal'
  | 'Supply Chain';

export interface Supplier {
  id: number;
  name: string;
  riskScore: number; // 1-10
  riskCategories: RiskCategory[];
  location: string;
  industry: string;
}

export const suppliers: Supplier[] = suppliersData.suppliers as Supplier[];

/**
 * Searchable queries for the supplier database
 */
export const searchSuppliers = {
  // Get suppliers by risk score
  byRiskScore: (threshold: number, comparison: 'greater' | 'less' | 'equal' = 'greater') => {
    return suppliers.filter(supplier => {
      if (comparison === 'greater') return supplier.riskScore >= threshold;
      if (comparison === 'less') return supplier.riskScore <= threshold;
      return supplier.riskScore === threshold;
    });
  },

  // Get top N suppliers by highest risk
  topRiskiest: (count: number = 3) => {
    return [...suppliers]
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, count);
  },
  
  // Get suppliers by industry
  byIndustry: (industry: string) => {
    const lowerIndustry = industry.toLowerCase();
    return suppliers.filter(supplier => 
      supplier.industry.toLowerCase().includes(lowerIndustry)
    );
  },
  
  // Get suppliers by location
  byLocation: (location: string) => {
    const lowerLocation = location.toLowerCase();
    return suppliers.filter(supplier => 
      supplier.location.toLowerCase().includes(lowerLocation)
    );
  },
  
  // Get suppliers by risk category
  byRiskCategory: (category: string) => {
    const lowerCategory = category.toLowerCase();
    return suppliers.filter(supplier => 
      supplier.riskCategories.some(cat => 
        cat.toLowerCase().includes(lowerCategory)
      )
    );
  },
  
  // Get all suppliers
  all: () => suppliers,

  allLimited: (limit: number) => suppliers.slice(0, limit),
}; 