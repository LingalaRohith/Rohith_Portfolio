// import { motion } from "framer-motion";

// export const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-secondary">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
//         >
//           Hi, I'm Rohith Lingala
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-lg md:text-xl text-foreground/80 mb-8"
//         >
//           Full Stack Developer & UI/UX Designer
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="flex justify-center gap-4"
//         >
//           <a
//             href="#projects"
//             className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:translate-y-[-2px] transition-all duration-200"
//           >
//             View My Work
//           </a>
//           <a
//             href="#contact"
//             className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:translate-y-[-2px] transition-all duration-200"
//           >
//             Contact Me
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaDownload, FaTimes } from "react-icons/fa";
import { useState } from "react";
import React from "react";
export const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeLink = "./portfolio_resume.pdf";
  return (
    <section className="bg-secondary min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-left">
          <p className="text-xl leading-relaxed">
            Hello there! I am,
          </p>
          <h1 className="text-5xl md:text-6xl font-bold">
            Rohith Lingala
          </h1>
          <p className="text-xl leading-relaxed">
            In the world of technology, versatility is the key. As a full-stack 
            developer, I thrive on bridging the gap between front-end elegance 
            and back-end functionality, ensuring seamless user experiences.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/LingalaRohith?tab=repositories" className="text-[#3D2013] hover:text-[#CC583F] text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rohithlingala/" className="text-[#3D2013] hover:text-[#CC583F] text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/__its__me__rohith__/" className="text-[#3D2013] hover:text-[#CC583F] text-2xl">
              <FaInstagram />
            </a>
            <a href="mailto:rohithlingala11@gmail.com" className="text-[#3D2013] hover:text-[#CC583F] text-2xl">
              <FaEnvelope />
            </a>
            <a href="tel:+17066158730" className="text-[#3D2013] hover:text-[#CC583F] text-2xl">
              <FaPhone />
            </a>
          </div>

          {/* Resume Button */}
          <button className="mt-4 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-[#CC583F]"
          onClick={() => setShowResume(true)}>
            Resume
          </button>
           {showResume && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl transition-transform transform scale-100">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Rohith's Resume</h2>
              <div className="flex items-center space-x-4">
                <a href={resumeLink} download className="text-gray-700 hover:text-gray-900">
                  <FaDownload className="w-6 h-6" />
                </a>
                <button onClick={() => setShowResume(false)} className="text-gray-700 hover:text-gray-900">
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <iframe 
                src={resumeLink} 
                className="w-full h-[500px] border rounded-md bg-secondary"
                title="Resume"
              ></iframe>
            </div>
          </div>
        </div>
      )}
         
        </div>

        {/* <button 
            className="mt-4 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-[#CC583F] transition"
            onClick={() => setShowResume(true)}
          >
            Resume
          </button>
        </div>
      </div>

      {showResume && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl transition-transform transform scale-100">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Rohith's Resume</h2>
              <div className="flex items-center space-x-4">
                <a href={resumeLink} download className="text-gray-700 hover:text-gray-900">
                  <FaDownload className="w-6 h-6" />
                </a>
                <button onClick={() => setShowResume(false)} className="text-gray-700 hover:text-gray-900">
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <iframe 
                src={resumeLink} 
                className="w-full h-[500px] border rounded-md bg-secondary"
                title="Resume"
              ></iframe>
            </div>
          </div>
        </div>
      )} */}

        {/* Right Section - Illustration */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src="./dev1.png" alt="Developer Illustration" 
          className="w-[600px] object-contain bg-[#f8f9fa]" // Ensuring Background Match
          style={{ mixBlendMode: "multiply" }} // Blends Image into Background
          />
        </div>
      </div>
    </section>
  );
}
