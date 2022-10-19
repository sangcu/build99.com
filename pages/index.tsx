import type { GetServerSideProps } from 'next'
import withErrorHandling from '../lib/server/withErrorHandling'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeView from 'page-views/home'

export const getServerSideProps: GetServerSideProps = withErrorHandling(
  async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['common'])),
      },
    }
  },
)

export default HomeView
