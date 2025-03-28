import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a href="#hero" className="inline-block text-2xl font-bold text-white tracking-tight mb-6">
            Avantika<span className="text-primary">.</span>
          </a>
          <p className="mb-6">Backend Developer focused on building efficient and scalable solutions.</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://github.com/AvantikaKodape16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/avantika-kodape-b01051204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="mailto:avantikakodape16@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <MdMail className="text-xl" />
            </a>
          </div>
          <div className="text-sm">
            &copy; {currentYear} Avantika Kodape. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
