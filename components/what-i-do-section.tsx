'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const developSkills = [
  'Next.js', 'Tailwind', 'React', 'Javascript', 'CSS',
  'Node.js', 'Python', 'Springboot', 'Flutterflow',
  'Firebase', 'Supabase', 'MySQL'
]

const createSkills = [
  'Figma', 'Canva', 'Capcut', 'Adobe Premiere Pro', 'Adobe Illustrator'
]

export function WhatIDoSection() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="what-i-do" className="py-16 sm:py-20 relative">
      {/* Enhanced grid background on hover */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        hoveredSection ? 'opacity-40' : 'opacity-0'
      }`}>
        <div className="grid-background-enhanced" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          What I do
        </h2>
        
        {/* Grid layout for two containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* DEVELOP Section */}
          <div 
            className="relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 interactive-element scroll-animate hover:shadow-lg hover:bg-background/70"
            onMouseEnter={() => setHoveredSection('develop')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Corner borders */}
            <div className={`absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
              hoveredSection === 'develop' ? 'border-cyan-500 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'border-muted-foreground/30'
            }`} />
            <div className={`absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-300 ${
              hoveredSection === 'develop' ? 'border-cyan-500 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'border-muted-foreground/30'
            }`} />
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold mb-3 sm:mb-4">DEVELOP</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed font-inconsolata">
              Started creating mobile applications using Flutter, FlutterFlow, and
              Firebase and eventually switched to Web Development using NextJS,
              React, and Tailwind
            </p>
            
            <div className="mb-4">
              <h4 className={`font-playfair font-semibold mb-2 sm:mb-3 transition-all duration-300 text-sm sm:text-base ${
                hoveredSection === 'develop' ? 'text-cyan-500' : 'text-emerald-600'
              }`}>
                Skillset & tools
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {developSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className={`text-xs font-inconsolata transition-all duration-300 hover:scale-110 interactive-element ${
                      hoveredSkill === skill && hoveredSection === 'develop' 
                        ? 'border-cyan-500 text-cyan-500 bg-cyan-50 dark:bg-cyan-950' 
                        : hoveredSection === 'develop' 
                        ? 'border-cyan-300 text-cyan-400' 
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* CREATE Section */}
          <div 
            className="relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 interactive-element scroll-animate hover:shadow-lg hover:bg-background/70"
            onMouseEnter={() => setHoveredSection('create')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Corner borders */}
            <div className={`absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
              hoveredSection === 'create' ? 'border-emerald-500 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'border-muted-foreground/30'
            }`} />
            <div className={`absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-300 ${
              hoveredSection === 'create' ? 'border-emerald-500 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'border-muted-foreground/30'
            }`} />
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold mb-3 sm:mb-4">CREATE</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed font-inconsolata">
              My content creation journey evolved from a side hustle to serving other
              creators, achieving an average reach of 15 million within 90 days.
            </p>
            
            <div className="mb-4">
              <h4 className={`font-playfair font-semibold mb-2 sm:mb-3 transition-all duration-300 text-sm sm:text-base ${
                hoveredSection === 'create' ? 'text-emerald-500' : 'text-emerald-600'
              }`}>
                Skillset & Tools
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {createSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className={`text-xs font-inconsolata transition-all duration-300 hover:scale-110 interactive-element ${
                      hoveredSkill === skill && hoveredSection === 'create' 
                        ? 'border-emerald-500 text-emerald-500 bg-emerald-50 dark:bg-emerald-950' 
                        : hoveredSection === 'create' 
                        ? 'border-emerald-300 text-emerald-400' 
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}