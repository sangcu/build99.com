import { useTranslation } from 'next-i18next'

const HowItWork: React.FC = () => {
  const { t } = useTranslation()

  const steps = [
    {
      name: '01',
      title: t('Install yLambda on your own Kubernetes'),
      codes: [
        '> ylambda connect git',
        '> ylambda connect k8s',
        'Installing yLambda stack...',
        'Done in 3m.',
      ],
    },
    {
      name: '02',
      title: (
        <>
          <p>{t('Create your app')}</p>
          <p>{t('Start to checkout code')}</p>
        </>
      ),
      codes: ['> ylambda create hello-app --lang c#'],
    },
    {
      name: '03',
      title: t('Deploy your code and access'),
      codes: [
        '> ylambda deploy',
        'deployed https://ylambda.com/yl/david/34f3c3/',
        'logs streaming: https://ylambda.com/logs/yl/david/34f3c3/',
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-200 lg:relative lg:z-10 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-12 md:py-18 lg:py-24">
        <h2 className="text-white font-bold text-3xl">
          {t('Get start in minutes')}
        </h2>
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.name}
              className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 border-4 border-orange-700 p-6 lg:border-0 lg:p-0"
            >
              <div className="lg:col-span-2 text-white lg:border-r-8 lg:border-r-orange-700 flex flex-col justify-center py-2 lg:py-4 lg:py-6">
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                  {step.name}
                </div>
                <h3 className="mt-4 font-bold text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                  {step.title}
                </h3>
              </div>
              <div className="mt-2 lg:mt-4 lg:mt-0 lg:col-span-3 text-white flex flex-col justify-center">
                {step.codes.map((code) => (
                  <code
                    key={code}
                    className="text-base md:text-lg lg:text-xl break-words"
                  >
                    {code}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWork
