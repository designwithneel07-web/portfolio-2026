export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

export const smoothTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}