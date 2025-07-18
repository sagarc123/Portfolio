import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Award, ChevronRight } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState<number[]>([]);
  const [totalExp, setTotalExp] = useState(0);

  const experiences = [
    {
      id: 1,
      title: " AI Intern",
      company: "AICTE",
      duration: "Jun 2025 - Feb 2025",
      location: "Remote",
      description: "Gained foundational expertise in AI and deep learning by building practical projects focused on image generation and UI-based application development.",
      achievements: [
        "Developed AI models for real-time image generation using deep learning frameworks.",
        "Integrated AI functionalities into interactive user interfaces for seamless experiences.",
        "Utilized advanced tools like TensorFlow and OpenCV for end-to-end AI application development."
      ],
      techStack: ["Stable Diffusion", "Comfy UI", "AI-ML"],
      expGained: 2500,
      color: "text-neon-blue"
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      company: "Internship Studio",
      duration: "Jun 2024 - Jul 2024",
      location: "Remote",
      description: "Processed and analyzed large-scale datasets to build high-accuracy machine learning models using supervised, unsupervised, and NLP techniques.",
      achievements: [
       "Achieved 85% accuracy in predictive modeling using supervised algorithms like linear regression.",
       "Reached 95% clustering consistency through optimized unsupervised learning techniques.",
       "Enhanced text classification performance using NLP methods with libraries like NLTK and scikit-learn."
      ],
      techStack: ["Python", "TensorFlow", "Pandas","NumPy", "scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
      expGained: 2000,
      color: "text-neon-green"
    }
  ];

  const unlockAchievement = (expId: number, exp: number) => {
    if (!unlockedAchievements.includes(expId)) {
      setUnlockedAchievements([...unlockedAchievements, expId]);
      setTotalExp(totalExp + exp);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const expId = parseInt(entry.target.getAttribute('data-exp') || '0');
            const exp = parseInt(entry.target.getAttribute('data-experience') || '0');
            if (expId > 0 && exp > 0) {
              setTimeout(() => unlockAchievement(expId, exp), 500);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [unlockedAchievements, totalExp]);

  return (
    <section data-section="4" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-orange neon-glow mb-4">
            EXPERIENCE MISSIONS
          </h2>
          <div className="score-counter mb-4">
            TOTAL EXP: {totalExp.toLocaleString()}
          </div>
          <p className="retro-font text-xl text-gray-300">
            Professional achievements unlocked
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => {
            const isUnlocked = unlockedAchievements.includes(exp.id);
            
            return (
              <div
                key={exp.id}
                className={`experience-item achievement-card ${
                  isUnlocked ? 'zoom-in' : 'opacity-75'
                }`}
                data-exp={exp.id}
                data-experience={exp.expGained}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className={`pixel-font text-lg ${exp.color} neon-glow mb-2`}>
                      {isUnlocked && (
                        <Award className="inline-block w-5 h-5 mr-2" />
                      )}
                      MISSION {exp.id}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-neon-blue mb-2">{exp.company}</p>
                    <div className="flex items-center text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>

                  <div className="md:w-2/3 md:pl-8">
                    <p className="text-gray-300 mb-4 retro-font">{exp.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="pixel-font text-sm text-neon-yellow mb-3">
                        ACHIEVEMENTS UNLOCKED:
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className={`flex items-center text-gray-300 ${
                              isUnlocked ? 'slide-in-left' : ''
                            }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            <ChevronRight className="w-4 h-4 mr-2 text-neon-green" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="pixel-font text-sm text-neon-blue mb-3">
                        SKILLS UPGRADE:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, index) => (
                          <div
                            key={index}
                            className={`power-up bg-gray-800 border border-neon-blue text-neon-blue px-3 py-1 rounded text-sm ${
                              isUnlocked ? 'zoom-in' : ''
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* EXP Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-neon-yellow" />
                        <span className="text-neon-yellow font-bold">
                          +{exp.expGained} EXP
                        </span>
                      </div>
                      {isUnlocked && (
                        <div className="text-neon-green pixel-font text-xs fade-in">
                          MISSION COMPLETE!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;