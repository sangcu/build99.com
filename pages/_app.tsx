import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import { NextSeo } from 'next-seo'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import Layout from '../layouts/Layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement<any, any> | null
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { t } = useTranslation()

  if ((pageProps as any)?.error) {
    return (
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-2xl text-error">{t('Something when wrong!')}</h1>
        </div>
      </div>
    )
  }

  const getLayout = !Component.getLayout
    ? (page: ReactElement) => <Layout>{page}</Layout>
    : Component.getLayout

  const {
    title = 'yLambda | Opsless - Help developers focus on technical excellence',
    description = 'Simplify “Ops” workflow to help developer focus on design code.',
  } = pageProps as any

  return (
    <>
      <NextSeo title={t(title)} description={t(description)} />
      {getLayout(<Component {...pageProps} />)}
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}
      />
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GA3_TRACKING_ID}
      />
    </>
  )
}

export default appWithTranslation(MyApp)
