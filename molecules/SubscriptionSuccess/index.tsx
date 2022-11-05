import { useTranslation } from 'next-i18next'
import CheckIcon from 'public/icons/check.svg'

interface SubscriptionSuccessProps {
  onClose: () => void
}

const SubscriptionSuccess: React.FC<SubscriptionSuccessProps> = ({
  onClose,
}) => {
  const { t } = useTranslation()
  return (
    <>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-2xl font-medium leading-6 text-gray-900">
            {t('Subscription Confirmed')}
          </h3>
          <div className="mt-4 text-md text-gray-500">
            <p>{t('Your subscription to our list has been confirmed.')}</p>
            <p>{t('Thank you for subscribing!')}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </>
  )
}

export default SubscriptionSuccess
