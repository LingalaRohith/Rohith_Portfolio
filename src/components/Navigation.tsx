import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
  <img src="./logo.jpg" alt="Rohith Lingala Logo" className="h-10 w-10" />
  <span className="sr-only">Rohith Lingala</span>
</a>
          <div className="hidden md:flex space-x-8">
            {/* <a href="#about" className="hover:text-accent transition-colors">
              About
            </a> */}
             <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Certifications
            </Link>
            <Link
              to="achievements"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Achievements
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};