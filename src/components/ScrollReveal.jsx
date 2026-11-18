import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'

const ScrollDirectionContext = createContext('down')

export function ScrollRevealProvider({ children }) {
  const [direction, setDirection] = useState('down')

  useEffect(() => {
    let previousY = window.scrollY

    const updateDirection = () => {
      const currentY = window.scrollY
      if (Math.abs(currentY - previousY) > 2) {
        setDirection(currentY > previousY ? 'down' : 'up')
        previousY = currentY
      }
    }

    window.addEventListener('scroll', updateDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateDirection)
  }, [])

  return (
    <ScrollDirectionContext.Provider value={direction}>
      {children}
    </ScrollDirectionContext.Provider>
  )
}

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.06 })
  const direction = useContext(ScrollDirectionContext)
  const reduceMotion = useReducedMotion()
  const wasInView = useRef(false)
  const [hasEntered, setHasEntered] = useState(false)
  const [entryY, setEntryY] = useState(24)

  useEffect(() => {
    if (isInView && !wasInView.current) {
      wasInView.current = true
      setHasEntered(true)
      setEntryY(direction === 'down' ? 32 : -32)
    } else if (!isInView) {
      wasInView.current = false
    }
  }, [direction, isInView])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: [entryY, 0] }
          : { opacity: 0, y: hasEntered && direction === 'up' ? 42 : hasEntered ? -24 : 20 }
      }
      transition={{ duration: 0.34, delay: isInView ? delay : 0, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}
