import type { NextApiRequest, NextApiResponse } from 'next'
import pino from 'pino'
import type { HandlerType } from './HandlerType'

const logger = pino()

export interface HandlerList {
  [key: string]: HandlerType
}

const withHandlers =
  (handlers: HandlerList) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req?.method?.toLowerCase() || ''

    const handler = handlers[method]

    if (!handler) {
      res.status(404).json('Not Found')
      return
    }

    try {
      await handler({ req, res, logger })
    } catch (err) {
      logger.error(err)
      res.status(500).json('Something went wrong')
    }
  }

export default withHandlers
