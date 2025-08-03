import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import meImage from '@/assets/me.jpg';

const About = () => {
  return (
    <section id="about" className="bg-secondary py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="flex justify-center md:col-span-1">
            <Avatar className="h-48 w-48 border-4 border-primary">
              <AvatarImage src={meImage} alt="Tapasvi Madhak" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a cybersecurity specialist and recent BCA graduate with a passion for offensive security.
              I excel as a Penetration Tester and Bug Hunter, where I ethically dismantle digital defenses to uncover critical vulnerabilities. My work empowers organizations to fortify their security posture against real-world threats.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I am relentlessly curious, constantly mastering the evolving tactics of malicious actors to ensure I always remain a step ahead. My goal is to leverage my skills to build a more secure and resilient digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
