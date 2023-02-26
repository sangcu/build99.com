import type { GetStaticProps } from 'next'
import withErrorHandling from '../lib/server/withErrorHandling'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeView from 'page-views/home'
import { dehydrate, QueryClient } from 'react-query'

export const getStaticProps: GetStaticProps = withErrorHandling(
  async ({ locale }) => {
    const queryClient = new QueryClient()

    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['common'])),
        dehydratedState: dehydrate(queryClient),
      },
    }
  },
)

export default HomeView
