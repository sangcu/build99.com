import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import SubscriptionForm from '../SubscriptionForm'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const pageGroups = [
    {
      name: t('Company'),
      pageList: [
        {
          name: t('About Us'),
          url: '#',
        },
        {
          name: t('Partners'),
          url: '#',
        },
      ],
    },
    {
      name: t('Resources'),
      pageList: [
        {
          name: t('Docs'),
          url: '#',
        },
      ],
    },
    {
      name: t('Contact'),
      pageList: [
        {
          name: t('LinkedIn'),
          url: '#',
        },
        {
          name: t('Github'),
          url: '#',
        },
      ],
    },
  ]
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
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
                    {group.name}
                  </h3>
                  {group.pageList.map((page) => (
                    <div key={page.name}>
                      <Link href={page.url}>
                        <a className="text-base text-gray-500">{page.name}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0 space-y-8 lg:col-span-1 flex lg:justify-end">
            <SubscriptionForm />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 py-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2022 yLambda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
