import type { NextApiRequest, NextApiResponse } from 'next'
import { Logger } from 'pino'

export type HandlerType = (params: {
  req: NextApiRequest
  res: NextApiResponse
  logger: Logger
}) => void
