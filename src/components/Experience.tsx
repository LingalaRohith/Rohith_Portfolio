// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Project One",
//     description: "A beautiful web application built with React and TypeScript",
//     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//     link: "#",
//   },
//   {
//     title: "Project Two",
//     description: "Mobile-first e-commerce platform with modern UI/UX",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     link: "#",
//   },
//   {
//     title: "Project Three",
//     description: "Real-time collaboration tool for remote teams",
//     image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
//     link: "#",
//   },
// ];

// export const Experience = () => {
//   return (
//     <section id="experience" className="py-20 px-4 bg-secondary">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">Experience</h2>
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

const experiences = [
  {
    title: "Graduate Assistant",
    company: "University of Georgia",
    date: "Jan 2024 - May 2025",
    description: [
      "Developed a scalable full-stack eCinema Booking System (Spring Boot, MySQL, React) handling 1000+ daily transactions.",
    "Built a Digital Library (Angular + Spring Boot) with RBAC, improving task efficiency by 30%.",
    "Designed and tested 30+ REST APIs with Swagger, JUnit, Mockito (90%+ coverage).",
    "Provided hands-on help with application design, implementation, and debugging.",
    "Automated deployments via GitHub Actions + Jenkins, reducing release time by 40%.",
    "Conducted lectures on Spring Security, API design; mentored 160+ students.",
    "Honored with Outstanding TA Award for leadership and student mentorship."],
    skills: ["Spring Boot", "MySQL", "React", "Swagger", "JUnit", "OAuth2", "CI/CD", "REST APIs"],
    logo: "./uga.png",
  },
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    date: "Nov 2021 - Jul 2023",
    description:[
        "Engineered 20+ Spring Boot microservices with OAuth2 and RBAC for enterprise clients.",
        "Streamlined Oracle and MongoDB integrations with Redis caching (40% performance boost).",
        "Containerized apps using Docker & Kubernetes, enabling 50% faster deployments.",
        "Implemented Kafka-based event-driven systems handling 10K+ events/hour.",
        "Implemented custom enhancements, including reports, enhancements, and function modules to meet business requirements.",
        "Achieved 90%+ test coverage via JUnit & Postman; ensured high code quality.",
        "Collaborated with functional teams to troubleshoot and resolve technical issues during the migration process.",
        "Conducted unit testing and debugging to ensure seamless functionality of developed components.",
        "Documented development processes, technical specifications, and migration steps for future reference. "
    ],
    skills: ["Spring Boot", "Hibernate", "Oracle", "MongoDB", "Redis", "Kafka", "Kubernetes", "Docker", "CI/CD"],
    logo: "./tcs.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Phenompeople",
    date: "Jul 2021 - Nov 2021",
    description: [
        "Developed RESTful APIs using Spring Boot to support application features and enhance functionality.",
       "Designed and implemented back-end solutions while working with MongoDB for efficient data storage and management.",
        "Integrated SOAP architecture into the application for communication with other services.",
        "Collaborated with the front-end team to ensure seamless integration of APIs with the UI.",
        "Assisted in deploying back-end services to production using Spinnaker for continuous delivery and Jenkins for automated build and deployment.",
        "Wrote unit and integration tests to ensure the reliability of APIs and services.",
        // "Actively participated in code reviews and pair programming sessions to maintain high-quality code standards.",
        //  "Optimized back-end performance and ensured security compliance for deployed services.",
        "Monitored production systems, identifying and resolving issues in real-time to ensure uptime and reliability."
    ],
    skills: ["Spring Boot", "MongoDB", "RESTful APIs", "SOAP Architecture","Jenkins & Spinnaker (CI/CD)","Testing & Debugging"],
    logo: "./phenom.png",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative border-l-4 border-accent pl-8 md:pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 relative ${
                index % 1 === 0 ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0"
              }`}
            >
                {/* Company Logo */}
              <div className="absolute -left-[135px] top-0 hidden md:block">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-20 h-20 rounded-full border-2 border-gray-300 bg-white shadow-md"
                />
              </div>
              {/* Year and Month Marker */}
              <div className="absolute -left-12 -top-2 text-gray-400 font-bold text-sm md:block hidden">
                {/* {console.log(exp.date.split(" "))} */}
                {exp.date.split(" ")[0]} {exp.date.split(" ")[1]} 
              </div>

              {/* Circle Marker
              <div className="absolute -left-[22px] top-0 bg-accent w-4 h-4 rounded-full"></div> */}

             {/* Experience Content */}
             <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.date}</p>
                <div className="mt-2 text-gray-700">
                  {/* Check if the description is an array */}
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p> // If not an array, just display the string
                  )}
                </div>

                {/* Skills Gained */}
                <div className="mt-4">
                  <h4 className="text-gray-600 font-semibold">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
