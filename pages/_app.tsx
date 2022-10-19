import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import { NextSeo } from 'next-seo'
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
    title = 'Accommodation reservations | Tokyu Stay [Official]',
    description = 'This is the accommodation reservation page for Tokyu Stay. Tokyu Stay is a hotel that offers mid- to long-term stays equipped with a washer/dryer and a kitchenette, and is located in Tokyo and other parts of Japan. The hotel is located close to the station and can be booked on the same day, so it can be used not only for business trips but also for sightseeing and travel.',
  } = pageProps as any

  return (
    <>
      <NextSeo title={t(title)} description={t(description)} />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default appWithTranslation(MyApp)
