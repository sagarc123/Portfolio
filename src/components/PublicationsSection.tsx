import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [highScore, setHighScore] = useState(0);

  const publications = [
    {
      id: 1,
      title: "VOXVISION: An Intelligent Voice Assistant for the Visually Impaired",
      journal: "JETIR (Journal of Emerging Technologies and Innovative Research)",
      year: "2025",
      citations: 7.95,
      impact: "High",
      authors: ["Sagar Chavan","Yash Kashte","Parth Khatu"],
      abstract: "This paper presents VOXVISION, a voice-controlled intelligent assistant designed to empower visually impaired individuals by enabling seamless interaction with digital devices through natural language processing and speech technologies.",
      link: "https://www.jetir.org/papers/JETIR2504873.pdf",     
      score: 4850,
      color: "text-neon-blue"
    }
  ];

  const updateScore = (pubId: number, finalScore: number) => {
    const increment = Math.ceil(finalScore / 100);
    const interval = setInterval(() => {
      setScores(prev => {
        const current = prev[pubId] || 0;
        const newScore = Math.min(current + increment, finalScore);
        
        if (newScore >= finalScore) {
          clearInterval(interval);
          setHighScore(prevHigh => Math.max(prevHigh, finalScore));
        }
        
        return { ...prev, [pubId]: newScore };
      });
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pubId = parseInt(entry.target.getAttribute('data-pub') || '0');
            const score = parseInt(entry.target.getAttribute('data-score') || '0');
            setTimeout(() => updateScore(pubId, score), Math.random() * 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.publication-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section data-section="7" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-yellow neon-glow mb-4">
            HIGH SCORE BOARD
          </h2>
          <div className="score-counter mb-4">
            HIGH SCORE: {highScore.toLocaleString()}
          </div>
          <p className="retro-font text-xl text-gray-300">
            Research publications and academic achievements
          </p>
        </div>

        {/* Leaderboard */}
        <div className="level-map mb-12">
          <div className="text-center mb-8">
            <div className="pixel-font text-xl text-neon-green neon-glow mb-4">
              RESEARCH LEADERBOARD
            </div>
            <div className="progress-bar w-96 mx-auto mb-4">
              <div 
                className="progress-fill"
                style={{ width: `${(Object.keys(scores).length / publications.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => {
              const currentScore = scores[pub.id] || 0;
              const isScoring = currentScore > 0 && currentScore < pub.score;
              
              return (
                <div
                  key={pub.id}
                  className={`publication-item achievement-card ${
                    currentScore > 0 ? 'zoom-in' : ''
                  }`}
                  data-pub={pub.id}
                  data-score={pub.score}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`text-2xl font-bold ${pub.color} mr-4`}>
                        #{index + 1}
                      </div>
                      <FileText className={`w-8 h-8 ${pub.color} mr-4`} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {pub.title}
                        </h3>
                        <p className="text-neon-blue text-sm">{pub.journal}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`score-counter text-lg ${isScoring ? 'blink' : ''}`}>
                        {currentScore.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-xs">POINTS</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-4">
                        <p className="text-gray-300 text-sm retro-font">
                          {pub.abstract}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                          <span className="text-gray-400">{pub.year}</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1 text-neon-green" />
                          <span className="text-neon-green">{pub.citations} citations</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h4 className="pixel-font text-sm text-neon-yellow mb-2">
                          CO-AUTHORS:
                        </h4>
                        <div className="flex items-center flex-wrap gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          {pub.authors.map((author, idx) => (
                            <span key={idx} className="text-gray-300 text-sm">
                              {author}{idx < pub.authors.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className={`inline-block px-3 py-1 rounded text-xs ${
                          pub.impact === 'High' 
                            ? 'bg-green-800 text-neon-green' 
                            : pub.impact === 'Medium' 
                            ? 'bg-yellow-800 text-neon-yellow' 
                            : 'bg-blue-800 text-neon-blue'
                        }`}>
                          {pub.impact} Impact
                        </div>
                      </div>

                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arcade-button block text-center"
                      >
                        <ExternalLink className="inline-block w-4 h-4 mr-2" />
                        VIEW PAPER
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="neon-box p-6 text-neon-blue">
            <div className="score-counter text-2xl mb-2">
              {publications.length}
            </div>
            <div className="pixel-font text-sm">PUBLICATIONS</div>
          </div>
          <div className="neon-box p-6 text-neon-green">
            <div className="score-counter text-2xl mb-2">
              {publications.reduce((sum, pub) => sum + pub.citations, 0)}
            </div>
            <div className="pixel-font text-sm">TOTAL CITATIONS</div>
          </div>
          <div className="neon-box p-6 text-neon-yellow">
            <div className="score-counter text-2xl mb-2">
              {Object.values(scores).reduce((sum, score) => sum + score, 0).toLocaleString()}
            </div>
            <div className="pixel-font text-sm">RESEARCH SCORE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;