import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { ReactElement, useState } from 'react'
import { NextSeo } from 'next-seo'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Hydrate, QueryClientProvider, QueryClient } from 'react-query'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import Layout from '../layouts/Layout'
import dayjs from 'dayjs'
import Script from 'next/script'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement<any, any> | null
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

dayjs.extend(localizedFormat)

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { t } = useTranslation()

  const [queryClient] = useState(() => new QueryClient())

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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={(pageProps as any)?.dehydratedState}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TF9QTDZ');
      `}
        </Script>
        <NextSeo title={t(title)} description={t(description)} />
        {getLayout(<Component {...pageProps} />)}
        <GoogleAnalytics
          trackPageViews
          gaMeasurementId={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}
        />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
