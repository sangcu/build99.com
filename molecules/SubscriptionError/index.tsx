import { useTranslation } from 'next-i18next'
import ExclamationTriangleIcon from 'public/icons/exclamation-triangle.svg'

interface SubscriptionErrorProps {
  error: any
}

const SubscriptionError: React.FC<SubscriptionErrorProps> = ({ error }) => {
  const { t } = useTranslation()
  const errorMessage = getErrorMessage(error)

  return (
    <div id="subscription-error">
      <div className="w-full mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
        <ExclamationTriangleIcon
          className="h-6 w-6 text-red-600"
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <h3 className="text-2xl font-medium leading-6 text-red-700">
          {t('An error happened!!!')}
        </h3>
        <div className="mt-4 text-md text-red-500">
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  )
}

const getErrorMessage: (error: any) => string = (error) =>
  error?.title === 'Member Exists'
    ? 'Your email is already subscribed'
    : error?.title

export default SubscriptionError
