import React, { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const [collectedCerts, setCollectedCerts] = useState<number[]>([]);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const certifications = [
    {
      id: 1,
      name: "Java METTL Certification",
      issuer: "Anudip Foundation",
      date: "2024",
      description: "Certified in core Java programming fundamentals and object-oriented principles.",
      credentialId: "NA",
      skills: ["Java", "OOPs", "Backend Development"],
      color: "text-neon-orange",
      link: "https://drive.google.com/file/d/1Q5WXZLdJpup-7XpYDb-TqQ7q9gmvoVTx/view?usp=sharing"
    },
    {
      id: 2,
      name: "Data Analysis Certificate",
      issuer: "IBM SkillsBuild",
      date: "2024",
      description: "Completed coursework on data cleaning, analysis, and visualization using Python.",
      credentialId: "NA",
      skills: ["Pandas", "Data Visualization", "Statistical Analysis"],
      color: "text-neon-blue",
      link: "https://drive.google.com/file/d/1UZHqCM8U3bTUdsSy3Ab2pBNCcMFBvArq/view?usp=sharing"
    },
    {
      id: 3,
      name: "Artificial Intelligence & Machine Learning",
      issuer: "Arvience Technologies",
      date: "2023",
      description: "Hands-on training in AI&ML concepts including model building, training, and evaluation.",
      credentialId: "NA",
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      color: "text-neon-red",
      link: "https://drive.google.com/file/d/1PT2q7hXmZGyHeMKVwx-p2Y0rEDer5iBH/view?usp=sharing"
    },
    {
      id: 4,
      name: "Deep Learning for Developers",
      issuer: "Infosys",
      date: "2024",
      description: "Hands-on training in DL concepts including model building, training, and evaluation.",
      credentialId: "NA",
      skills: ["Deep Learning", "TensorFlow", "Scikit-learn"],
      color: "text-neon-green",
      link: "https://drive.google.com/file/d/1cHZZHC0zFBtNzmuvvBFqA4QzcshOkVq0/view?usp=sharing"
    },
    {
      id: 5,
      name: "Hack the Box Competition",
      issuer: "College Principal",
      date: "2024",
      description: "Participated in cybersecurity and ethical hacking challenge focusing on penetration testing.",
      credentialId: "NA",
      skills: ["Cybersecurity", "Penetration Testing", "CTF Challenges"],
      color: "text-neon-magenta",
      link: "https://drive.google.com/file/d/1t20ub3FIpsLL9jj3iEn0juLjOy-_srjq/view"
    },
    {
      id: 6,
      name: "Java Project Completion - Practo",
      issuer: "Practo",
      date: "2024",
      description: "Successfully developed and deployed a healthcare-based Java project under Practo mentorship.",
      credentialId: "NA",
      skills: ["Java", "Project Development", "Healthcare Systems"],
      color: "text-neon-yellow",
      link: "https://drive.google.com/file/d/1v6Waeyjt_X5z1ankPmJ5ZI2gBQtTNTpd/view?usp=sharing"
    }
  ];

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    setTimeout(() => setCollectedCerts(certifications.map(c => c.id)), 500);
  }, []);

  const showCertDetails = (certId: number) => {
    setSelectedCert(certId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setModalOpen(false);
  };

  return (
    <section data-section="6" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-green neon-glow mb-4">
            COLLECTOR'S WALL
          </h2>
          <div className="score-counter mb-4">
            COLLECTED: {collectedCerts.length}/{certifications.length}
          </div>
          <p className="retro-font text-xl text-gray-300">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certification Showcase */}
        <div className="level-map mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const isCollected = collectedCerts.includes(cert.id);
              return (
                <div
                  key={cert.id}
                  className={`cert-item relative ${isCollected ? 'zoom-in' : 'opacity-70'}`}
                  data-cert={cert.id}
                >
                  {/* Medal/Certificate */}
                  <div
                    className={`medal cursor-pointer ${isCollected ? 'hover:scale-110' : ''}`}
                    onClick={() => showCertDetails(cert.id)}
                  >
                    {isCollected ? (
                      <Award className="w-8 h-8 text-black" />
                    ) : (
                      <Star className="w-8 h-8 text-gray-600" />
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div className="text-center mt-4">
                    <div className={`pixel-font text-sm ${cert.color} neon-glow mb-2`}>
                      {cert.name}
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      {cert.issuer}
                    </div>
                    <div className="flex items-center justify-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
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

        {/* Modal rendered at root, not inside grid */}
        {modalOpen && selectedCert !== null && (() => {
          const cert = certifications.find(c => c.id === selectedCert);
          if (!cert) return null;
          return (
            <div 
              className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
              onClick={e => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div 
                className="level-map max-w-2xl w-full max-h-[80vh] overflow-y-auto relative animate-pop-modal no-scrollbar"
                style={{
                  boxShadow: '0 8px 40px 8px rgba(0,255,143,0.25), 0 0 0 4px #00ff8f',
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
                }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`pixel-font text-2xl ${cert.color} neon-glow`}>
                    {cert.name}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-3xl font-bold px-3 py-1 hover:bg-gray-700 rounded absolute -top-2 -right-2 bg-transparent mr-2 mt-2"
                  >
                    ×
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="medal mx-auto mb-4 relative">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{cert.name}</h4>
                  <p className="text-neon-blue mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 text-sm mb-4 retro-font">
                    {cert.description}
                  </p>
                  <div className="text-gray-400 text-xs mb-2 bg-gray-800 p-2 rounded">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="pixel-font text-sm text-neon-yellow mb-3">
                    SKILLS GAINED:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 border border-neon-blue text-neon-blue px-3 py-1 rounded text-xs"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className="arcade-button w-full"
                  onClick={() => cert.link && cert.link !== '#' ? window.open(cert.link, '_blank') : alert('No certificate link available.')}
                >
                  <ExternalLink className="inline-block w-4 h-4 mr-2" />
                  VIEW CERTIFICATE
                </button>
              </div>
            </div>
          );
        })()}

        {/* Collection Progress */}
        <div className="text-center">
          <div className="progress-bar w-80 mx-auto mb-4">
            <div 
              className="progress-fill"
              style={{ width: `${(collectedCerts.length / certifications.length) * 100}%` }}
            />
          </div>
          <div className="pixel-font text-neon-green">
            COLLECTION PROGRESS: {Math.round((collectedCerts.length / certifications.length) * 100)}%
          </div>
        </div>
      </div>
    </section>
  );
};

// Add pop-out animation and hide scrollbar for modal
// Add this to your global CSS or arcade.css:
// .animate-pop-modal { animation: popModal 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
// @keyframes popModal { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
// .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
// .no-scrollbar::-webkit-scrollbar { display: none; }

export default CertificationsSection;