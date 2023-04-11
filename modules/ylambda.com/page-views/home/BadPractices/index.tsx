import { XMarkIcon } from '@heroicons/react/24/outline'

const badPractices = [
  {
    name: 'No purpose.',
    href: '#',
    icon: XMarkIcon,
  },
  {
    name: 'Lack of measurable goals',
    href: '#',
    icon: XMarkIcon,
  },
  {
    name: 'Winners and Losers in a team',
    description: '',
    href: '#',
    icon: XMarkIcon,
  },
  {
    name: "Don't know your people",
    description: '',
    href: '#',
    icon: XMarkIcon,
  },
]

const BadPractices: React.FC = () => {
  return (
    <div className="lg:pt-[420px] relative bg-gray-50 pt-12 md:pt-18 sm:pt-24 lg:pb-[124px] pb-12">
      <div className="mx-auto max-w-7xl text-center sm:max-w-3xl lg:max-w-7xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:text-center max-w-3xl">
            <h2 className="mt-2 text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl space-x-4 !leading-normal">
              The enemies of high-performing leader
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-4 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              {badPractices.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-6 w-6 flex-none text-red-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 items-start justify-start">
                    <p className="text-left">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadPractices
