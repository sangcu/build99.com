import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

const Architecture: React.FC = () => {
  const { t } = useTranslation()

  const brandImages = [
    {
      name: 'git',
      src: '/images/brand-logo/git-logo.png',
      className: 'w-[15%] lg:w-[25%]',
    },
    {
      name: 'kubernetes',
      src: '/images/brand-logo/kubernetes-logo.png',
      className: 'w-[40%] lg:w-[60%]',
    },
    {
      name: 'prometheus',
      src: '/images/brand-logo/prometheus-logo.png',
      className: 'w-[40%] lg:w-[60%]',
    },
    {
      name: 'envoy',
      src: '/images/brand-logo/envoy-logo.png',
      className: 'w-[30%] lg:w-[45%]',
    },
    {
      name: 'argo',
      src: '/images/brand-logo/argo-logo.png',
      className: 'w-[25%] lg:w-[40%]',
    },
  ]

  return (
    <div className="relative bg-white pt-16 md:pt-18 lg:pt-24 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          {t('Cloud Native approach. No vendor locked-in')}
        </h2>
        <p className="mt-2 text-gray-500 text-xl font-medium">
          {t(
            'yLambda automatically install tools on your kubernetes cluster to ready for deployment and observiability',
          )}
        </p>
        <div className="mt-16 lg:grid lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
            <div className="unset-img">
              <Image
                alt="Architecture Overview"
                src="/images/architecture.png"
                layout="fill"
                className="responsive-img"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-2 space-y-2">
            {brandImages.map((image) => (
              <div
                className="w-full h-24 bg-gray-50 flex items-center justify-center"
                key={image.name}
              >
                <div className={classNames('unset-img', image.className)}>
                  <Image
                    alt="git logo"
                    src={image.src}
                    layout="fill"
                    className="responsive-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Architecture
