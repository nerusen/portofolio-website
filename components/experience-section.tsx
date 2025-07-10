'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Web Development Intern',
    company: 'AHG Lab',
    location: 'Makati, Philippines',
    period: '2025 - Present',
    description: 'Streamlined the development process by implementing a modern tech stack. Focused on building scalable and maintainable web applications.',
    technologies: ['Next.js', 'Tailwind', 'TypeScript', 'Sanity.io', 'Docker']
  },
  {
    id: 2,
    title: 'DataCamp Scholar',
    company: 'DataCamp',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Recognized for outstanding performance and potential in data science as part of a select group of students. Demonstrated commitment to advancing skills and knowledge in the field.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn']
  },
  {
    id: 3,
    title: 'Web Development Lead',
    company: 'Google Developer Student Clubs - PLM',
    location: 'Intramuros, Manila',
    period: '2024 - 2025',
    description: 'Spearheaded initiatives to create impactful technology and web development projects and events (online and in-person) for the benefit of students and the wider community.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Contentful', 'React', 'Node.js']
  },
  {
    id: 4,
    title: 'Notion Campus Leader',
    company: 'Notion',
    location: 'Manila, Philippines',
    period: '2024 - 2025',
    description: `Drove adoption and skillful utilization of Notion among users, particularly students, as one of the few chosen Campus Leaders globally. Created and led campaigns, events, and initiatives to meet Notion's strategic goals.`,
    technologies: ['Notion', 'Community Building', 'Content Creation', 'Event Management']
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          Experience
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="group hover:shadow-lg hover-glow transition-all duration-300 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-playfair mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground font-inconsolata">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed font-inconsolata">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs font-inconsolata hover:scale-110 transition-transform duration-300 interactive-element"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}