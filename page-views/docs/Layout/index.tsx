import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Bars3Icon from 'public/icons/bars-3.svg'
import XMarkIcon from 'public/icons/x-mark.svg'
import Naviation from '../Navigation'
import getCurrentPageName from '../_utils/getCurrentPageName'

const DocumentationLayout: React.FC<{
  slug: string
  children: JSX.Element
}> = ({ slug, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentPageName = getCurrentPageName(slug)

  return (
    <div className="bg-transparent">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed top-[72px] lg:top-[74px] left-0 right-0 bottom-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4 px-8">
                      <Naviation
                        currentSlug={slug}
                        onItemClick={() => setSidebarOpen(false)}
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-0 pt-20">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-transparent pt-5">
              <div className="flex flex-grow flex-col">
                <Naviation currentSlug={slug} />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:pl-64">
            <div className="sticky top-0 z-10 pt-6 sm:pl-3 sm:pt-3 md:hidden flex items-center space-x-4">
              <button
                type="button"
                className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <h1 className="text-base font-medium text-gray-900">
                {currentPageName}
              </h1>
            </div>
            <main className="flex-1 sm:pr-6 pr-4">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationLayout
