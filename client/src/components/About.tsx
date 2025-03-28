import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-200 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I'm Avantika Kodape, a highly motivated backend developer and problem solver with a passion for building scalable and efficient digital solutions. Holding a Bachelor's Degree in Computer Science from IIIT Nagpur, I have developed a solid foundation in both front-end and back-end development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Currently, I love working with technologies like Python, Django, FastAPI, and PostgreSQL, along with cloud platforms like AWS. My expertise also includes implementing authentication systems, asynchronous task processing, and working with both SQL and NoSQL databases.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My technical expertise includes working with modern frameworks and technologies to deliver scalable and efficient solutions. I am committed to staying updated with the latest industry trends and continuously enhancing my skills to build products that provide real value.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            In addition to my technical abilities, I am an excellent communicator and team player. I thrive in collaborative environments where I can contribute ideas, learn from others, and work towards shared goals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Driven by curiosity and a passion for problem-solving, I am excited to take on new challenges and contribute meaningfully to innovative projects.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
