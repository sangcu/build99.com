import { event as gaEvent } from 'nextjs-google-analytics'

declare type EventOptions = Record<string, any> & {
  category?: string
  label?: string
  value?: number
  nonInteraction?: boolean
  userId?: string
}

export const event = (action: string, options?: EventOptions) =>
  gaEvent(action, options, process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID)
