import { useTranslation } from 'next-i18next'
import InProgressIcon from 'public/icons/in-progress.svg'

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
        <div className="mx-auto flex items-center justify-center rounded-full">
          <InProgressIcon className="h-16 w-16" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-2xl font-medium leading-6 text-gray-900">
            Almost finished...
          </h3>
          <div className="mt-4 text-md text-gray-500">
            <p>{t('We need to confirm your email address.')}</p>
            <p>
              {t(
                'To complete the subscription process, please click the link in the email we just sent you',
              )}
            </p>
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
