import React, { useState } from 'react';
import { Mail, MapPin, Calendar, User } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const playerCards = [
    {
      id: 1,
      title: "THE PROGRAMMER",
      level: "Expert",
      stats: ["Java", "Python", "C++","HTML","CSS"],
      description: "Masters multiple programming languages with precision",
      color: "text-neon-blue"
    },
    {
      id: 2,
      title: "THE DATA SCIENTIST",
      level: "Advanced",
      stats: ["AI/ML", "Data Analysis", "Tableau", "SQL"],
      description: "Transforms raw data into actionable insights",
      color: "text-neon-green"
    },
    {
      id: 3,
      title: "THE PROBLEM SOLVER",
      level: "Master",
      stats: ["DSA", "Critical Thinking", "Leadership", "Innovation"],
      description: "Tackles complex challenges with creative solutions",
      color: "text-neon-magenta"
    }
  ];

  const profileInfo = {
    name: "Sagar Chavan",
    email: "sagarchavan142003@gmail.com",
    location: "Mumbai",
    year: "B.E - Completed",
    linkedin: "linkedin.com/in/yourprofile"
  };

  return (
    <section data-section="1" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-yellow neon-glow mb-4">
            PLAYER SELECT
          </h2>
          <p className="retro-font text-xl text-gray-300">
            Choose your character to view stats
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {playerCards.map((card) => (
            <div
              key={card.id}
              className={`achievement-card cursor-pointer transform transition-all duration-300 ${
                selectedCard === card.id ? 'scale-105 screen-shake' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
            >
              <div className="text-center">
                <div className={`pixel-font text-lg ${card.color} neon-glow mb-4`}>
                  {card.title}
                </div>
                
                <div className="text-neon-yellow mb-4">
                  LEVEL: {card.level}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {card.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="power-up bg-gray-800 rounded px-3 py-1 text-sm text-neon-blue border border-neon-blue"
                    >
                      {stat}
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 text-sm retro-font">
                  {card.description}
                </p>

                {selectedCard === card.id && (
                  <div className="mt-4 text-neon-green pixel-font text-xs fade-in">
                    CHARACTER SELECTED!
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Profile Information */}
        <div className="level-map">
          <h3 className="pixel-font text-2xl text-neon-blue neon-glow mb-8 text-center">
            PLAYER PROFILE
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="text-neon-green w-6 h-6" />
                <div>
                  <div className="text-gray-400 text-sm">NAME</div>
                  <div className="text-neon-green retro-font text-lg">{profileInfo.name}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="text-neon-blue w-6 h-6" />
                <div>
                  <div className="text-gray-400 text-sm">EMAIL</div>
                  <div className="text-neon-blue retro-font text-lg">{profileInfo.email}</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-neon-magenta w-6 h-6" />
                <div>
                  <div className="text-gray-400 text-sm">LOCATION</div>
                  <div className="text-neon-magenta retro-font text-lg">{profileInfo.location}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Calendar className="text-neon-yellow w-6 h-6" />
                <div>
                  <div className="text-gray-400 text-sm">STATUS</div>
                  <div className="text-neon-yellow retro-font text-lg">{profileInfo.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;