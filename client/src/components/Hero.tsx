import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import profileImage from "@assets/IMG20220422191742 (3).jpg";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-primary font-semibold mb-2"
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="font-sans text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            >
              Avantika Kodape
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl lg:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6"
            >
              Backend Developer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base text-slate-600 dark:text-slate-300 mb-8 max-w-lg"
            >
              A passionate backend developer specializing in building scalable and efficient digital solutions with Python, Django, and cloud technologies.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={cn(
                  "border-slate-300 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium",
                  "dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100"
                )}
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center mt-8 space-x-4"
            >
              <a
                href="https://github.com/AvantikaKodape16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/avantika-kodape-b01051204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:avantikakodape16@gmail.com"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <MdMail className="text-2xl" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary shadow-lg overflow-hidden">
              <img 
                src={profileImage} 
                alt="Avantika Kodape" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
