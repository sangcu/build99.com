import ArrowLongLeftIcon from 'public/icons/arrow-long-left.svg'
import ChevronDoubleDownIcon from 'public/icons/chevron-double-down.svg'

const YourProblems: React.FC = () => (
  <div className="flex justify-center relative w-full">
    <div className="w-full lg:-top-[180px] z-[40] lg:absolute bg-white lg:w-[680px] p-8 lg:rounded-3xl shadow-lg">
      <div className="w-full text-gray-900 flex flex-col items-center">
        <div className="text-4xl font-extrabold text-center">Is this you?</div>
        <div className="mt-4 space-y-2">
          {[
            'Thinking of performance appraisal is time-consuming, stressful, and unfairness.',
            'Lack of information of how your members are performing.',
            'Misalignment of the expectation.',
            'Ambiguous training roadmap for your teammates.',
          ].map((item) => (
            <div className="flex items-center space-x-4" key={item}>
              <div className="flex-0">
                <ArrowLongLeftIcon className="text-sky-500 lg:h-8 lg:w-8 h-5 w-5" />
              </div>
              <span className="text-base lg:text-xl">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center w-full flex justify-center">
        <ChevronDoubleDownIcon className="h-8 w-8 text-sky-500" />
      </div>
      <div className="mt-2 flex justify-center">
        <div className="text-lg lg:text-2xl font-semibold text-center pt-4 space-x-2">
          <span>You’re not alone,</span> 95% of other leaders thought that too.
        </div>
      </div>
      <small>* source: www.cebglobal.com</small>
    </div>
  </div>
)

export default YourProblems
