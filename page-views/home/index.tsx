import Introduction from './Introduction'
import AppDetail from './AppDetail'
import Architecture from './Architecture'
import HowItWork from './HowItWork'
import { NextPageWithLayout } from 'pages/_app'
import Layout from 'layouts/Layout'
import { ReactElement } from 'react'
import Footer from './Footer'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Introduction />
      <AppDetail />
      <Architecture />
      <HowItWork />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <Layout renderFooter={() => <Footer />}>{page}</Layout>
)

export default Home
