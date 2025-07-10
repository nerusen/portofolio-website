import { Sidebar } from '@/components/sidebar'
import { HeroSection } from '@/components/hero-section'
import { WhatIDoSection } from '@/components/what-i-do-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificationsSection } from '@/components/certifications-section'
import { HackathonsSection } from '@/components/hackathons-section'
import { ContactSection } from '@/components/contact-section'
import { ScrollAnimation } from '@/components/scroll-animation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-20 pointer-events-none" />
      
      <Sidebar />
      <ScrollAnimation />
      
      {/* Main content */}
      <main className="lg:ml-64 relative z-10">
        <div className="scroll-smooth">
          <HeroSection />
          <WhatIDoSection />
          <div className="rounded-3xl glass-container-enhanced mx-4 sm:mx-6 lg:mx-8 my-8">
            <ExperienceSection />
          </div>
          <ProjectsSection />
          <div className="rounded-3xl glass-container-enhanced mx-4 sm:mx-6 lg:mx-8 my-8">
            <CertificationsSection />
          </div>
          <HackathonsSection />
          <div className="rounded-3xl glass-container-enhanced mx-4 sm:mx-6 lg:mx-8 my-8">
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  )
}