import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Greeting Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Tapasvi Madhak</span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Cybersecurity Enthusiast & Penetration Tester
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about ethical hacking and digital security. I specialize in finding vulnerabilities 
            to make the digital world safer for everyone.
          </p>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 py-6 modern-shadow hover:modern-shadow-lg cursor-pointer-elem" asChild>
              <a href="#contact">
                Let's Connect
                <FaEnvelope className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-effect hover:bg-primary/5 cursor-pointer-elem" asChild>
              <a href="/CV_tapasvi.pdf" target="_blank" download="CV_Tapasvi_Madhak.pdf">
                Download CV
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </Button>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex justify-center items-center gap-6">
            <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
            <div className="h-px w-8 bg-border"></div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/TapasviMadhak" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary modern-shadow hover:modern-shadow-lg cursor-pointer-elem transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tapasvi-madhak-159945248/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-card hover:bg-blue-500/10 text-muted-foreground hover:text-blue-500 modern-shadow hover:modern-shadow-lg cursor-pointer-elem transition-all duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://tryhackme.com/p/tapasvimadhak" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-card hover:bg-red-500/10 text-muted-foreground hover:text-red-500 modern-shadow hover:modern-shadow-lg cursor-pointer-elem transition-all duration-300"
              >
                <SiTryhackme className="h-5 w-5" />
              </a>
              <a 
                href="mailto:madhaktapasvi@gmail.com" 
                className="p-3 rounded-xl bg-card hover:bg-green-500/10 text-muted-foreground hover:text-green-500 modern-shadow hover:modern-shadow-lg cursor-pointer-elem transition-all duration-300"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
