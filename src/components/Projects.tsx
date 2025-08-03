import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaGithub, FaGamepad, FaShieldAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Skribbl.io Clone',
    description: 'A real-time, multiplayer drawing and guessing game that allows users to join rooms, draw words, and compete with friends. Built to replicate the fun and interactive experience of the original Skribbl.io.',
    icon: FaGamepad,
    color: 'from-blue-500 to-purple-600',
    tags: ['Node.js', 'Socket.IO', 'JavaScript', 'Redux.js', 'CSS'],
    repoUrl: 'https://github.com/TapasviMadhak/Skribbl.io_Clone',
  },
  {
    title: 'Cyber Toolkit v1.0',
    description: 'A versatile collection of cybersecurity tools designed for penetration testing and security analysis. This toolkit provides a range of scripts to assist with network scanning, vulnerability assessment, and other ethical hacking tasks.',
    icon: FaShieldAlt,
    color: 'from-red-500 to-orange-600',
    tags: ['Python', 'Cybersecurity', 'Penetration Testing', 'Tooling'],
    repoUrl: 'https://github.com/TapasviMadhak/CyberToolkit-v1.0',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills in cybersecurity and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group relative flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 modern-shadow hover:modern-shadow-lg cursor-pointer-elem"
            >
              {/* Project Number */}
              <div className="absolute top-4 left-4 z-10 w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-primary">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              
              {/* Icon Header with gradient */}
              <CardHeader className="p-0 relative">
                <div className="aspect-video overflow-hidden relative flex items-center justify-center">
                  <div className={`bg-gradient-to-br ${project.color} h-full w-full flex items-center justify-center relative`}>
                    <project.icon className="h-20 w-20 text-white/90 transition-all duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </CardHeader>
              
              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 cursor-pointer-elem" 
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                </div>
                
                <CardContent className="flex-grow p-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* Footer with GitHub link */}
                <CardFooter className="p-0">
                  <Button 
                    variant="outline" 
                    className="w-full group/button bg-card hover:bg-primary hover:text-primary-foreground border-border hover:border-primary transition-all duration-300 cursor-pointer-elem" 
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4 group-hover/button:rotate-12 transition-transform" />
                      View Source Code
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button variant="outline" size="lg" className="cursor-pointer-elem" asChild>
            <a href="https://github.com/TapasviMadhak" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
