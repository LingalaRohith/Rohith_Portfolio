// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "eCinema",
//     description: "A beautiful web application built with React and TypeScript",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//     link: "#",
//   },
//   {
//     title: "Digital Library",
//     description: "Mobile-first e-commerce platform with modern UI/UX",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     link: "#",
//   },
//   {
//     title: "Age and Gender Prediction",
//     description: "Real-time collaboration tool for remote teams",
//     image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
//     link: "#",
//   },
//   {
//     title: "Mobile Application for College Bus Tracking ",
//     description: "Real-time collaboration tool for remote teams",
//     image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
//     link: "#",
//   },
//   {
//     title: "SecureFile",
//     description: "Real-time collaboration tool for remote teams",
//     image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
//     link: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-4 bg-secondary">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
//           <div className="w-20 h-1 bg-accent mx-auto"></div>
//         </motion.div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative overflow-hidden rounded-xl"
//             >
//               <div className="aspect-video overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <div className="text-center p-4">
//                   <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-white/80 mb-4">{project.description}</p>
//                   <a
//                     href={project.link}
//                     className="inline-block bg-white text-primary px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
//                   >
//                     View Project
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
        title: "eCinema",
        description: "Developed a movie ticket booking platform using React, MySQL, and Spring Boot, offering features like real-time seat selection, secure payments, and personalized recommendations. The responsive frontend built with React ensures seamless navigation, while Spring Boot provides scalable APIs and MySQL manages data storage. The system optimizes user experience, reducing server response time by 20%.",
        image: "./ecinema1.jpg",
        link: "https://github.com/LingalaRohith/Movie_frontend",
      },
      {
        title: "Digital Library",
        description: "Built a digital library system with Angular, PostgreSQL, and Spring Boot, featuring book search, user authentication, and borrowing/return management. The dynamic frontend in Angular ensures a smooth user experience, while PostgreSQL handles large datasets efficiently. An admin panel supports book record management, offering scalability and performance.",
        image: "digital.png",
        link: "https://github.com/LingalaRohith/DigitalLibrary",
      },
      {
        title: "FyndMe", 
description: "Built a dynamic portfolio viewer with Next.js, Tailwind CSS, and Zustand for state management. Features include a paginated table displaying user portfolios, verification badges with dynamic styles, and a clean, scrollable dashboard layout. Backend API was tested with Postman to ensure proper data fetching. Modular and developer-friendly architecture allows easy extension for filters, sorting, or server-side pagination.",
image: "./final-ui.png",
link: "https://github.com/LingalaRohith/FyndMe",
      },
      {
      title: "Natural Language Patient Query System",
description: "Developed a system that allows users to query patient datasets using natural language queries, such as 'Show me all diabetic patients over 50'. The project parses queries with spaCy NLP, maps them to a simulated FHIR-compliant API using FastAPI, and displays structured results in a Next.js frontend with interactive tables and charts. Features include live search, pie chart visualization of conditions, age and condition filters, and export options (CSV/JSON). Fully Dockerized for easy deployment.",
image: "./FHIR.png",
link: "https://github.com/LingalaRohith/AI_ON_FHIR",
      },
      {
        title: "SecureFile",
        description: "Developed a secure file management system using Rust, AES Encryption, and MySQL to ensure encrypted file storage and controlled access. Role-based permissions and time-restricted retrieval enhance security, while a CLI interface streamlines functionality. The system ensures data safety with robust encryption and efficient database operations.",
        image: "secure1.jpeg",
        link: "https://github.com/LingalaRohith/SecureFile",
      },
      {
        title: "Age and Gender Prediction",
        description: "Designed a machine learning model using TensorFlow, CNN, and Python to predict age and gender from facial images. The system leverages a custom CNN for feature extraction and classification, achieving 85% accuracy. It showcases expertise in deep learning, image processing, and real-world data applications.",
        image: "agegender.jpg",
        link: "https://colab.research.google.com/drive/1IxtbkINjIshiC59bqftB7qMGyDXCr0Iz?usp=sharing",
      },
      {
        title: "Bus Tracking ",
        description: "Created an Android app with Android Studio, Java, and Firebase for real-time bus tracking. The app integrates Google Maps API for location updates and Firebase Realtime Database for synchronization. Features include user authentication, notifications, and an intuitive interface to reduce waiting times.",
        image: "bus.jpeg",
        link: "https://github.com/LingalaRohith/College-BusTracking",
      },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                     <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isReversed }) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      } bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      style={{ height: "280px" }}
    >
      {/* Image with Hover Effect */}
      <div className="relative w-full md:w-1/2">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
        
        {/* Hover Button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            View Code
          </a>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6 md:w-1/2">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
      </div>
    </motion.div>
  );
};

