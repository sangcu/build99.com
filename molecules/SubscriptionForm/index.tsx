import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'

interface SubscriptionFormProps {
  isLoading: boolean
  onSubscribe: (email: string) => void
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  isLoading,
  onSubscribe,
}) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => onSubscribe(data?.email)

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex justify-between space-x-4"
      >
        <div className="w-full">
          <div>
            <input
              {...register('email', {
                required: 'please input email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'please input valid email',
                },
              })}
              className={classNames(
                'px-3 py-3 shadow-sm block w-full sm:text-sm rounded-md border placeholder-gray-400',
                {
                  'border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-300':
                    errors?.email,
                  'border-gray-300 focus:border-orange-500 focus:ring-orange-500':
                    !errors?.email,
                },
              )}
              placeholder="you@example.com"
            />
          </div>
          {errors?.email && errors?.email?.message && (
            <p className="mt-2 text-xs text-red-600">
              {errors?.email?.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="!w-[128px] !h-12 flex-none inline-flex justify-center items-center  rounded-md border border-transparent bg-orange-500 px-6 py-2 text-base font-medium text-white hover:bg-orange-600"
        >
          {isLoading ? (
            <div className="py-0.5">
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          ) : (
            t('Subscribe')
          )}
        </button>
      </form>
    </div>
  )
}

export default SubscriptionForm
