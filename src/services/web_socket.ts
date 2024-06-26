import type { INotification } from '@/interface/notification'
import { useWebSocket } from '@vueuse/core'

export const webSocket = useWebSocket(import.meta.env.VITE_WS_URL || 'ws://localhost:3000')

export const sendNotification = (data: INotification) => {
  webSocket.send(JSON.stringify(data))
  console.log('sendNotification', data)
}
