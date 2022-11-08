import { useTranslation } from 'next-i18next'

const HowItWork: React.FC = () => {
  const { t } = useTranslation()

  const steps = [
    {
      name: '01',
      title: (
        <>
          <p>{t('Create your app')}</p>
        </>
      ),
      codes: [
        '> ylambda app create hello-app --lang c#',
        'git repository........created',
        'ci/cd templates.......created',
        'ylambda.toml..........created',
        '> git commit -m "create sample hello-app"',
        '> git push',
      ],
    },
    {
      name: '02',
      title: t('Deploy your code and access by url'),
      codes: [
        '> ylambda deploy',
        'deployed https://david.ylambda.com/hello-app/34f3c3',
        'logs streaming: https://david.ylambda.com/logs/hello-app/34f3c3',
      ],
    },
    {
      name: '03',
      title: t('Monitoring'),
      codes: [
        '> ylambda app hello-app health --time 2h',
        'rps      : 100',
        'errors   : 0',
        'p90      : 58ms',
        'p95      : 83ms',
        'p99      : 123ms',
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-200 lg:relative lg:z-10 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-12 md:py-18 lg:py-24">
        <h2 className="text-white font-bold text-3xl">
          {t('Once yLambda installed, developer getting started in minutes.')}
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
              <div className="py-4 lg:py-6 lg:col-span-3 text-white flex flex-col justify-center prose min-w-full">
                <pre>
                  <code className="language-bash">{step.codes.join('\n')}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWork
