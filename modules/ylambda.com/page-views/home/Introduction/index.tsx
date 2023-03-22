import { useTranslation } from 'next-i18next'

const Introduction: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div
      id="introduction"
      className="bg-gray-900 py-12 md:py-14 lg:py-24 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8 lg:mb-[280px] lg:mt-[90px] mb-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="space-y-1 lg:space-y-2 lg:space-y-0 lg:items-end text-center">
            <div className="text-sky-500 font-bold text-xl md:text-2xl lg:text-3xl lg:pb-1">
              {t('Your income depends on')}
            </div>
            <div className="lg:ml-2 text-white font-bold text-2xl md:text-4xl lg:text-5xl lg:self-end pb-1">
              {t('Annual Performance Review')}
            </div>
            <p className="pt-1 text-base lg:text-lg leading-6 text-white">
              We help you track and showcase your performance.
            </p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Introduction
