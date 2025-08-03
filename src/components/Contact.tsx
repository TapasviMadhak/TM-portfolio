import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import { useState } from 'react';

const contactDetails = [
  {
    icon: FaEnvelope,
    title: 'Email',
    detail: 'tapasvimadhak@gmail.com',
    href: 'mailto:tapasvimadhak@gmail.com',
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fa078280-182f-4311-af5b-67c1596f7589',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('❌ Failed to send message. Please try again or contact me directly at tapasvimadhak@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center font-medium">
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <div className="mt-2.5">
                <Input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <div className="mt-2.5">
                <Input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <div className="mt-2.5">
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <div className="mt-2.5">
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
