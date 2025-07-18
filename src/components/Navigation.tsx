import React from 'react';
import { Volume2, VolumeX, Home, User, Zap, GraduationCap, Briefcase, Folder, Award, FileText, Mail } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onSectionChange,
  soundEnabled,
  onSoundToggle
}) => {
  const navItems = [
    { id: 0, icon: Home, label: 'Home', color: 'text-neon-blue' },
    { id: 1, icon: User, label: 'Profile', color: 'text-neon-green' },
    { id: 2, icon: Zap, label: 'Skills', color: 'text-neon-yellow' },
    { id: 3, icon: GraduationCap, label: 'Education', color: 'text-neon-magenta' },
    { id: 4, icon: Briefcase, label: 'Experience', color: 'text-neon-orange' },
    { id: 5, icon: Folder, label: 'Projects', color: 'text-neon-blue' },
    { id: 6, icon: Award, label: 'Certificates', color: 'text-neon-green' },
    { id: 7, icon: FileText, label: 'Publications', color: 'text-neon-yellow' },
    { id: 8, icon: Mail, label: 'Contact', color: 'text-neon-magenta' }
  ];

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-auto">
      <div className="level-map no-level-map-bg p-4 space-y-4">
        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  w-10 h-10 flex items-center justify-center rounded
                  transition-all duration-300 border-2
                  ${isActive 
                    ? `${item.color} border-current bg-opacity-20 pulse-glow` 
                    : 'text-gray-400 border-gray-600 hover:text-white hover:border-white'
                  }
                `}
                title={item.label}
              >
                <Icon className={`w-4 h-4 ${isActive ? item.color : ''}`} />
              </button>
            );
          })}
        </div>

        {/* Progress bar and debug info removed as requested */}
        
        <div className="text-center">
          <div className="pixel-font text-xs text-gray-400">
            {currentSection + 1}/{navItems.length}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;