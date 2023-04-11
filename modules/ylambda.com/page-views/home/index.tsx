import Introduction from './Introduction'
import { NextPageWithLayout } from 'pages/_app'
import Layout from 'layouts/Layout'
import { ReactElement } from 'react'
import Footer from 'molecules/Footer'

import YourProblems from './YourProblems'
import BadPractices from './BadPractices'
import Solutions from './Solutions'
import Subscription from './Subscription'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Introduction />
      <YourProblems />
      <BadPractices />
      <Solutions />
      <Subscription />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <Layout renderFooter={() => <Footer />}>{page}</Layout>
)

export default Home
