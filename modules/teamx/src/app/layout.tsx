'use client'

import './globals.css'
import { Disclosure } from '@headlessui/react'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'
import LogoIcon from 'public/logo.svg'
import DbExport from '@/database/export'
import { MouseEvent } from 'react'

export const navigation = [
  { name: 'Import', href: '/import', current: true },
  {
    name: 'Export', href: '#', current: false, onClick: async (event: MouseEvent) => {
      event.preventDefault()
      await DbExport()
    }
  },
  { name: 'Editor', href: '/lexical-playground', current: false },
]

const userNavigation = [
  { name: "Who's next", href: '#' },
  { name: 'Create vote', href: '#' },
  { name: '360 Feedbacks', href: '#' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="relative flex min-h-full flex-col">
          {/* Navbar */}
          <Disclosure
            as="header"
            className="z-[100] flex-shrink-0 bg-orange-600"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    {/* Logo section */}
                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                      <Link href='/'>
                        <div className="flex items-center flex-shrink-0">
                          <LogoIcon />
                          <div className="pl-2">
                            <div className="text-white font-bold text-2xl">
                              yLeader
                            </div>
                            <div className="text-orange-50 text-xs">
                              Helping people succeed.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-orange-600 p-2 text-orange-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3CenterLeftIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    {/* Links section */}
                    <div className="hidden lg:block lg:w-80">
                      <div className="flex items-center justify-end">
                        <div className="flex">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={item.onClick}
                              className="rounded-md px-3 py-2 text-sm font-medium text-orange-200 hover:text-white"
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-white bg-orange-700'
                            : 'text-orange-200 hover:text-orange-100 hover:bg-orange-600',
                          'block px-3 py-2 rounded-md text-base font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>

                  <div className="border-t border-orange-800 pt-4 pb-3 px-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full"
                    >
                      Create New Member
                    </button>
                    <div className="space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-orange-200 hover:bg-orange-600 hover:text-orange-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* 3 column wrapper */}
          <main className="mx-auto w-full max-w-7xl flex-grow lg:flex">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
