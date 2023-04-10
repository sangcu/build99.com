import TextTransition from 'molecules/TextTransition'
import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import { config } from 'react-spring'

const Introduction: React.FC = () => {
  const { t } = useTranslation()
  const WORDS = [
    'set goals and alignment.',
    'setting expectations.',
    '360 feedback.',
    'skill roadmap.',
  ]
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((i) => i + 1)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])
  
  return (
    <div
      id="introduction"
      className="bg-gray-900 py-12 md:py-14 lg:py-24 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8 lg:mb-[280px] lg:mt-[90px] mb-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="space-y-1 lg:space-y-2 lg:space-y-0 lg:items-end text-left">
            <div className="text-sky-500 font-bold text-xl md:text-2xl lg:text-3xl lg:pb-1">
              {t('A must-have belt setup to become')}
            </div>
            <div className="text-white font-bold text-2xl md:text-4xl lg:text-5xl lg:self-end pb-1">
              {t('High-performing Leader')}
            </div>
            <p className="pt-1 text-base lg:text-lg leading-6 text-white text-left">
              We help you with &nbsp;
              <TextTransition
                inline
                className="transition-text"
                springConfig={config.wobbly}
              >
                <div className="text-sky-500">
                  {WORDS[wordIndex % WORDS.length]}
                </div>
              </TextTransition>
            </p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Introduction
