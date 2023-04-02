import EmblaCarousel from 'molecules/EmblaCarousel'

import overviewGoalRadarChart from './images/overview-goal-radar.png'
import detailGoalRadarChart from './images/detail-goal-radar.png'
import feedbackResponsiveness from './images/feedback-responsiveness.png'
import performanceAppraisalEvaluation from './images/performance-appraisal-evaluation-chart.png'
import classNames from 'classnames'

import SamplePdf from './sample.pdf'
import PdfViewer from 'molecules/PdfViewer'

const solutions = [
  {
    name: 'Storytelling your performance with data-driven.',
    description:
      'Set your goal with the S.M.A.R.T principle and do it as your habit. Your goals are tracked and visual to motivate you bi-weekly/monthly. Mimimize efforts with predefined goals for Front End, Back End, Quality Assurance, Product Owner.',
    renderExamples: () => (
      <EmblaCarousel
        images={[overviewGoalRadarChart, detailGoalRadarChart]}
        options={{}}
      />
    ),
  },
  {
    name: 'Communicate, feedback regularly.',
    description:
      'Save your time by automatically sending out periodic reviews and feedback. Get performance feedback from your peer early.',
    renderExamples: () => (
      <EmblaCarousel
        images={[feedbackResponsiveness, performanceAppraisalEvaluation]}
        options={{}}
      />
    ),
  },
  {
    name: 'Performance Insights. Showcase anytime.',
    description:
      'A real-time insight into your achieved, performance score. Always ready for performance appraisal.',
    renderExamples: () => <PdfViewer pdfUrl={SamplePdf} />,
  },
]

const Solutions: React.FC = () => {
  return (
    <div
      id="architecture-overview"
      className="relative bg-white pt-16 md:pt-18 py-12 md:py-16 lg:pt-24 lg:pb-[304px]"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl lg:text-5xl font-bold">
          Let’s fix it. With help from us.
        </h2>
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
