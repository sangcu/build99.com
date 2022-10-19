import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import withErrorHandling from '../lib/server/withErrorHandling'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import LogoIcon from 'public/logo.svg'
import Bars3Icon from 'public/icons/bars-3.svg'
import XMarkIcon from 'public/icons/x-mark.svg'
import ChevronDoubleRightIcon from 'public/icons/chevron-double-right.svg'

import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Docs', href: '#' },
  { name: 'Parners', href: '#' },
  { name: 'About Us', href: '#' },
]

const Home: NextPage = () => {
  const { t } = useTranslation()

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/">
                    <a className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
                      <LogoIcon />
                      <span className="text-lg font-bold">yLambda</span>
                    </a>
                  </Link>

                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">{t('Open main menu')}</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <button
                  onClick={() => setOpenModal(true)}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {t('Log in')}
                </button>
                <button
                  onClick={() => setOpenModal(true)}
                  className="inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-base font-medium text-white hover:bg-orange-600"
                >
                  {t('Sign Up')}
                </button>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden z-10"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <LogoIcon />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="block w-full rounded-md bg-gradient-to-r from-amber-500 to-orange-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-orange-700"
                    >
                      {t('Sign Up')}
                    </button>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      {t('Already have account?')}{' '}
                      <button
                        onClick={() => setOpenModal(true)}
                        className="text-gray-900 hover:underline"
                      >
                        {t('Login')}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="bg-gray-900 py-8 md:py-10 lg:py-12 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="">
                <div className="px-4 sm:px-6 lg:px-0">
                  <h1 className="flex space-y-1 lg:space-y-2 lg:space-y-0 lg:flex-row flex-col">
                    <span className="text-orange-500 font-bold text-4xl md:text-5xl lg:text-6xl">
                      {t('Opsless')}
                    </span>
                    <div className="hidden lg:block pb-2 self-end">
                      <svg
                        className="fill-current text-orange-500 "
                        width="8"
                        height="8"
                      >
                        <rect x="0" y="0" width="8" height="8" />
                      </svg>
                    </div>

                    <span className="lg:ml-2 text-white font-bold text-3xl md:text-4xl lg:text-5xl lg:self-end pb-1">
                      {t('Focus on writing code')}
                    </span>
                  </h1>
                  <p className="mt-2 lg:mt-4 text-gray-300 text-md md:text-lg lg:text-xl font-medium">
                    {t(
                      'Simplify “Ops” to help developer focus on writing code.',
                    )}
                  </p>

                  <div className="mt-4 md:mt-6 lg:mt-8 unset-img">
                    <Image
                      alt="System Overview"
                      src="/images/system-overview.png"
                      layout="fill"
                      className="responsive-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-50 pt-16 md:pt-18 lg:pt-24 sm:pt-24">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
                {t(
                  'Your best investment is architecture and ship business logic',
                )}
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-orange-600">
                {t('yLamda simplify the boring by automating')}
              </h2>
              <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8 space-y-4 lg:space-y-0">
                <div className="flex items-center">
                  <ul className="list-none text-left text-2xl md:text-3xl space-y-4 lg:space-y-8 font-medium text-gray-900">
                    <li className="flex items-center space-x-2">
                      <div>
                        <ChevronDoubleRightIcon className="w-6 h-6 text-orange-500 stroke-[3px]" />
                      </div>
                      <p>{t('Create the app')}</p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div>
                        <ChevronDoubleRightIcon className="w-6 h-6 text-orange-500 stroke-[3px]" />
                      </div>
                      <p>{t('Up and run in minutes')}</p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div>
                        <ChevronDoubleRightIcon className="w-6 h-6 text-orange-500 stroke-[3px]" />
                      </div>
                      <p>{t('We automating CI/CD and everying Ops')}</p>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <div className="w-full bg-gray-300 h-[550px] rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none shadow-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white pt-16 md:pt-18 lg:pt-24 py-12 md:py-16 lg:py-24">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                {t('Cloud Native approach. No vendor locked-in')}
              </h2>
              <p className="mt-2 text-gray-500 text-xl font-medium">
                {t(
                  'yLambda automatically install tools on your kubernetes cluster to ready for deployment and observiability',
                )}
              </p>
              <div className="mt-16 lg:grid lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
                  <div className="unset-img">
                    <Image
                      alt="System yLambda Architecture"
                      src="/images/architecture.png"
                      layout="fill"
                      className="responsive-img"
                    />
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-2 space-y-2">
                  <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                    <div className="unset-img w-[15%] lg:w-[25%]">
                      <Image
                        alt="git logo"
                        src="/images/brand-logo/git-logo.png"
                        layout="fill"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                    <div className="unset-img w-[40%] lg:w-[60%]">
                      <Image
                        alt="git logo"
                        src="/images/brand-logo/kubernetes-logo.png"
                        layout="fill"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                    <div className="unset-img  w-[40%] lg:w-[60%]">
                      <Image
                        alt="git logo"
                        src="/images/brand-logo/prometheus-logo.png"
                        layout="fill"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                    <div className="unset-img  w-[30%] lg:w-[45%]">
                      <Image
                        alt="git logo"
                        src="/images/brand-logo/envoy-logo.png"
                        layout="fill"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                  <div className="w-full h-24 bg-gray-50 flex items-center justify-center">
                    <div className="unset-img w-[25%] lg:w-[40%]">
                      <Image
                        alt="git logo"
                        src="/images/brand-logo/argo-logo.png"
                        layout="fill"
                        className="responsive-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-200 lg:relative lg:z-10 lg:pb-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-12 md:py-18 lg:py-24">
              <h2 className="text-white font-bold text-3xl">
                {t('Get start in minutes')}
              </h2>
              <div className="space-y-8">
                <div className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 border-4 border-orange-700 p-6 lg:border-0 lg:p-0">
                  <div className="lg:col-span-2 text-white lg:border-r-8 lg:border-r-orange-700 flex flex-col justify-center py-2 lg:py-4 lg:py-6">
                    <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                      01
                    </div>
                    <h3 className="mt-4 font-bold text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                      {t('Connect your git, kubernetes cluster')}
                    </h3>
                  </div>
                  <div className="mt-2 lg:mt-4 lg:mt-0 lg:col-span-3 text-white flex flex-col justify-center">
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      {'>'} yLamda connect git
                    </code>
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      Installing yLambda stack...
                    </code>
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      {' '}
                      Done in 3m.
                    </code>
                  </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 border-4 border-orange-700 p-6 lg:border-0 lg:p-0">
                  <div className="lg:col-span-2 text-white lg:border-r-8 lg:border-r-orange-700 flex flex-col justify-center py-2 lg:py-4 lg:py-6">
                    <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                      02
                    </div>
                    <h3 className="mt-4 font-bold text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                      <p>Create your app</p>
                      <p>Start to checkout code</p>
                    </h3>
                  </div>
                  <div className="col-span-3 text-white flex flex-col justify-center">
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      {' '}
                      {'>'} ylambda create hello-app --lang c#
                    </code>
                  </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 border-4 border-orange-700 p-6 lg:border-0 lg:p-0">
                  <div className="lg:col-span-2 text-white lg:border-r-8 lg:border-r-orange-700 flex flex-col justify-center py-2 lg:py-4 lg:py-6">
                    <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                      03
                    </div>
                    <h3 className="mt-4 font-bold text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                      {t('Deploy your code and access')}
                    </h3>
                  </div>
                  <div className="col-span-3 text-white flex flex-col justify-center">
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      {'>'} ylambda deploy
                    </code>
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      deployed https://ylambda.com/yl/david/34f3c3/
                    </code>
                    <code className="text-base md:text-lg lg:text-xl break-words">
                      logs streaming: https://ylambda.com/logs/yl/david/34f3c3/
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">
              <div className="">
                <div className="md:grid md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 uppercase">
                      {t('Company')}
                    </h3>
                    <p className="text-base text-gray-500">{t('About Us')}</p>
                    <p className="text-base text-gray-500">{t('Partners')}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 uppercase">
                      {t('Resources')}
                    </h3>
                    <p className="text-base text-gray-500">{t('Docs')}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-gray-900">
                      {t('Contact')}
                    </h3>
                    <p className="text-base text-gray-500">{t('LinkedIn')}</p>
                    <p className="text-base text-gray-500">{t('Github')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 space-y-8 lg:col-span-1 flex lg:justify-end">
                <div>
                  <p className="text-gray-900 font-semibold text-2xl">
                    {t('Get notified when we’re launching.')}
                  </p>
                  <p className="text-base text-gray-500">
                    {t('Be the first to have experience on the app.')}
                  </p>
                  <p className="text-base text-gray-500">
                    {t('No spam and unsubscribe at any time.')}
                  </p>
                  <div className="mt-4 flex justify-between space-x-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      className="px-3 py-2 w-full rounded-md border border-gray-300 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 disabled:cursor-not-allowed sm:text-sm"
                    />
                    <button className="flex-none inline-flex items-center rounded-md border border-transparent bg-orange-500 px-6 py-2 text-base font-medium text-white hover:bg-orange-600">
                      {t('Subscribe')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2022 yLambda. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setOpenModal(false)}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden lg:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 font-semibold text-2xl"
                  >
                    {t('Get notified when we’re launching.')}
                  </Dialog.Title>
                  <p className="text-base text-gray-500">
                    {t('Be the first to have experience on the app.')}
                  </p>
                  <p className="text-base text-gray-500">
                    {t('No spam and unsubscribe at any time.')}
                  </p>
                  <div className="mt-4 flex justify-between space-x-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      className="px-3 py-2 w-full rounded-md border border-gray-300 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 disabled:cursor-not-allowed sm:text-sm"
                    />
                    <button className="flex-none inline-flex items-center rounded-md border border-transparent bg-orange-500 px-6 py-2 text-base font-medium text-white hover:bg-orange-600">
                      {t('Subscribe')}
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withErrorHandling(
  async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['common'])),
      },
    }
  },
)

export default Home
