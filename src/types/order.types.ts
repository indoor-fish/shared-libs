export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface OrderLineItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderDTO {
  id: string;
  userId: string;
  status: OrderStatus;
  lines: OrderLineItem[];
  totalAmount: number;
  createdAt: string;
}
