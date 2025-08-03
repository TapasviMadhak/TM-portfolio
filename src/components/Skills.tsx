import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across cybersecurity, web development, and various programming languages.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Skills Grid */}
          <Card className="group hover:shadow-lg transition-all duration-300 h-fit lg:h-[600px]">
            <CardHeader>
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
                <div className="p-6 space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="font-semibold text-primary border-b border-border/50 pb-2">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="group hover:shadow-lg transition-all duration-300 h-fit lg:h-[600px]">
            <CardHeader>
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                Certifications & Training
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
                <div className="p-6 space-y-4">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cert flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                    >
                      <span className="font-medium group-hover/cert:text-primary transition-colors">
                        {cert.name}
                      </span>
                      <FaExternalLinkAlt className="h-4 w-4 text-muted-foreground group-hover/cert:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
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
              <div className="text-2xl font-bold text-primary mb-1">{Object.values(skills).flat().length}</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;