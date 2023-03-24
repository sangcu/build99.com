import {
    SparklesIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import Layout from 'layouts/Layout'
import Footer from 'molecules/Footer'
import { NextPageWithLayout } from 'pages/_app'
import { ReactElement } from 'react'

const PrivacyPolicy: NextPageWithLayout = () => {
    return (
        <>
            <h1>Privacy Policy</h1>
        </>
    )
}

PrivacyPolicy.getLayout = (page: ReactElement) => (
    <Layout renderFooter={() => <Footer />}>{page}</Layout>
)

export default PrivacyPolicy
