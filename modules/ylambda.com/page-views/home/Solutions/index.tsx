import EmblaCarousel from 'molecules/EmblaCarousel'

import image1 from './images/slide-1.jpg'
import image2 from './images/slide-2.jpg'
import image3 from './images/slide-3.jpg'
import classNames from 'classnames'

const images = [image1, image2, image3]

const solutions = [
  {
    name: 'Setting clear expectations, make your goal achievable.',
    description:
      ' Set your goal with S.M.A.R.T principle and do it as your habit. Your goal are track and visualize to motivate you bi-weekly/monthly',
    images: [image1, image2, image3],
  },
  {
    name: 'Feedback early. Constant improvement.',
    description:
      'Constant improve yourself by periodical review meeting. Result be tracked to compare the baseline and your actual performance.',
    images: [image1, image2, image3],
  },
  {
    name: 'Performance Insights. Anytime.',
    description:
      'A real-time insight of your achieved, assessment performance score. Always ready for performance appraisal',
    images: [image1, image2, image3],
  },
]

const Solutions: React.FC = () => {
  return (
    <div
      id="architecture-overview"
      className="relative bg-white pt-16 md:pt-18 py-12 md:py-16 lg:pt-24 lg:pb-[304px]"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-600">
          Let’s fix it. With help from us.
        </h2>
        <div className="mt-16 space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8"
            >
              <div
                className={classNames(
                  'text-left lg:col-span-2',
                  index % 2 === 0 ? 'lg:order-first' : 'lg:order-last',
                )}
              >
                <div className="p-1 rounded-l-full w-60 bg-gradient-to-r from-sky-600 via-sky-400 to-white"></div>
                <div className="mt-2 text-2xl font-semibold">
                  {solution.name}
                </div>
                <p className="mt-2 text-gray-500 text-base">
                  {solution.description}
                </p>
              </div>
              <div
                className={classNames('mt-4 lg:mt-0 lg:col-span-3 relative')}
              >
                <EmblaCarousel images={images} options={{}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solutions
