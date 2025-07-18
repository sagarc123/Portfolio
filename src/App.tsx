import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import ScanlineOverlay from './components/ScanlineOverlay';
import './styles/arcade.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const windowHeight = window.innerHeight;
      let closestIdx = 0;
      let minDistance = Infinity;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - windowHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });
      setCurrentSection(closestIdx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('Render: currentSection', currentSection);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-midnight overflow-x-hidden">
      <AnimatedBackground />
      <ScanlineOverlay />
      
      <div className="relative z-10">
        <HeroSection />
        <ProfileSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <PublicationsSection />
        <ContactSection />
      </div>

      <Navigation 
        currentSection={currentSection}
        onSectionChange={scrollToSection}
        soundEnabled={soundEnabled}
        onSoundToggle={() => setSoundEnabled(!soundEnabled)}
      />
    </div>
  );
}

export default App;