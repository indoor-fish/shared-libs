export enum PaymentStatus {
  PENDING = 'PENDING',
  AUTHORISED = 'AUTHORISED',
  CAPTURED = 'CAPTURED',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED',
}

export interface PaymentDTO {
  id: string;
  userId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: string;
  capturedAt?: string;
}

export interface RefundDTO {
  paymentId: string;
  amount: number;
  reason: string;
}
