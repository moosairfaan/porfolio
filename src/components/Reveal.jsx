import { motion, useReducedMotion } from 'framer-motion'
import {
  ease,
  fadeUp,
  textReveal,
  mediaReveal,
  mediaZoom,
  viewportOnce,
} from '../lib/motion'

/**
 * Scroll-triggered editorial reveal.
 * variant: 'fade' | 'text' | 'media'
 */
export default function Reveal({
  as = 'div',
  variant = 'fade',
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  const variants =
    variant === 'text'
      ? textReveal
      : variant === 'media'
        ? mediaReveal
        : fadeUp
  const transition = {
    delay,
    duration: variant === 'fade' ? 0.75 : 0.9,
    ease,
  }

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={transition}
      {...props}
    >
      {variant === 'media' ? (
        <motion.div
          className="h-full w-full"
          variants={mediaZoom}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </MotionTag>
  )
}
