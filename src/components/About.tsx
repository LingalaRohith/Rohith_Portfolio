import { motion } from "framer-motion";
import React from "react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="space-y-4 flex-1">
            <p className="text-lg leading-relaxed">
            I’m a software engineer who builds end-to-end, production-style systems from responsive frontends to secure backend APIs, data modeling, and cloud deployments. I work mostly with Java/Spring Boot, modern web stacks, and applied ML systems, and I focus on clean architecture, reliability, and measurable performance improvements. </p>
            <p className="text-lg leading-relaxed">
            Some of my key projects include eCinema, a movie ticket booking platform with real-time seat selection, secure authentication, and optimized backend performance; Digital Library, a structured system for managing users and catalog workflows; and ML-focused work like FedPAC (personalized federated learning) and RAFREXP (interpretable rule extraction from Random Forests). I also built smaller applied CV projects like Age & Gender Detection using OpenCV DNN.  </p>
            <p className="text-lg leading-relaxed">
            I enjoy working across the stack designing REST APIs, integrating databases (SQL/NoSQL), setting up CI/CD, and writing code that’s easy to run, test, and extend. I’m continuously improving my projects with better documentation, reproducible setups, and cleaner deployments so recruiters and engineers can quickly understand the impact.  </p>
          </div>

          <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
