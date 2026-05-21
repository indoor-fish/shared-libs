export const MESSAGE_TOPICS = {
  ORDER_CREATED: 'order.created',
  ORDER_SHIPPED: 'order.shipped',
  PAYMENT_PROCESSED: 'payment.processed',
  PAYMENT_FAILED: 'payment.failed',
  USER_REGISTERED: 'user.registered',
} as const;

export type MessageTopic = (typeof MESSAGE_TOPICS)[keyof typeof MESSAGE_TOPICS];
