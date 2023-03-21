import { useEffect, useRef, useState } from 'react'
import {
  config,
  animated,
  useTransition,
  useSpring,
  SpringConfig,
} from 'react-spring'

const TextTransition: React.FC<TextTransitionProps> = (props) => {
  const {
    direction = 'up',
    inline = false,
    springConfig = config.default,
    delay = 0,
    className,
    style,
    children,
  } = props

  const initialRun = useRef(true)

  const transitions = useTransition([children], {
    from: {
      opacity: 0,
      transform: `translateY(${direction === 'down' ? '-100%' : '100%'})`,
    },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: {
      opacity: 0,
      transform: `translateY(${direction === 'down' ? '100%' : '-100%'})`,
      position: 'absolute',
    },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  })

  const [width, setWidth] = useState<number>(0)
  const currentRef = useRef<HTMLDivElement>(null)
  const heightRef = useRef<number | string>('auto')

  useEffect(() => {
    initialRun.current = false

    const elem = currentRef.current

    if (!elem) {
      return
    }

    const { width, height } = elem.getBoundingClientRect()
    setWidth(width)
    heightRef.current = height
  }, [children, setWidth, currentRef])

  const widthTransition = useSpring({
    to: { width },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  })

  return (
    <animated.div
      className={`text-transition ${className}`}
      style={{
        ...(inline && !initialRun.current ? widthTransition : undefined),
        ...style,
        whiteSpace: inline ? 'nowrap' : 'normal',
        display: inline ? 'inline-flex' : 'flex',
        height: heightRef.current,
      }}
    >
      {transitions((styles, item) => (
        <animated.div
          style={{ ...styles }}
          ref={item === children ? currentRef : undefined}
          // eslint-disable-next-line react/no-children-prop
          children={item}
        />
      ))}
    </animated.div>
  )
}

interface TextTransitionProps {
  readonly direction?: 'up' | 'down'
  readonly springConfig?: SpringConfig
  readonly inline?: boolean
  readonly delay?: number
  readonly className?: string
  readonly style?: React.CSSProperties
  readonly children: React.ReactNode
}

export default TextTransition
