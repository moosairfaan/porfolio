/** Shared Framer Motion presets — slow, editorial, never bounce. */

export const ease = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

export const textReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: 0.9, ease },
  },
}

export const mediaReveal = {
  hidden: { clipPath: 'inset(0 0 0 100%)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: 0.9, ease },
  },
}

export const mediaZoom = {
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: { duration: 0.9, ease },
  },
}

export const pageFade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.85, ease },
  },
}

export const viewportOnce = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -40px 0px',
}
