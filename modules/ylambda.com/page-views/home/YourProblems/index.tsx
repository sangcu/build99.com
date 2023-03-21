import ArrowLongLeftIcon from 'public/icons/arrow-long-left.svg'
import ChevronDoubleDownIcon from 'public/icons/chevron-double-down.svg'

const YourProblems: React.FC = () => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full lg:-top-[240px] z-[40] lg:absolute bg-white lg:w-[520px] p-8 lg:rounded-3xl shadow-lg">
        <div className="w-full text-gray-900 flex flex-col items-center">
          <div className="text-2xl font-bold text-center">Are you... </div>
          <div className="mt-4 space-y-2">
            {[
              'Self evaluation and manager evaluation is not align.',
              'Your annual performance review isn’t good.',
              'Heated debate with your peers about performance.',
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
          <p className="text-lg lg:text-2xl font-semibold text-center pt-4 space-x-2">
            <span>You’re not alone, we solved that problem for</span>
            <span className="text-sky-600 font-bold text-3xl">458</span>
            <span>software engineers and continue... </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default YourProblems
