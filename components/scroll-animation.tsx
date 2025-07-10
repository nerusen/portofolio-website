'use client'

import { useEffect } from 'react'

export function ScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only add animate class if it doesn't already have it
          if (!entry.target.classList.contains('animate')) {
            entry.target.classList.add('animate')
          }
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate')
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return null
}