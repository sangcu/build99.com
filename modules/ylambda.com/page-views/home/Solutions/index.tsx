import EmblaCarousel from 'molecules/EmblaCarousel'

import overviewGoalRadarChart from './images/overview-goal-radar.png'
import detailGoalRadarChart from './images/detail-goal-radar.png'
import feedbackResponsiveness from './images/feedback-responsiveness.png'
import performanceAppraisalEvaluation from './images/performance-appraisal-evaluation-chart.png'
import classNames from 'classnames'
import Link from 'next/link'

const solutions = [
  {
    name: 'A guideline of how to become high-performing leader',
    description: (
      <div>
        We provide a collection of guides, use cases, and best practices to
        learn and experience your leading.&nbsp;
        <div className="font-bold text-sky-500">
          <Link href="https://ylambda.com/docs" target="_blank">
            Learn now
          </Link>
        </div>
      </div>
    ),
    renderExamples: () => (
      <EmblaCarousel
        images={[overviewGoalRadarChart, detailGoalRadarChart]}
        options={{}}
      />
    ),
  },
  {
    name: 'A software tools to save your efforts on leading your team.',
    description: (
      <div>
        Setting goals and periodical send out assessments, feedbacks and a
        holistic view of your teammate performance, real-time.
      </div>
    ),
    renderExamples: () => (
      <EmblaCarousel
        images={[feedbackResponsiveness, performanceAppraisalEvaluation]}
        options={{}}
      />
    ),
  },
]

const Solutions: React.FC = () => {
  return (
    <div
      id="architecture-overview"
      className="relative bg-white pt-16 md:pt-18 py-12 md:py-16 lg:pt-24 "
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl lg:text-5xl font-bold">Our offers</h2>
        <div className="mt-16 space-y-12">
          {solutions.map(({ name, description, renderExamples }, index) => (
            <div
              key={name}
              className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8"
            >
              <div
                className={classNames(
                  'text-left lg:col-span-2',
                  index % 2 === 0 ? 'lg:order-first' : 'lg:order-last',
                )}
              >
                <div className="p-1 rounded-l-full w-60 bg-gradient-to-r from-sky-600 via-sky-400 to-white"></div>
                <div className="mt-2 text-2xl font-semibold">{name}</div>
                <p className="mt-2 text-gray-500 text-base">{description}</p>
              </div>
              <div
                className={classNames('mt-4 lg:mt-0 lg:col-span-3 relative')}
              >
                {renderExamples()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solutions
