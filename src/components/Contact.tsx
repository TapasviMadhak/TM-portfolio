import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const contactDetails = [
  {
    icon: FaEnvelope,
    title: 'Email',
    detail: 'madhaktapasvi@gmail.com',
    href: 'mailto:madhaktapasvi@gmail.com',
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    detail: '/in/tapasvi-madhak',
    href: 'https://www.linkedin.com/in/tapasvi-madhak-159945248/',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    detail: '/TapasviMadhak',
    href: 'https://github.com/TapasviMadhak',
  },
  {
    icon: SiTryhackme,
    title: 'TryHackMe',
    detail: '/tapasvimadhak',
    href: 'https://tryhackme.com/p/tapasvimadhak',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border bg-card p-6 text-card-foreground transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <item.icon className="h-8 w-8 text-primary" />
                  <div className="text-center">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="first-name">First name</Label>
              <div className="mt-2.5">
                <Input type="text" name="first-name" id="first-name" autoComplete="given-name" />
              </div>
            </div>
            <div>
              <Label htmlFor="last-name">Last name</Label>
              <div className="mt-2.5">
                <Input type="text" name="last-name" id="last-name" autoComplete="family-name" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <div className="mt-2.5">
                <Input type="email" name="email" id="email" autoComplete="email" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <div className="mt-2.5">
                <Textarea name="message" id="message" rows={4} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
