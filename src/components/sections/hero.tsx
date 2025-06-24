"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedBackground } from "@/components/shared/animated-background";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="home" className="relative text-center">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <div className="fade-in-up">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-glitch"
              data-text="Hi, I’m Sagar Chavan"
            >
                Hi, I’m Sagar Chavan
            </h1>
        </div>
        <p className="fade-in-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: '2.5s' }}>
        Developer | AI & Data Science Enthusiast | Problem Solver
        </p>
        <div className="mt-8 fade-in-up" style={{ animationDelay: '3s' }}>
          <Button onClick={scrollToAbout} size="lg" className="hologram-button text-foreground">
            Enter the Site <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
