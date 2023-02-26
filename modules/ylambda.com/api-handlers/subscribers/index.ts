import post from './post'
import withHandlers from 'api-handlers/withHandlers'

const handlers = {
  post,
}

export default withHandlers(handlers)
