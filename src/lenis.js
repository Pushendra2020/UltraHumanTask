import Lenis from '@studio-freight/lenis'

export const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
})

export function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)