export interface ProductDTO {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  stockCount: number;
  sku: string;
}

export interface InventoryDTO {
  productId: string;
  available: number;
  reserved: number;
  lastUpdated: string;
}

export interface PricingRuleDTO {
  ruleId: string;
  type: 'PERCENTAGE' | 'FLAT' | 'TIER';
  discount: number;
  conditions: Record<string, unknown>;
  active: boolean;
}
