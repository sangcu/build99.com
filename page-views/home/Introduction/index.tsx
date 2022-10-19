import { useTranslation } from 'next-i18next'
import Image from 'next/image'

const Introduction: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-900 py-8 md:py-10 lg:py-12 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="flex space-y-1 lg:space-y-2 lg:space-y-0 lg:flex-row flex-col">
            <span className="text-orange-500 font-bold text-4xl md:text-5xl lg:text-6xl">
              {t('Opsless')}
            </span>
            <div className="hidden lg:block pb-2 self-end">
              <svg
                className="fill-current text-orange-500 "
                width="8"
                height="8"
              >
                <rect x="0" y="0" width="8" height="8" />
              </svg>
            </div>

            <span className="lg:ml-2 text-white font-bold text-3xl md:text-4xl lg:text-5xl lg:self-end pb-1">
              {t('Focus on writing code')}
            </span>
          </h1>
          <p className="mt-2 lg:mt-4 text-gray-300 text-md md:text-lg lg:text-xl font-medium">
            {t('Simplify “Ops” to help developer focus on writing code.')}
          </p>

          <div className="mt-4 md:mt-6 lg:mt-8 unset-img">
            <Image
              alt="System Overview"
              src="/images/system-overview.png"
              layout="fill"
              className="responsive-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
