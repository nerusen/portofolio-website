'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Don't add mouse listeners on mobile
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile)
    }
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add mouse move listener
    document.addEventListener('mousemove', updatePosition)

    // Add hover listeners to interactive elements (excluding cursor-pointer since we removed them)
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .interactive-element')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('resize', checkMobile)
      document.removeEventListener('mousemove', updatePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  // Don't render cursor on mobile
  if (isMobile) {
    return null
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}