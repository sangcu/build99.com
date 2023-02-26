import withErrorHandling from 'lib/server/withErrorHandling'
import type { GetServerSideProps } from 'next'
import { DEFAULT_SLUG } from 'page-views/docs/constants'

const Documentation: React.FC = () => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = withErrorHandling(
  async () => {
    return {
      redirect: {
        permanent: false,
        destination: `/docs/${DEFAULT_SLUG}`,
      },
    }
  },
)

export default Documentation
