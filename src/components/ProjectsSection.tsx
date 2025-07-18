import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Database, Smartphone } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Loop: Team Workspace",
      type: "Web Application",
      description: "Created a responsive team collaboration web app with real-time chat, file sharing, calendars, and personalized dashboards.",
      features: [
        "Enabled team and direct messaging with emoji support and real-time notifications",
        "Integrated file sharing with in-app previews and Firebase Storage.",
        "Implemented team calendars with event reminders and dashboard views.",
        "Secured user authentication and profile management using Firebase Auth."
      ],
      techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
      github: "https://github.com/sagarc123/loop-workspace",
      demo: "https://loop-workspace.vercel.app/login",
      icon: Code,
      color: "text-neon-blue",
      status: "Beta Version"
    },
    {
      id: 2,
      title: "Sales Data Dashboard",
      type: "Streamlit Dashboard",
      description: "Built an interactive sales dashboard for supermarket data analysis with real-time filters and dynamic visualizations.",
      features: [
        "Enabled real-time filtering by city, customer type, gender, and date range.",
        "Displayed KPIs such as Total Sales, Average Rating, and Avg. Sales per Transaction.",
        "Integrated interactive charts including donut, bubble, and area plots using Plotly.",
        "Added CSV export functionality for filtered data using Openpyxl."
      ],
      techStack: ["Python", "Pandas", "Plotly", "Streamlit","Openpyxl"],
      github: "https://github.com/sagarc123/Sales-Data-Dashboard",
      demo: "https://sales-data-dashboard-t92iuysbqy4xxdjsleegje.streamlit.app/",
      icon: Database,
      color: "text-neon-green",
      status: "Completed"
    },
    {
      id: 3,
      title: "Doctor Appointment System",
      type: "Mobile App",
      description: "Created a mobile doctor appointment system with real-time scheduling, communication, and notifications for accessible healthcare.",
      features: [
        "Enabled real-time appointment booking and scheduling for patients.",
        "Integrated secure in-app chat and video calling for doctor-patient communication.",
        "Implemented timely notifications to ensure smooth user interactions.",
        "Designed a responsive and reliable mobile interface for easy healthcare access."
      ],
      techStack: ["Android Studio", "Firebase", "XML", "Java"],
      github: "https://github.com/sagarc123/Doctor-Appointment-Application",
      demo: "https://DoctorAppointmentSystem.demo.com",
      icon: Smartphone,
      color: "text-neon-magenta",
      status: "Completed"
    }
  ];

  const openProject = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section data-section="5" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-4xl text-neon-yellow neon-glow mb-4">
            PROJECT ARCADE
          </h2>
          <p className="retro-font text-xl text-gray-300">
            Choose your game to play
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            const isSelected = selectedProject === project.id;
            
            return (
              <div key={project.id} className="relative">
                {/* Arcade Cabinet */}
                <div
                  className={`cabinet cursor-pointer transform transition-all duration-300 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                  onClick={() => openProject(project.id)}
                >
                  {/* Cabinet Screen */}
                  <div className="bg-black rounded-lg p-6 mb-4 relative overflow-hidden">
                    <div className="crt-effect absolute inset-0" />
                    <div className="relative z-10">
                      <div className={`flex items-center justify-center mb-4 ${project.color}`}>
                        <Icon className="w-12 h-12" />
                      </div>
                      <div className="text-center">
                        <div className={`pixel-font text-lg ${project.color} neon-glow mb-2`}>
                          {project.title}
                        </div>
                        <div className="text-gray-400 text-sm mb-4">
                          {project.type}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded text-xs ${
                          project.status === 'Completed' 
                            ? 'bg-green-800 text-neon-green' 
                            : 'bg-yellow-800 text-neon-yellow'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cabinet Controls */}
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-red-400" />
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-blue-400" />
                    <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-green-400" />
                  </div>

                  {/* Game Info Button */}
                  <div className="text-center">
                    <button className="arcade-button">
                      <Play className="inline-block w-4 h-4 mr-2" />
                      {isSelected ? 'CLOSE' : 'GAME INFO'}
                    </button>
                  </div>
                </div>

                {/* Project Details Modal */}
                {isSelected && (
                  <div 
                    className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setSelectedProject(null);
                      }
                    }}
                  >
                    <div className="level-map max-w-2xl w-full max-h-[80vh] overflow-y-auto relative no-scrollbar" onClick={e => e.stopPropagation()}>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className={`pixel-font text-2xl ${project.color} neon-glow`}>
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white text-3xl font-bold px-3 py-1 hover:bg-gray-700 rounded absolute -top-2 -right-2 bg-transparent mr-2 mt-2"
                        >
                          ×
                        </button>
                      </div>

                      <p className="text-gray-300 mb-6 retro-font">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="pixel-font text-sm text-neon-yellow mb-3">
                          FEATURES:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-start">
                              <span className="text-neon-green mr-2">▶</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="pixel-font text-sm text-neon-blue mb-3">
                          TECH STACK:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <div
                              key={index}
                              className="power-up bg-gray-800 border border-neon-blue text-neon-blue px-3 py-1 rounded text-sm"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="arcade-button flex-1 text-center"
                          onClick={e => e.stopPropagation()}
                        >
                          <Github className="inline-block w-4 h-4 mr-2" />
                          VIEW CODE
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="arcade-button flex-1 text-center"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="inline-block w-4 h-4 mr-2" />
                          LIVE DEMO
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;