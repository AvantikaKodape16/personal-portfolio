import { motion } from "framer-motion";
import { 
  Lock, 
  FileText, 
  MessageSquare, 
  Leaf, 
  Mic, 
  ExternalLink 
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { projects } from "@/lib/utils";

const getIcon = (name: string) => {
  switch (name) {
    case "lock":
      return <Lock className="h-12 w-12" />;
    case "file-text":
      return <FileText className="h-12 w-12" />;
    case "message-square":
      return <MessageSquare className="h-12 w-12" />;
    case "leaf":
      return <Leaf className="h-12 w-12" />;
    case "mic":
      return <Mic className="h-12 w-12" />;
    default:
      return <FileText className="h-12 w-12" />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-slate-700 shadow-md dark:shadow-slate-900/50 overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-primary-100 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-primary">
                  {getIcon(project.icon)}
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                  >
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
