'use client'

import { useEffect, useState } from 'react'
import ProfileCard from './../src/blocks/Components/ProfileCard/ProfileCard';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full Stack?\nLow Code?\nNo Code?'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100) 
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const handleSendEmail = () => {
    window.location.href = 'mailto:lauvigne.lumeda@example.com'
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Right side - Animated Text and Description */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-foreground whitespace-pre-line">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-playfair text-muted-foreground font-bold italic mb-6 sm:mb-8">
                I got you
              </p>
            </div>
            
            <div className="max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-inconsolata">
                Transforming ideas into digital experiences through code, creativity, and innovation. 
                From full-stack development to no-code solutions, I bridge the gap between 
                imagination and reality.
              </p>
            </div>
          </div>

          {/* Left side - Personal Information */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* Profile Image Container */}
            <ProfileCard 
              name="Lauvigne Lumeda"
              title="Aspiring Developer and Entrepreneur"
              handle="yuyuhiei"
              status="Online"
              contactText="Contact Me"  
              avatarUrl="/photos/lumeda_photo.svg"
              behindGradient="to-br from-blue-400 via-purple-500 to-pink-600" 
              innerGradient="to-r from-blue-500 to-purple-500"
              miniAvatarUrl="/photos/tiltedcard.svg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.location.href = 'mailto:lumedalauvigne@gmail.com'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}