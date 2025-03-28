import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  icon: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  graduation: string;
}

export interface TechnicalSkillCategory {
  id: number;
  name: string;
  skills: string[];
}

export interface SoftSkill {
  id: number;
  name: string;
}

export const technicalSkills: TechnicalSkillCategory[] = [
  {
    id: 1,
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "C++"]
  },
  {
    id: 2,
    name: "Frameworks & Libraries",
    skills: ["Django", "Flask", "React", "Next.js"]
  },
  {
    id: 3,
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    id: 4,
    name: "API Development",
    skills: ["RESTful APIs", "SOAP APIs"]
  },
  {
    id: 5,
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes"]
  },
  {
    id: 6,
    name: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    id: 7,
    name: "Data Analysis & Processing",
    skills: ["Pandas", "NumPy"]
  },
  {
    id: 8,
    name: "Testing & Debugging",
    skills: ["Postman", "PyTest"]
  },
  {
    id: 9,
    name: "Tools & Technologies",
    skills: ["GraphQL", "Redis", "Celery"]
  },
  {
    id: 10,
    name: "Front-End",
    skills: ["HTML", "CSS", "TailwindCSS"]
  }
];

export const softSkills: SoftSkill[] = [
  { id: 1, name: "Problem Solving and Critical Thinking" },
  { id: 2, name: "Effective Communication" },
  { id: 3, name: "Collaboration and Teamwork" },
  { id: 4, name: "Adaptability and Quick Learning" },
  { id: 5, name: "Time Management and Multitasking" },
  { id: 6, name: "Analytical Thinking" },
  { id: 7, name: "Attention to Detail" },
  { id: 8, name: "Leadership and Mentoring Skills" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Login API",
    description: "Developed a secure and efficient login API to manage user authentication and authorization processes. This project focuses on implementing robust security measures to protect user data and ensure seamless access control.",
    technologies: ["Python", "Django REST Framework"],
    githubLink: "https://github.com/AvantikaKodape16/login_Api",
    icon: "lock"
  },
  {
    id: 2,
    title: "TCP_UDP Chatbot",
    description: "Developed a chatbot application using TCP and UDP protocols to facilitate real-time communication. This project showcases the implementation of client-server architecture, providing a seamless chatting experience.",
    technologies: ["Python", "Socket Programming (TCP/UDP)"],
    githubLink: "https://github.com/AvantikaKodape16/TCP_UDP_CHATBOT",
    icon: "message-square"
  },
  {
    id: 3,
    title: "Text Summarization",
    description: "Developed a text summarization tool that uses natural language processing (NLP) techniques to generate concise summaries of lengthy texts. This project focuses on extracting essential information while maintaining the context and meaning of the original content.",
    technologies: ["Python", "Natural Language Processing (NLP)", "NLTK", "Gensim"],
    githubLink: "https://github.com/AvantikaKodape16/Text_summarization",
    icon: "file-text"
  },
  {
    id: 4,
    title: "Species Extinction Prediction",
    description: "Developed a machine learning-based project to predict the risk of species extinction using various ecological and environmental factors. This project aims to provide insights into species conservation by analyzing historical data and identifying key factors contributing to extinction.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    githubLink: "https://github.com/AvantikaKodape16/Species_Extinction_Python_project",
    icon: "leaf"
  },
  {
    id: 5,
    title: "PODTALK",
    description: "Developed a podcast streaming platform that allows users to browse, listen, and manage podcasts. The application provides an interactive user experience with personalized podcast recommendations.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    githubLink: "https://github.com/AvantikaKodape16/PODTALK",
    icon: "mic"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "GrayQuest",
    duration: "March 3, 2024 - May 4, 2024",
    responsibilities: [
      "Developed and optimized RESTful APIs using Python and Django.",
      "Implemented secure authentication systems with JWT and OAuth2.",
      "Enhanced database performance using PostgreSQL.",
      "Integrated third-party services for seamless application functionality.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
      "Gained hands-on experience with AWS for cloud deployment and management."
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "Indian Institute of Information Technology (IIIT) Nagpur",
    graduation: "Graduated in 2024"
  }
];
