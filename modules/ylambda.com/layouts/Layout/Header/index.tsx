import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTranslation } from 'next-i18next'

import LogoIcon from 'public/logo.svg'
import Bars3Icon from 'public/icons/bars-3.svg'
import XMarkIcon from 'public/icons/x-mark.svg'

import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
const navigation = [
  {
    name: 'Pricing',
    href: '/pricing',
    isCurrent: (pathName: string) => pathName?.includes('pricing'),
  },
  {
    name: 'Blog',
    href: '/blog',
    isCurrent: (pathName: string) => pathName?.includes('blog'),
  },
  // {
  //   name: 'About Us',
  //   href: '/about',
  //   isCurrent: (pathName: string) => pathName?.includes('about'),
  // },
]

interface HeaderProps {
  onSignIn: () => void
  onSignUp: () => void
}

const Header: React.FC<HeaderProps> = ({ onSignIn, onSignUp }) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Popover
      as="header"
      className="fixed left-0 top-0 w-full bg-gray-900 bg-clip-padding z-50"
    >
      <div className="py-4">
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
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      'text-base font-medium ',
                      item?.isCurrent && item?.isCurrent(router.pathname)
                        ? 'text-orange-500 hover:text-orange-600 font-semibold'
                        : 'text-white hover:text-gray-300',
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button
              onClick={onSignIn}
              className="text-base font-medium text-white hover:text-gray-300"
            >
              {t('Log in')}
            </button>
            <button
              onClick={onSignUp}
              className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white hover:bg-orange-700"
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
          {({ close }) => (
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <Link href="/">
                  <LogoIcon />
                </Link>
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
                    <Link href={item.href} key={item.name}>
                      <a
                        onClick={() => close()}
                        className={classNames(
                          'block rounded-md px-3 py-2 text-base ',
                          item?.isCurrent && item?.isCurrent(router.pathname)
                            ? 'text-orange-600 hover:bg-gray-50 font-semibold'
                            : 'font-medium text-gray-900 hover:bg-gray-50',
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <button
                    onClick={onSignIn}
                    className="block w-full rounded-md bg-gradient-to-r from-amber-500 to-orange-600 py-3 px-4 text-center font-medium text-white shadow hover:from-amber-600 hover:to-orange-700"
                  >
                    {t('Sign Up')}
                  </button>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    {t('Already have account?')}{' '}
                    <button
                      onClick={onSignUp}
                      className="text-gray-900 hover:underline"
                    >
                      {t('Login')}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
