import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  { name: 'Cyber Threat Management', url: 'https://www.credly.com/badges/e6d7c51e-8e60-4614-81b3-c49c4c41d4df/linked_in_profile' },
  { name: 'Endpoint Security', url: 'https://www.credly.com/badges/de10fcee-fdd1-43e9-9ab3-bd81f818f86f/linked_in_profile' },
  { name: 'Ethical Hacker', url: 'https://www.credly.com/badges/8450e451-6465-4cc2-b13c-ada59cd781a2/linked_in_profile' },
  { name: 'Junior Cybersecurity Analyst', url: 'https://www.credly.com/badges/4d550a54-9e66-45a9-a667-7eba1964c035/linked_in_profile' },
  { name: 'Network Defense', url: 'https://www.credly.com/badges/9a5c41ff-75c9-4e09-a7c6-cbdb84601c51/linked_in_profile' },
  { name: 'Networking Basics', url: 'https://www.credly.com/badges/ea93060c-7954-4982-93d3-212bc3a4ffb6/linked_in_profile' },
  { name: 'Networking Devices & Config', url: 'https://www.credly.com/badges/7ac0b096-27ce-4fc5-9fb9-9c0861e5edc0/linked_in_profile' },
  { name: 'Web Developer Bootcamp 2025', url: 'https://www.udemy.com/certificate/UC-be54063f-6e74-4b07-9032-3393e0c64d4e/' },
];

const skills = {
  'Cybersecurity': ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Ethical Hacking', 'Endpoint Security', 'Threat Management'],
  'Languages': ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express'],
  'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  'Tools & Platforms': ['Git', 'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux', 'Windows'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and professional credentials in cybersecurity and development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Certifications Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 modern-shadow hover:modern-shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Professional Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 w-full">
                <div className="space-y-3 pr-4">
                  {certifications.map((cert, index) => (
                    <a
                      key={cert.name}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border/50 p-4 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 cursor-pointer-elem"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                          {index + 1}
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">{cert.name}</span>
                      </div>
                      <FaExternalLinkAlt className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 modern-shadow hover:modern-shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 w-full">
                <div className="space-y-8 pr-4">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <div key={category} className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-primary rounded-full shadow-sm"></div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {category}
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {items.map((skill, skillIndex) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer-elem font-medium px-3 py-1.5 text-sm"
                            style={{
                              animationDelay: `${(categoryIndex * items.length + skillIndex) * 50}ms`
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Quick Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{Object.values(skills).flat().length}</div>
              <div className="text-sm text-white">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
