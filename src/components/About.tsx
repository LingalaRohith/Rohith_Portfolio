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
            I am a passionate Software Engineer with expertise in full-stack development, cloud computing, and backend engineering. Currently pursuing my M.S. in Computer and Information Science at the University of Georgia, I have a strong foundation in data structures, algorithms, and secure programming.
            </p>
            <p className="text-lg leading-relaxed">
            As a Graduate Assistant, I mentored 160+ students in building a full-stack movie booking app. Previously, at TCS, I contributed to SAP ECC to S/4HANA migration, developing CDS Views and OData services for Fiori apps. As a Software Engineer Intern at Phenompeople, I built RESTful APIs with Spring Boot and MongoDB, deploying via Spinnaker and Jenkins. 
              </p>
            <p className="text-lg leading-relaxed">
            Proficient in Java, Python, Rust, SAP ABAP, React.js, Angular.js, Node.js, and Fiori UI5, I also have experience with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. I thrive in Agile environments, solving complex problems, and designing scalable architectures to drive innovation.  
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
