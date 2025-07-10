'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy } from 'lucide-react'
import Image from 'next/image'

// Custom trophy icon component
const TrophyIcon = ({ placement, className }: { placement: string; className?: string }) => {
  const trophyMap: { [key: string]: string } = {
    '1st Place': 'gold_trophy.png',
    '2nd Place': 'silver_trophy.png',
    '3rd Place': 'bronze_trophy.png',
    '4th Place': 'participant_trophy.png', 
    'Top 5 Finalist': 'participant_trophy.png', 
    'Special Award': 'special_trophy.png',
    'Participant': 'participant_trophy.png',
    'Finalist - 1st Place Mock Pitch': 'gold_trophy.png' 
  }

  const trophyFileName = trophyMap[placement]
  
  if (trophyFileName) {
    return (
      <Image
        src={`/trophies/${trophyFileName}`}
        alt={`${placement} trophy`}
        width={20}
        height={20}
        className={className || "h-4 w-4 sm:h-5 sm:w-5"}
      />
    )
  }
  
  // Fallback to default trophy icon if custom icon not found
  return <Trophy className={className || "h-4 w-4 sm:h-5 sm:w-5"} />
}

// Custom tech icon component for hackathons
const TechIcon = ({ tech }: { tech: string }) => {
  const iconMap: { [key: string]: string } = {
    'Apache Derby': 'apachederby.svg',
    'CSS': 'css.svg',
    'FastAPI': 'fastapi.svg',
    'Flutter': 'flutter.svg',
    'FlutterFlow': 'flutterflow.svg',
    'GCP': 'gcp.svg',
    'Gemini': 'gemini.svg',
    'Java': 'java.svg',
    'JavaScript': 'javascript.svg',
    'Next.js': 'nextjs.svg',
    'OpenAI': 'openai.svg',
    'Python': 'python.svg',
    'Rasa': 'rasa.svg',
    'React': 'react.svg',
    'ShadCN': 'shadcn.svg',
    'Spring Boot': 'springboot.svg',
    'Tailwind': 'tailwind.svg',
    'WebSocket': 'websockets.svg'
  }

  const iconFileName = iconMap[tech]
  
  if (iconFileName) {
    return (
      <div className="flex items-center gap-1">
        <Image
          src={`/techstack/${iconFileName}`}
          alt={`${tech} icon`}
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span>{tech}</span>
      </div>
    )
  }
  
  // Fallback to just text if custom icon not found
  return <span>{tech}</span>
}

const hackathons = [
  {
    id: 1,
    number: '01',
    placement: '3rd Place',
    title: 'Procrash',
    description: 'Designed for procrastinators and anyone striving for self-improvement, this gamified app transforms productivity into an adventure. By setting ultimate goals, breaking them into small missions, and battling monsters with each completed task, users can build better habits one level at a time.',
    image: '/solutions/procrash.svg',
    technologies: ['FlutterFlow', 'Gemini'],
    event: 'FlutterFlow Hackfest: Impact Challenge 2024',
    url: 'https://procrash-hdps5h.flutterflow.app/?fbclid=IwZXh0bgNhZW0CMTEAAR6V1DkZeKy8dZetXVGOk7A33bbXy5Ue001oiPqO8CxLwXM40uhn5cdDCW9RUQ_aem_cvDKSgLmGXTzEsuIRtzhrw'
  },
  {
    id: 2,
    number: '02',
    placement: 'Special Award',
    title: 'Talento',
    description: 'Talento is a mobile app designed to help you visually showcase your talents and skills through videos and images. It\'s like a "Tinder for jobs," allowing you to immediately grab the attention of HR professionals with your abilities, making your application unmissable.',
    image: '/solutions/talento.svg',
    technologies: ['JavaScript', 'CSS'],
    event: 'KMC Talent Matchmaking Hackathon 2024',
    url: 'https://talento-xi.vercel.app/'
  },
  {
    id: 3,
    number: '03',
    placement: '4th Place',
    title: 'KachingKo',
    description: 'Scan your receipts, unlock financial intelligence. This AI companion uses videos or images of receipts to categorize spending, analyze habits, guide your budget towards goals, and reward smart money decisions. KachingKo makes understanding your finances instant and engaging.',
    image: '/solutions/kachingko.svg',
    technologies: ['Next.js', 'Tailwind', 'Gemini'],
    event: 'SpringboardLabs Fintech Hackathon 2025',
    url: 'https://neosolve-hackit-kachingko.vercel.app/'
  },
  {
    id: 4,
    number: '04',
    placement: 'Finalist - 1st Place Mock Pitch',
    title: 'eCarga',
    description: 'A mobile app for booking specialized, accessible vehicles, created to cater to individuals with mobility disabilities. It serves as a direct link, connecting users in need of adapted transport (like wheelchair users) with suitable vehicles, providing convenient pickup service rather than requiring travel to a terminal.',
    image: '/solutions/ecarga.svg',
    technologies: ['Flutter', 'GCP'],
    event: 'InnOlympics Hackathon 2024',
    url: 'https://github.com/Feinpoint/eCarga'
  },
  {
    id: 5,
    number: '05',
    placement: 'Top 5 Finalist',
    title: 'Neosolutions',
    description: 'A CRM powered by Generative AI that transforms customer service by automatically detecting and processing conversations using NLP. It streamlines interactions, providing one-click access to relevant documentation and replies. Plus, it offers automated Kanban tracking for tickets and simulates AI resolution for low-level concerns.',
    image: '/solutions/neosolutions.svg',
    technologies: ['Next.js', 'Tailwind', 'Gemini'],
    event: 'Tenext.AI Codebreak 2025',
    url: 'https://neosolutions-tenext-ai.vercel.app/'
  }
]

export function HackathonsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleHackathonClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="hackathons" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          Hackathon Entries
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={hackathon.id} 
              className="overflow-hidden transition-all duration-300 interactive-element scroll-animate hover-glow hover:shadow-lg hover:scale-[1.002]"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredId(hackathon.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleHackathonClick(hackathon.url)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image Section - 1/3 */}
                <div className="relative overflow-hidden md:col-span-1">
                  <Image
                    src={hackathon.image}
                    alt={hackathon.title}
                    width={400}
                    height={300}
                    className={`w-full h-48 sm:h-56 md:h-full object-cover transition-transform duration-500 ${
                      hoveredId === hackathon.id ? 'scale-102' : 'scale-100'
                    }`}
                    priority={index < 2} // Load first 2 images with priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-white drop-shadow-lg transition-all duration-300 ${
                      hoveredId === hackathon.id ? 'scale-102' : ''
                    }`}>
                      {hackathon.number}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs sm:text-sm font-inconsolata">
                      <TrophyIcon placement={hackathon.placement} className="h-4 w-4 sm:h-5 sm:w-5" />
                      {hackathon.placement}
                    </Badge>
                  </div>
                </div>

                {/* Content Section - 2/3 */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center md:col-span-2">
                  <CardHeader className="p-0 mb-3 sm:mb-4">
                    <CardTitle className={`text-lg sm:text-xl lg:text-2xl font-playfair mb-2 transition-colors duration-300 ${
                      hoveredId === hackathon.id ? 'text-cyan-600' : ''
                    }`}>
                      {hackathon.title}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground font-inconsolata font-medium">
                      {hackathon.event}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-inconsolata">
                      {hackathon.description}
                    </p>
                    
                    <div className="flex gap-2">
                      {hackathon.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className={`text-sm font-inconsolata transition-all duration-300 interactive-element ${
                            hoveredId === hackathon.id ? 'border-cyan-500 text-cyan-500 scale-102' : ''
                          }`}
                        >
                          <TechIcon tech={tech} />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}