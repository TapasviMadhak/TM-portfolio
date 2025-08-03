import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#medium', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-16 items-center justify-between">
          <button 
            onClick={() => smoothScrollTo('#home')} 
            className="text-xl font-bold tracking-tight cursor-pointer-elem hover:text-primary transition-colors"
          >
            <span className="gradient-text">Tapasvi</span> <span className="text-muted-foreground">Portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => smoothScrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer-elem"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="cursor-pointer-elem"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className={cn(
            'md:hidden',
            'absolute top-16 left-0 w-full bg-background shadow-lg'
          )}
        >
          <nav className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  smoothScrollTo(link.href);
                  setIsOpen(false);
                }}
                className="w-full text-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer-elem"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
