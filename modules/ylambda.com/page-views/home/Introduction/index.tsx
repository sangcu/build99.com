import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const Introduction: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div
      id="introduction"
      className="h-screen bg-gray-900 py-8 md:py-10 lg:py-12 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="flex space-y-1 lg:space-y-2 lg:space-y-0 lg:flex-row flex-col">
            <span className="text-orange-500 font-bold text-4xl md:text-5xl lg:text-6xl">
              {t('A toolkit for tech leader to build and growth their people.')}
            </span>
          </h1>
          <p className="mt-8 !h-12 flex-none inline-flex justify-center items-center rounded-md border border-transparent bg-orange-600 px-6 py-2 text-base font-medium text-white hover:bg-orange-700" >
            <Link href={'https://leader.ylambda.com'}>
              TRY NOW. free for individual leader
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
