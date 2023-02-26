import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import ChevronDoubleRightIcon from 'public/icons/chevron-double-right.svg'
import CheckIcon from 'public/icons/check.svg'

const AppDetail: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    t('Connect your Kubernetes'),
    t('Create the app'),
    t('Up and run in minutes'),
    t('We automating CI/CD and everying Ops'),
  ]

  const workFlowSteps = [
    { name: t('Ideas') },
    { name: t('Code') },
    { name: t('Deploy') },
  ]

  return (
    <div
      id="workflow-overview"
      className="relative bg-gray-50 pt-16 md:pt-18 lg:pt-24 sm:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          {t('A workflow for')}
        </h2>

        <nav className="w-full md:w-[80%] lg:w-[60%] mx-auto mt-6 mb-4">
          <ol
            role="list"
            className="divide-y divide-gray-300 rounded-md border border-gray-300 flex divide-y-0"
          >
            {workFlowSteps.map((step, stepIdx) => (
              <li key={step.name} className="relative flex flex-1">
                <div className="group flex w-full items-center">
                  <span className="flex items-center px-3 md:px-4 lg:px-6 py-4">
                    <span className="flex h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600">
                      <CheckIcon
                        className="h-4 w-4 lg:h-6 lg:w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-2 md:ml-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </div>

                {stepIdx !== workFlowSteps.length - 1 && (
                  <>
                    <div
                      className="absolute top-0 right-0 h-full w-5"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="text-xl md:text-xl font-medium tracking-tight text-gray-900">
          {t(
            'Once connected with Kubernetes, from ideas to production only take minutes.',
          )}
        </p>
        <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-6 space-y-8 md:space-y-12 lg:space-y-0">
          <div className="flex items-center">
            <ul className="list-none text-left text-lg md:text-xl lg:text-2xl md:text-2xl space-y-4 lg:space-y-8 font-medium text-gray-900">
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
            <div className="unset-img shadow-2xl">
              <Image
                alt="Application Demo"
                src="/images/application-demo.png"
                layout="fill"
                className="responsive-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDetail
