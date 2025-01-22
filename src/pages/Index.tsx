import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certification";
import React from "react";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </motion.div>
    </div>
  );
};

export default Index;