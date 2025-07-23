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

        {/* Responsive Flex Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          {/* Text Content */}
          <div className="space-y-4 flex-1">
            <p className="text-lg leading-relaxed">
            I’m a results-driven Software Engineer with proven experience in building scalable Java full-stack applications, designing secure RESTful APIs, and deploying cloud-native solutions. With a track record of delivering high-impact enterprise systems using Java, Spring Boot, React, Angular, MongoDB, and MySQL, I specialize in end-to-end development from UI design to backend architecture.
            </p>
            <p className="text-lg leading-relaxed">
            I’ve led backend development for complex systems like an eCinema Booking Platform and Digital Library, implementing OAuth2, JWT, Kafka, Redis, and CI/CD pipelines using Jenkins, Docker, and Kubernetes. My experience includes mentoring 160+ students, architecting microservices, optimizing SQL/NoSQL data flows, and integrating ElasticSearch for real-time search capabilities. 
              </p>
            <p className="text-lg leading-relaxed">
            With hands-on expertise in AWS, Azure, and DevOps practices, I thrive in agile environments focused on clean code, modular design patterns, and performance optimization—driving measurable outcomes in every project I contribute to.  
              </p>
          </div>

          {/* Profile Image */}
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
