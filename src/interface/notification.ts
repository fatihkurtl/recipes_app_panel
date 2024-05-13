export interface NotificationSendType {
  title: string
  thumbnail: File[]
  category: string
  description: string
}

export interface INotification {
  tr: NotificationSendType
  en: NotificationSendType
}
