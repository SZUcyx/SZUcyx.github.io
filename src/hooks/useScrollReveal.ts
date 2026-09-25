import { useEffect, useRef } from 'react'

const revealSelector = [
  '.hero-copy',
  '.hero-scene-wrap',
  '.section-heading',
  '.projects-grid',
  '.compact-projects',
  '.timeline-item',
  '.research-item',
  '.honor-list',
  '.about-grid',
  '.education-block',
  '.skills-grid',
  '.contact-section',
].join(', ')

export function useScrollReveal() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const main = mainRef.current
    if (
      !main ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const elements = Array.from(main.querySelectorAll<HTMLElement>(revealSelector))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px' })

    elements.forEach((element) => {
      // Content already on screen should never disappear when the page loads.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return
      element.classList.add('scroll-reveal')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('scroll-reveal', 'is-visible'))
    }
  }, [])

  return mainRef
}
