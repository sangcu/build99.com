import { useTranslation } from 'next-i18next'

const SubscriptionForm: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="text-gray-900 font-semibold text-2xl">
        {t('Get notified when we’re launching.')}
      </div>
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
  )
}

export default SubscriptionForm
