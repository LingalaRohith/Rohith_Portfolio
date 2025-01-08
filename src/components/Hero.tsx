import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm Sharan Konda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 mb-8"
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:translate-y-[-2px] transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:translate-y-[-2px] transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};