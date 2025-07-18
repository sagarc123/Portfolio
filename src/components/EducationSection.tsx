import React, { useState, useEffect } from 'react';
import { GraduationCap, Trophy, Star } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const educationLevels = [
    {
      id: 1,
      level: "LEVEL 1",
      title: "High School",
      institution: "Your High School",
      year: "2019-2021",
      score: "95%",
      description: "Foundation level completed with excellence",
      color: "text-neon-blue"
    },
    {
      id: 2,
      level: "LEVEL 2",
      title: "Diploma",
      institution: "Your College",
      year: "2021-2023",
      score: "9.2 CGPA",
      description: "Specialized in Computer Science fundamentals",
      color: "text-neon-green"
    },
    {
      id: 3,
      level: "LEVEL 3",
      title: "Bachelor's Degree",
      institution: "Your University",
      year: "2023-2025",
      score: "8.8 CGPA",
      description: "AI & Data Science specialization in progress",
      color: "text-neon-magenta"
    }
  ];

  const completeLevel = (levelId: number) => {
    if (!completedLevels.includes(levelId)) {
      setCompletedLevels([...completedLevels, levelId]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const levelId = parseInt(entry.target.getAttribute('data-level') || '0');
            if (levelId > 0) {
              setCurrentLevel(levelId);
              setTimeout(() => completeLevel(levelId), 1000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.education-level');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [completedLevels]);

  return (
    <section data-section="3" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-yellow neon-glow mb-4">
            EDUCATION LEVELS
          </h2>
          <p className="retro-font text-xl text-gray-300">
            Journey through the learning world map
          </p>
        </div>

        {/* Game Map Timeline */}
        <div className="relative">
          {/* Progress Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gray-700 rounded-full">
            <div 
              className="bg-gradient-to-b from-neon-blue to-neon-green rounded-full transition-all duration-2000 ease-out"
              style={{ 
                height: `${(completedLevels.length / educationLevels.length) * 100}%`,
                width: '100%'
              }}
            />
          </div>

          {educationLevels.map((edu, index) => (
            <div
              key={edu.id}
              className={`education-level relative flex items-center mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              data-level={edu.id}
            >
              {/* Level Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                  completedLevels.includes(edu.id) 
                    ? 'bg-neon-green border-neon-green' 
                    : currentLevel === edu.id 
                    ? 'bg-neon-yellow border-neon-yellow pulse-glow' 
                    : 'bg-gray-700 border-gray-600'
                }`}>
                  {completedLevels.includes(edu.id) ? (
                    <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-black" />
                    </span>
                  ) : currentLevel === edu.id ? (
                    <Star className="w-8 h-8 text-black blink" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Level Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <div className={`achievement-card ${
                  completedLevels.includes(edu.id) ? 'zoom-in' : ''
                } ${currentLevel === edu.id ? 'screen-shake' : ''}`}>
                  <div className={`pixel-font text-lg ${edu.color} neon-glow mb-2`}>
                    {edu.level}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-neon-blue mb-2">{edu.year}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-yellow font-bold">
                      HIGH SCORE: {edu.score}
                    </span>
                    {completedLevels.includes(edu.id) && (
                      <div className="text-neon-green pixel-font text-xs fade-in">
                        LEVEL CLEARED!
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mt-2 retro-font">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Stats */}
        <div className="text-center mt-16">
          <div className="level-map inline-block px-8 py-4">
            <div className="pixel-font text-neon-green text-lg mb-2">
              LEVELS COMPLETED: {completedLevels.length}/{educationLevels.length}
            </div>
            <div className="progress-bar w-64 mx-auto">
              <div 
                className="progress-fill"
                style={{ width: `${(completedLevels.length / educationLevels.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;