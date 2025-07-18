import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sagarchavan142003@gmail.coms",
      link: "mailto:your.sagarchavan142003@gmail.com",
      color: "text-neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7249028640",
      link: "tel:+917249028640",
      color: "text-neon-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      link: "#",
      color: "text-neon-magenta"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sagarc123",
      link: "https://github.com/sagarc123",
      color: "text-neon-yellow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sagar-chavan-a6937b194",
      link: "https://www.linkedin.com/in/sagar-chavan-a6937b194/",
      color: "text-neon-orange"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  const resetForm = () => {
    setShowThankYou(false);
  };

  return (
    <section data-section="8" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-orange neon-glow mb-4">
            {showThankYou ? 'THANKS FOR PLAYING!' : 'CONTACT MISSION'}
          </h2>
          <p className="retro-font text-xl text-gray-300">
            {showThankYou 
              ? 'Message sent successfully! Let\'s connect!' 
              : 'Ready to connect? Let\'s start the conversation!'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="level-map">
            <h3 className="pixel-font text-2xl text-neon-blue neon-glow mb-8 text-center">
              CONTACT POWER-UPS
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`power-up block p-4 neon-box hover:pulse-glow transition-all duration-300 ${contact.color}`}
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className="w-8 h-8" />
                      <div>
                        <div className="pixel-font text-sm mb-1">{contact.label}</div>
                        <div className="text-white retro-font">{contact.value}</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Message Form */}
          <div className="level-map">
            <h3 className="pixel-font text-2xl text-neon-green neon-glow mb-8 text-center">
              SEND MESSAGE
            </h3>
            
            {!showThankYou ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block pixel-font text-sm text-neon-yellow mb-2">
                    PLAYER NAME
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-800 border-2 border-neon-blue rounded px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors retro-font"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block pixel-font text-sm text-neon-yellow mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-800 border-2 border-neon-blue rounded px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors retro-font"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block pixel-font text-sm text-neon-yellow mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-gray-800 border-2 border-neon-blue rounded px-4 py-3 text-white focus:border-neon-green focus:outline-none transition-colors retro-font resize-none"
                    placeholder="Type your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="arcade-button w-full bg-gradient-to-r from-green-600 to-green-800 border-neon-green text-neon-green hover:from-green-500 hover:to-green-700"
                >
                  <Send className="inline-block w-4 h-4 mr-2" />
                  SEND MESSAGE
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="text-6xl">🎉</div>
                <div className="pixel-font text-lg text-neon-green neon-glow">
                  MESSAGE SENT SUCCESSFULLY!
                </div>
                <div className="text-gray-300 retro-font">
                  Thanks for checking out my portfolio! I'll get back to you soon.
                </div>
                <button
                  onClick={resetForm}
                  className="arcade-button"
                >
                  <Send className="inline-block w-4 h-4 mr-2" />
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;