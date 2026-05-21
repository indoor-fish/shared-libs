export const SERVICE_URLS = {
  USER_SERVICE_URL: process.env.USER_SERVICE_URL ?? 'http://localhost:3001',
  PAYMENT_SERVICE_URL: process.env.PAYMENT_SERVICE_URL ?? 'http://localhost:3002',
  CATALOG_SERVICE_URL: process.env.CATALOG_SERVICE_URL ?? 'http://localhost:3003',
  ORDER_SERVICE_URL: process.env.ORDER_SERVICE_URL ?? 'http://localhost:3004',
  NOTIFICATION_SERVICE_URL: process.env.NOTIFICATION_SERVICE_URL ?? 'http://localhost:3005',
} as const;
