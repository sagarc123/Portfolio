import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Users, Lightbulb, Target } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [collectedSkills, setCollectedSkills] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const techSkills = [
    { id: 1, name: "Java", level: 85, icon: Code, color: "text-neon-blue" },
    { id: 2, name: "Python", level: 70, icon: Code, color: "text-neon-green" },
    { id: 3, name: "C++", level: 85, icon: Code, color: "text-neon-magenta" },
    { id: 4, name: "HTML", level: 75, icon: Code, color: "text-neon-orange" },
    { id: 5, name: "CSS", level: 75, icon: Code, color: "text-neon-orange"},
    { id: 6, name: "SQL", level: 80, icon: Database, color: "text-neon-blue" },
    { id: 7, name: "AI/ML", level: 80, icon: Brain, color: "text-neon-green" },
    { id: 8, name: "Data Structures", level: 75, icon: Database, color: "text-neon-magenta" },
  ];

  const softSkills = [
    { id: 9, name: "Leadership", level: 70, icon: Users, color: "text-neon-yellow" },
    { id: 10, name: "Critical Thinking", level: 80, icon: Brain, color: "text-neon-blue" },
    { id: 11, name: "Innovation", level: 80, icon: Lightbulb, color: "text-neon-green" },
    { id: 12, name: "Problem Solving", level: 75, icon: Target, color: "text-neon-magenta" },
  ];

  const collectSkill = (skillId: number, points: number) => {
    if (!collectedSkills.includes(skillId)) {
      setCollectedSkills([...collectedSkills, skillId]);
      setScore(score + points);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section data-section="2" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-green neon-glow mb-4">
            SKILL TREE
          </h2>
          <div className="score-counter mb-4">
            SCORE: {score.toLocaleString()}
          </div>
          <p className="retro-font text-xl text-gray-300">
            Click on power-ups to collect skills
          </p>
        </div>

        {/* Tech Skills */}
        <div className="level-map mb-16">
          <h3 className="pixel-font text-2xl text-neon-blue neon-glow mb-8 text-center">
            TECHNICAL POWER-UPS
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {techSkills.map((skill) => {
              const Icon = skill.icon;
              const isCollected = collectedSkills.includes(skill.id);
              
              return (
                <div
                  key={skill.id}
                  className={`skill-item section-enter power-up ${
                    isCollected ? 'opacity-50' : 'cursor-pointer'
                  }`}
                  onClick={() => collectSkill(skill.id, skill.level)}
                >
                  <div className={`neon-box p-6 rounded-lg text-center ${skill.color} hover:pulse-glow`}>
                    <Icon className="w-8 h-8 mx-auto mb-4" />
                    <div className="pixel-font text-sm mb-2">{skill.name}</div>
                    <div className="progress-bar mb-2">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400">LVL {skill.level}</div>
                    {isCollected && (
                      <div className="text-neon-green pixel-font text-xs mt-2 fade-in">
                        COLLECTED!
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="level-map">
          <h3 className="pixel-font text-2xl text-neon-magenta neon-glow mb-8 text-center">
            SOFT SKILL BADGES
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              const isCollected = collectedSkills.includes(skill.id);
              
              return (
                <div
                  key={skill.id}
                  className={`skill-item section-enter power-up ${
                    isCollected ? 'opacity-50' : 'cursor-pointer'
                  }`}
                  onClick={() => collectSkill(skill.id, skill.level)}
                >
                  <div className={`neon-box p-6 rounded-lg text-center ${skill.color} hover:pulse-glow`}>
                    <Icon className="w-8 h-8 mx-auto mb-4" />
                    <div className="pixel-font text-sm mb-2">{skill.name}</div>
                    <div className="progress-bar mb-2">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400">LVL {skill.level}</div>
                    {isCollected && (
                      <div className="text-neon-green pixel-font text-xs mt-2 fade-in">
                        COLLECTED!
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;