import { Github, Linkedin, Mail } from 'lucide-react';
import { CppIcon, PythonIcon, JavaScriptIcon, JavaIcon, MySqlIcon } from '@/components/shared/language-icons';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'resume', title: 'Resume' },
  { id: 'contact', title: 'Contact' },
];

export const skills = [
  { name: 'C++', level: 90, Icon: CppIcon },
  { name: 'Python', level: 85, Icon: PythonIcon },
  { name: 'MySQL', level: 80, Icon: MySqlIcon },
  { name: 'Java', level: 75, Icon: JavaIcon },
];

export const projects = [
  {
    title: 'Recipe Recommendation System',
    description: 'An AI-based system that suggests recipes based on user preferences and detects ingredients using YOLO.',
    tags: ['Python', 'NLP', 'YOLO', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: 'https://github.com/sagar-chavan-12/recipe-recommendation-system',
  },
  {
    title: 'Quiz Application',
    description: 'A web platform for teachers to create quizzes and students to take them, with leaderboard and chat features.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    liveUrl: '#',
    githubUrl: 'https://github.com/sagarc123/quiz_app',
  },
  {
    title: 'Doctor Appointment System',
    description: 'A web-based system allowing patients to book appointments and chat or video call with doctors in real time.',
    tags: ['Java', 'Servlets', 'JSP', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/sagarc123/Doctor-Appointment-Application',
  },
  {
    title: 'Sales Dashboard',
    description: 'A data visualization dashboard for sales trends using interactive charts to display revenue, orders, and region-wise sales.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Tableau'],
    liveUrl: '#',
    githubUrl: 'https://github.com/sagarc123/Sales-Data-Dashboard',
  },
];


export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sagarc123', Icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sagar-chavan-a6937b194/', Icon: Linkedin },
  { name: 'Email', url: 'mailto:sagarchavan142003@gmail.com', Icon: Mail },
];
