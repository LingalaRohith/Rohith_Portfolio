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

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "University of Georgia",
    date: "Jan 2024 - Present",
    description: [
      "Guided and evaluated 160+ students in the development of a full-stack movie booking application.",
    "Assisted students with front-end and back-end development using various technologies.",
    "Delivered lectures and conducted office hours to support student learning and project development.",
    "Provided hands-on help with application design, implementation, and debugging.",
    "Graded assignments and ensured the adherence to software engineering best practices.",
    "Fostered a collaborative learning environment and addressed student queries on coding challenges.",
    "Helped students integrate key concepts of software engineering in practical, real-world applications."],
    skills: ["Full-Stack Development", "Teaching and Mentoring", "Project Management","Debugging"],
    logo: "./uga.png",
  },
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    date: "Nov 2021 - Jul 2023",
    description:[
        "Worked on SAP ECC to S/4HANA conversion, ensuring smooth transition and optimization of business processes.",
        "Developed Core Data Services (CDS) Views to support analytical and transactional applications in SAP Fiori.",
        "Created and optimized OData Services for seamless integration between SAP back-end and Fiori applications.",
        "Assisted in data migration, transforming and loading legacy data into S/4HANA while ensuring data integrity and consistency.",
        "Implemented custom ABAP developments, including reports, enhancements, and function modules to meet business requirements.",
        "Optimized database queries and ABAP programs to improve system performance in the S/4HANA environment.",
        "Collaborated with functional teams to troubleshoot and resolve technical issues during the migration process.",
        "Conducted unit testing and debugging to ensure seamless functionality of developed components.",
        "Documented development processes, technical specifications, and migration steps for future reference."
    ],
    skills: ["SAP ABAP", "S/4HANA Migration", "CDS Views","Fiori", "OData Services", "Data Migration", "Technical Documentation"],
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
