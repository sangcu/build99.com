import pino from 'pino'

const logger = pino()

const withErrorHandling: (handler: (context: any) => Promise<any>) => any = (
  handler,
) => {
  return async (context: any) => {
    try {
      return await handler(context)
    } catch (error) {
      logger.error(error)

      return {
        props: {
          error: error,
        },
      }
    }
  }
}

export default withErrorHandling
