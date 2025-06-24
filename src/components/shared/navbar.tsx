"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Code, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(id);
  };

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => {
        const ButtonComponent = (
            <Button
              key={link.id}
              variant="ghost"
              onClick={(e) => handleLinkClick(e, link.id)}
              className={cn(
                'text-foreground/70 transition-colors hover:text-primary hover:bg-transparent',
                activeLink === link.id ? 'text-primary font-semibold' : 'font-normal',
                isMobile && 'text-2xl w-full'
              )}
            >
              {link.title}
            </Button>
        );
        return isMobile ? <SheetClose asChild key={link.id}>{ButtonComponent}</SheetClose> : ButtonComponent;
      })}
    </>
  );

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Button asChild variant="link" className="p-0 h-auto">
            <Link href="#home" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
                <Code className="h-6 w-6 text-primary" />
                Portfolio
            </Link>
        </Button>
        <nav className="hidden md:flex gap-1">
          <NavItems />
        </nav>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/90 backdrop-blur-xl">
                    <nav className="flex flex-col items-center justify-center h-full gap-6">
                        <NavItems isMobile />
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
