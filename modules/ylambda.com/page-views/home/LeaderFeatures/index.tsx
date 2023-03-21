const features = [
  {
    name: 'Settle clear expectation',
    description:
      'Don’t let performance appraisal destroy your leadership. Setting a clear expectations with your team members.',
  },
  {
    name: 'Assess team performance frequently.',
    description:
      '   Don’t let performance appraisal destroy your leadership. Settle a clear expectation with your team members',
  },
]
const LeaderFeatures: React.FC = () => {
  return (
    <div className="relative z-10 bg-gray-900 pb:8 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-7xl text-center sm:max-w-3xl lg:max-w-7xl">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            viewBox="0 0 1097 1023"
            aria-hidden="true"
            className="absolute top-[calc(50%-36rem)] left-[calc(50%-19rem)] w-[68.5625rem] transform-gpu blur-3xl"
          >
            <path
              fill="url(#a)"
              fillOpacity=".25"
              d="M301.174 782.617 193.541 1022.43 0 661.021l301.174 121.596 193.845-431.895c1.241 199.565 42.802 522.762 199.124 219.035 195.402-379.66 143.295-711.863 284.729-507.43 113.148 163.545 124.068 445.37 115.378 565.839L811.753 450.894l20.102 545.98-530.681-214.257Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="1097.04"
                x2="-173.036"
                y1=".267"
                y2="307.794"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="pt-8 pb-8 lg:pb-0 lg:pt-0 flex flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="w-full pt-0 lg:pt-24">
            <h2 className=" text-left lg:text-center">
              <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                Are you leader?
              </div>
              <div className="text-lg text-gray-400">
                Let’s fix for your team.
              </div>
            </h2>
            {features.map((feature) => (
              <div
                key={feature.name}
                className="mt-12 flex flex-col lg:items-center"
              >
                <div className="text-white text-lg lg:text-2xl font-semibold">
                  {feature.name}
                </div>
                <p className="text-white mt-2 lg:w-[540px] text-left lg:text-center text-sm lg:text-base">
                  {feature.description}
                </p>

                {/* Replace Image here */}
                <div className="mt-8 lg:rounded-t-3xl w-full lg:w-[900px] md:h-[500px] h-[200px] lg:h-[600px] bg-gray-100 bg-opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderFeatures
