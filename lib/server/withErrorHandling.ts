import pino from 'pino'
import { GetServerSideProps } from 'next'

const logger = pino()

const withErrorHandling: (handler: GetServerSideProps) => GetServerSideProps = (
  handler,
) => {
  return async (context) => {
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
