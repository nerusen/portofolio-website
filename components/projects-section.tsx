'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Code } from 'lucide-react'
import Image from 'next/image'

// Custom tech icon component
const TechIcon = ({ tech }: { tech: string }) => {
  const iconMap: { [key: string]: string } = {
    'Apache Derby': 'apachederby.svg',
    'CSS': 'css.svg',
    'Contentful': 'contentful.svg',
    'Docker': 'docker.svg',
    'FastAPI': 'fastapi.svg',
    'Flutter': 'flutter.svg',
    'FlutterFlow': 'flutterflow.svg',
    'GCP': 'gcp.svg',
    'Gemini': 'gemini.svg',
    'Java': 'java.svg',
    'JavaScript': 'javascript.svg',
    'Next.js': 'nextjsv2.svg',
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
      <Image
        src={`/techstack/${iconFileName}`}
        alt={`${tech} icon`}
        width={16}
        height={16}
        className="h-4 w-4"
      />
    )
  }
  
  // Fallback to default code icon if custom icon not found
  return <Code className="h-4 w-4" />
}

// Tech stack icon mapping using custom icons
const techIcons: { [key: string]: JSX.Element } = {
  'Apache Derby': <TechIcon tech="Apache Derby" />,
  'CSS': <TechIcon tech="CSS" />,
  'Contentful': <TechIcon tech="Contentful" />,
  'FastAPI': <TechIcon tech="FastAPI" />,
  'Flutter': <TechIcon tech="Flutter" />,
  'FlutterFlow': <TechIcon tech="FlutterFlow" />,
  'GCP': <TechIcon tech="GCP" />,
  'Docker': <TechIcon tech="Docker" />,
  'Gemini': <TechIcon tech="Gemini" />,
  'Java': <TechIcon tech="Java" />,
  'JavaScript': <TechIcon tech="JavaScript" />,
  'Next.js': <TechIcon tech="Next.js" />,
  'OpenAI': <TechIcon tech="OpenAI" />,
  'Python': <TechIcon tech="Python" />,
  'Rasa': <TechIcon tech="Rasa" />,
  'React': <TechIcon tech="React" />,
  'ShadCN': <TechIcon tech="ShadCN" />,
  'Spring Boot': <TechIcon tech="Spring Boot" />,
  'Tailwind': <TechIcon tech="Tailwind" />,
  'WebSocket': <TechIcon tech="WebSocket" />
}

const projects = [
  {
    id: 1,
    title: 'Haliya: The AI Fortune Teller',
    category: 'Web Developer',
    description: 'Haliya is an AI-powered fortune telling application that uses machine learning to offer personalized predictions and insights, covering areas like path, lovelife, grades, health, and decision-making.',
    image: '/proj/projectOne.png',
    technologies: ['React', 'CSS', 'Rasa', 'OpenAI', 'Python'],
    liveUrl: 'https://github.com/Yuyuhiei/Haliya-The-AI-Fortune-Teller'
  },
  {
    id: 2,
    title: 'GDSC PLM Website',
    category: 'Web Developer',
    description: 'Official website for Google Developer Student Club at PLM featuring projects, events, blogs, and community engagement.',
    image: '/proj/projectTwo.png',
    technologies: ['Next.js', 'Tailwind', 'ShadCN', 'Contentful'],
    liveUrl: 'https://www.gdsc-plm.org/'
  },
  {
    id: 3,
    title: 'GrievDesk',
    category: 'Full Stack Developer',
    description: 'A comprehensive grievance management system for organizations to handle complaints and feedback efficiently.',
    image: '/proj/projectThree.png',
    technologies: ['React', 'CSS', 'Spring Boot'],
    liveUrl: 'https://plmce-grievdesk.web.app/'
  },
  {
    id: 4,
    title: 'Conso Programming Language and Compiler',
    category: 'Full Stack Developer',
    description: 'The Conso Web IDE is a sophisticated, browser-based Integrated Development Environment tailored for the custom programming language "Conso." It empowers users to write, analyze (lexically, syntactically, and semantically), transpile to C, and directly execute Conso code.',
    image: '/proj/projectFour.png',
    technologies: ['React', 'CSS', 'Python', 'FastAPI', 'WebSocket', 'Gemini', 'Docker'],
    liveUrl: 'https://conso-frontend-v2.onrender.com/'
  },
  {
    id: 5,
    title: 'AceFrame',
    category: 'Web Developer',
    description: 'This webinar introduces and discusses the latest trends and advancements in modern web frameworks. It is designed to help developers stay updated with essential tools and techniques in the rapidly evolving landscape of web development.',
    image: '/proj/projectFive.png',
    technologies: ['Next.js', 'Tailwind'],
    liveUrl: 'https://aceframe.web.app/'
  },
  {
    id: 6,
    title: 'PLM Enrollment System',
    category: 'Database Administrator and Developer',
    description: `This Java-based Object-Oriented Programming (OOP) project is a comprehensive enrollment management system for educational institutions. It utilizes NetBeans' Java GUI builder and JDBC to provide robust tools for student registration, course management, and reporting.`,
    image: '/proj/projectSix.png',
    technologies: ['Java', 'Apache Derby', 'CSS'],
    liveUrl: 'https://github.com/Yuyuhiei/PLM-Regulars-Enrolment-System'
  }
]

export function ProjectsSection() {
  const handleProjectClick = (liveUrl: string) => {
    if (liveUrl !== '#') {
      window.open(liveUrl, '_blank')
    }
  }

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl hover-glow transition-all duration-300 overflow-hidden border-2 border-border hover:border-primary/20 scroll-animate project-card interactive-element"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project.liveUrl)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Cyan overlay with icon on hover */}
                <div className="project-overlay">
                  <ExternalLink className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                </div>
                
                {/* Removed the number display */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs font-inconsolata">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg font-playfair group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-inconsolata">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="tech-icon-container interactive-element"
                    >
                      <div className="tech-icon">
                        {techIcons[tech] || <Code className="h-4 w-4" />}
                      </div>
                      <span className="tech-name font-inconsolata">
                        {tech}
                      </span>
                    </div>
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