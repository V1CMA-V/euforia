import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card')

  gsap.set(cards, { opacity: 0, y: 60, filter: 'blur(8px)' })

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1,
    ease: 'power2.out',
    stagger: 0.13,
    scrollTrigger: {
      trigger: cards[0]?.parentElement || cards[0],
      start: 'top 80%',
      end: '+=300',
      toggleActions: 'play none none none',
    },
  })
})
