import Introduction from './Introduction'
import { NextPageWithLayout } from 'pages/_app'
import Layout from 'layouts/Layout'
import { ReactElement } from 'react'
import Footer from 'molecules/Footer'
import AppDetail from './AppDetail'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Introduction />
      <AppDetail />
      {/* <Architecture />
      <HowItWork /> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <Layout renderFooter={() => <Footer />}>{page}</Layout>
)

export default Home
