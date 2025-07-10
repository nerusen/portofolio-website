'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Award } from 'lucide-react'
import Image from 'next/image'

// Custom certification icon component
const CertificationIcon = ({ iconPath, alt, className }: { iconPath: string; alt: string; className?: string }) => {
  if (iconPath.startsWith('/')) {
    return (
      <Image
        src={iconPath}
        alt={alt}
        width={32}
        height={32}
        className={className || "h-6 w-6 sm:h-8 sm:w-8"}
      />
    )
  }
  
  // Fallback to default award icon if custom icon not found
  return <Award className={className || "h-6 w-6 sm:h-8 sm:w-8 text-cyan-500"} />
}

const certifications = [
  {
    id: 1,
    title: 'LottieFiles for Figma Certification',
    issuer: 'LottieFiles',
    date: '2025',
    image: '/certifications/lottiefiles_to_figma.png',
    credentialUrl: '#',
    icon: '/certification-icons/lottiefiles.svg',
    description: 'Mastery in integrating Lottie animations into Figma designs, enhancing UI/UX with dynamic animations.'
  },
  {
    id: 2,
    title: 'DataCamp Scholarship',
    issuer: 'DataCamp',
    date: '2024',
    image: '/certifications/datacamp_scholarship.svg',
    credentialUrl: '#',
    icon: '/certification-icons/datacamp.svg',
    description: 'A proof of my commitment to continuous learning in data science and analytics through DataCamp\'s scholarship program.'
  },
  {
    id: 3,
    title: "FlutterFlow Hackfest: Impact Challenge",
    issuer: 'FlutterFlow',
    date: '2024',
    image: '/certifications/hackfest.png',
    credentialUrl: '#',
    icon: '/techstack/flutterflow.svg',
    description: '3rd place in the FlutterFlow Hackfest: Impact Challenge, showcasing my skills in building impactful applications using FlutterFlow.'
  }
]

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="certifications" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          Certifications
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-xl hover-glow transition-all duration-300 overflow-hidden scroll-animate interactive-element"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  {/* Icon Section - 1/4 */}
                  <div className="bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center p-6 sm:p-8 md:p-12">
                    <div className={`transition-all duration-300 ${
                      hoveredId === cert.id ? 'scale-110 rotate-3' : ''
                    }`}>
                      <CertificationIcon 
                        iconPath={cert.icon} 
                        alt={`${cert.issuer} icon`}
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </div>
                  </div>

                  {/* Content Section - 3/4 */}
                  <div className="md:col-span-3 p-4 sm:p-6 flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`text-lg sm:text-xl font-playfair font-semibold mb-2 transition-colors duration-300 ${
                          hoveredId === cert.id ? 'text-cyan-600' : ''
                        }`}>
                          {cert.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <p className="text-sm sm:text-base font-playfair font-medium text-muted-foreground">
                            {cert.issuer}
                          </p>
                          <Badge variant="outline" className="text-xs font-inconsolata w-fit">
                            {cert.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed font-inconsolata">
                          {cert.description}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`flex items-center gap-2 text-cyan-600 text-sm font-inconsolata font-medium transition-all duration-300 ${
                          hoveredId === cert.id ? 'scale-105' : ''
                        }`}>
                          <ExternalLink className="h-4 w-4" />
                          <span>View Credential</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-sm sm:max-w-lg md:max-w-2xl mx-2 sm:mx-4 p-3 sm:p-6">
            <DialogHeader className="pb-2 sm:pb-4">
              <DialogTitle className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-playfair pr-6 sm:pr-8">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <CertificationIcon 
                    iconPath={selectedCert?.icon || ''} 
                    alt={`${selectedCert?.issuer} icon`}
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
                  />
                </div>
                <span className="text-left leading-tight">{selectedCert?.title}</span>
              </DialogTitle>
            </DialogHeader>
            {selectedCert && (
              <div className="space-y-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full rounded-lg"
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <p className="font-playfair font-medium">{selectedCert.issuer}</p>
                    <p className="text-sm text-muted-foreground font-inconsolata">Issued: {selectedCert.date}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inconsolata">
                      {selectedCert.description}
                    </p>
                  </div>
                  <a
                    href={selectedCert.credentialUrl}
                    className="flex items-center gap-1 text-sm text-cyan-600 hover:underline interactive-element font-inconsolata"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}