import { Modal } from 'components'
import {
  CONTACT_PAGE_URL,
  GITHUB_PAGE_URL,
  LINKED_IN_PAGE_URL,
} from 'page-views/constants'
import useSubscribe from 'hooks/useSubscribe'
import SubscriptionError from 'molecules/SubscriptionError'
import SubscriptionForm from 'molecules/SubscriptionForm'
import SubscriptionSuccess from 'molecules/SubscriptionSuccess'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const pageGroups = [
  {
    name: 'Company',
    pageList: [
      {
        name: 'About Us',
        url: '#',
      },
    ],
  },
  {
    name: 'Resources',
    pageList: [
      {
        name: 'Docs',
        url: '/docs',
      },
      {
        name: 'Blog',
        url: '#',
      },
    ],
  },
  {
    name: 'Contact',
    pageList: [
      {
        name: 'LinkedIn',
        url: LINKED_IN_PAGE_URL,
        target: '_blank',
      },
      {
        name: 'Github',
        url: GITHUB_PAGE_URL,
        target: '_blank',
      },
      {
        name: 'Contact Us',
        url: CONTACT_PAGE_URL,
        target: '_blank',
      },
    ],
  },
]

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const {
    isLoading: isSubscribing,
    isSuccess: isSubscribeSuccess,
    error: subscribeError,
    mutate: onSubscribe,
    reset,
  } = useSubscribe()

  return (
    <>
      <footer className="w-full bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="">
              <div className="md:grid md:grid-cols-3">
                {pageGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 uppercase">
                      {t(group.name)}
                    </h3>
                    {group.pageList.map((page) => (
                      <div key={t(page.name)}>
                        <Link href={page.url}>
                          <a
                            target={page?.target}
                            className="text-base text-gray-500"
                          >
                            {page.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0 space-y-8 lg:col-span-1 flex lg:justify-end">
              <SubscriptionForm
                isLoading={isSubscribing}
                onSubscribe={onSubscribe}
              />
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 py-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2022 yLambda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Modal isOpen={isSubscribeSuccess || !!subscribeError} onClose={reset}>
        {isSubscribeSuccess ? (
          <SubscriptionSuccess onClose={reset} />
        ) : (
          <SubscriptionError error={(subscribeError as any)?.response?.data} />
        )}
      </Modal>
    </>
  )
}

export default Footer
