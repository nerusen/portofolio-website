'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X, User, Briefcase, Code, Award, Trophy, Phone, Wrench } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about', icon: User },
  { name: 'What I Do', href: '#what-i-do', icon: Wrench },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Hackathons', href: '#hackathons', icon: Trophy },
  { name: 'Contact', href: '#contact', icon: Phone },
]

export function Sidebar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile menu button */}
      {!isOpen && (
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 left-4 z-50 lg:hidden interactive-element font-inconsolata"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-background/95 backdrop-blur-sm border-r border-border z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            {/* Personal Logo - Left aligned */}
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <Image
                  src="/logo/lauv-logo2.svg"
                  alt="Lauv Logo"
                  width={32}
                  height={32}
                  className="h-6 w-6 sm:h-8 sm:w-8 filter dark:invert-0 invert transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-xl"></div>
            </div>
            
            {/* Close button - Only visible on mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation - Now positioned at bottom with flex-1 and justify-end */}
          <nav className="flex-1 flex flex-col justify-end mb-6">
            <ul className="space-y-1 sm:space-y-2">
              {navigation.map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="nav-item w-full text-left px-3 py-2 sm:py-3 rounded-lg text-sm font-inconsolata font-medium transition-all duration-300 flex items-center gap-3 group interactive-element hover:bg-muted hover:text-foreground text-muted-foreground"
                    >
                      <IconComponent 
                        className="h-4 w-4 transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-500" 
                      />
                      <span className="transition-all duration-300 group-hover:text-cyan-500">
                        {item.name}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Theme Toggle Switch - Clean minimal version */}
          <div className="flex justify-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative w-12 h-6 rounded-full p-0.5 transition-all duration-300 hover:scale-105 interactive-element focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-background ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              {/* Toggle Circle */}
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {/* Icon inside the circle */}
                {theme === 'dark' ? (
                  <Moon className="h-3 w-3 text-gray-600" />
                ) : (
                  <Sun className="h-3 w-3 text-gray-600" />
                )}
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}