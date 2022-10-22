import { useTranslation } from 'next-i18next'
import ChevronDoubleRightIcon from 'public/icons/chevron-double-right.svg'

const AppDetail: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    t('Connect your Kubernetes'),
    t('Create the app'),
    t('Up and run in minutes'),
    t('We automating CI/CD and everying Ops'),
  ]

  return (
    <div className="relative bg-gray-50 pt-16 md:pt-18 lg:pt-24 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          {t('Your best investment is architecture and ship business logic')}
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-orange-600">
          {t('yLamda simplify the boring by automating')}
        </h2>
        <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8 space-y-4 lg:space-y-0">
          <div className="flex items-center">
            <ul className="list-none text-left text-2xl md:text-3xl space-y-4 lg:space-y-8 font-medium text-gray-900">
              {features.map((feature) => (
                <li className="flex items-center space-x-2" key={feature}>
                  <div>
                    <ChevronDoubleRightIcon className="w-6 h-6 text-orange-500 stroke-[3px]" />
                  </div>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="w-full bg-gray-300 h-[550px] rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDetail
