export enum NotificationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}

export interface NotificationPayload {
  userId: string;
  topic: string;
  channel: NotificationChannel;
  data: Record<string, unknown>;
  requestId?: string;
}
