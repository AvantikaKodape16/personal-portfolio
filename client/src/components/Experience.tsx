import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightCircle } from "lucide-react";
import { experiences, education } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start group"
            >
              {/* Timeline Line */}
              <div className="absolute top-0 left-5 bottom-0 w-0.5 bg-primary-100 dark:bg-primary/30"></div>
              
              {/* Timeline Marker */}
              <div className="absolute w-10 h-10 bg-primary-100 dark:bg-primary/30 rounded-full flex items-center justify-center -left-0 z-10">
                <div className="w-6 h-6 bg-primary dark:bg-primary-400 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="pl-16 pb-12">
                <Card className="bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-900/50 transition-all duration-300 group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center mb-4">
                      <span className="text-primary dark:text-primary-400 font-medium">
                        {exp.company}
                      </span>
                      <span className="mx-2 text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {exp.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRightCircle className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}

          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16 mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start group"
            >
              {/* Timeline Line */}
              <div className="absolute top-0 left-5 bottom-0 w-0.5 bg-primary-100 dark:bg-primary/30"></div>
              
              {/* Timeline Marker */}
              <div className="absolute w-10 h-10 bg-primary-100 dark:bg-primary/30 rounded-full flex items-center justify-center -left-0 z-10">
                <div className="w-6 h-6 bg-primary dark:bg-primary-400 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="pl-16 pb-12">
                <Card className="bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-900/50 transition-all duration-300 group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex items-center mb-4">
                      <span className="text-primary dark:text-primary-400 font-medium">
                        {edu.field}
                      </span>
                      <span className="mx-2 text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {edu.graduation}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
