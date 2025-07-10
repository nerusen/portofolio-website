'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

// Custom contact icon component
const ContactIcon = ({ iconPath, alt, className }: { iconPath: string; alt: string; className?: string }) => {
  if (iconPath) {
    return (
      <Image
        src={iconPath}
        alt={alt}
        width={24}
        height={24}
        className={`${className || "h-4 w-4 sm:h-6 sm:w-6"} filter dark:invert-0 invert`}
      />
    )
  }
  
  // Fallback to default mail icon if custom icon not found
  return <Mail className={className || "h-4 w-4 sm:h-6 sm:w-6"} />
}

const contactMethods = [
  {
    name: 'Email',
    icon: '/icons/gmail_icon.svg',
    handle: 'lumedalauvigne@gmail.com',
    url: 'mailto:lumedalauvigne@gmail.com',
    color: 'hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950'
  },
  {
    name: 'LinkedIn',
    icon: '/icons/linkedin_icon.svg',
    handle: '@lauvigne.lumeda',
    url: 'https://linkedin.com/in/lauvigne-lumeda',
    color: 'hover:bg-cyan-50 hover:text-cyan-600 dark:hover:bg-cyan-950'
  },
  {
    name: 'GitHub',
    icon: '/icons/github_icon.svg',
    handle: '@yuyuhiei',
    url: 'https://github.com/yuyuhiei',
    color: 'hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-950'
  },
  {
    name: 'TikTok',
    icon: '', // No custom icon available, will use fallback
    handle: '@yuyuhieix',
    url: 'https://tiktok.com/@yuyuhieix',
    color: 'hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950'
  }
]

export function ContactSection() {
  const { theme } = useTheme()
  
  const handleGetInTouch = () => {
    window.location.href = 'mailto:lauvigne.lumeda@gmail.com'
  }

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-6 sm:mb-8 scroll-animate">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 scroll-animate font-inconsolata">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className={`group transition-all duration-300 hover-glow scroll-animate interactive-element cursor-pointer ${method.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8 text-center min-h-[140px] flex flex-col justify-center">
                    <div className="mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110">
                      <ContactIcon 
                        iconPath={method.icon} 
                        alt={`${method.name} icon`}
                        className="h-6 w-6 sm:h-8 sm:w-8 mx-auto"
                      />
                    </div>
                    <h3 className="font-playfair font-semibold mb-2 text-base sm:text-lg">{method.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-inherit font-inconsolata leading-relaxed px-2 break-words">
                      {method.handle}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="scroll-animate">
            <Button 
              size="lg" 
              onClick={handleGetInTouch}
              className={`text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 interactive-element font-inconsolata ${
                theme === 'dark' 
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}