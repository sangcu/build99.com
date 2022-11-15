import { useTranslation } from 'next-i18next'
import { NextPageWithLayout } from 'pages/_app'
import { ReactElement } from 'react'
import Link from 'next/link'

import { CONTACT_PAGE_URL } from 'page-views/constants'

import Layout from 'layouts/Layout'
import Footer from 'page-views/home/Footer'

import CheckIcon from 'public/icons/check.svg'
import ArrowTopRightOnSquareIcon from 'public/icons/arrow-top-right-on-square.svg'
import SparklesIcon from 'public/icons/sparkles.svg'

const cultures = [
  {
    name: 'Working Environment',
    description:
      'We’re big believers in working remotely, async communication.',
  },
  {
    name: 'Team Spirit',
    description: 'A value-driven, small but outperforming team.',
  },
  {
    name: 'Characteristic ',
    description: 'Positive, Open, and Humanity.',
  },
]

const About: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="bg-gradient-to-b from-orange-100 via-white to-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl space-x-2">
                <span className="text-gray-900">{t('Simplicity in')}</span>
                <span className="text-orange-600">
                  {t('Software Development.')}
                </span>
              </h1>
              <p className="mt-5 text-2xl text-gray-500">
                {t("It's our takeaways from years in the software industry.")}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-16">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-400 to-orange-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                {t(
                  "We are software engineers who focus on iterating to build high-quality software and believe that simple products take significant time and effort, and it's a continuous discovery process.",
                )}
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {t(
                  "yLambda is one of our products to simplify Ops. It's like Vercel but for cross-platform based on Kubernetes.",
                )}
              </p>
            </div>
          </div>
          <div className="pt-12">
            <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {cultures.map((culture) => (
                <div key={culture.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                      {t(culture.name)}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4">
                    {t(culture.description)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-orange-400">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="block text-orange-900">
              {t('We’d love to hear from you!')}
            </span>
            <span className="block text-white">
              {t('Send us a message using the form opposite, or email us')}
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href={CONTACT_PAGE_URL}>
                <a
                  target="_blank"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium text-grape-600 shadow-md hover:bg-grape-50 sm:w-auto"
                >
                  <span>{t('Contact Us')}</span>
                  <ArrowTopRightOnSquareIcon
                    className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = (page: ReactElement) => (
  <Layout renderFooter={() => <Footer />}>{page}</Layout>
)

export default About
