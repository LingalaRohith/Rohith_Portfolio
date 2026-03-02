import { motion } from "framer-motion";
import { title } from "process";
import React from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "HangerLife",
    date: "Jun 2025 - Present",
    description: [
      "Built backend services in Golang on AWS to power analytics dashboards, enabling user insights, activity tracking, feature performance analysis, and custom report generation.",
      "Designed and optimized MongoDB data models and aggregation pipelines to process high-volume time-series metrics, improving query performance and dashboard responsiveness.",
      "Developed secure RESTful APIs in Golang to deliver real-time and historical analytics to multiple platform views for up-to-date stakeholder reporting.",
      "Implemented data-driven frontend dashboards using Next.js and TypeScript with interactive visualizations for platform health, usage trends, and KPI monitoring."
    ],
    skills: ["Go", "AWS", "MongoDB", "REST APIs", "Next.js", "TypeScript", "Analytics Dashboards"],
    logo: "./hangerlife.png"
  },
  {
    title: "Assistant Software Engineer",
    company: "University of Georgia",
    date: "Jan 2024 - May 2025",
    description: [
      "Developed and deployed scalable full-stack applications using React, TypeScript, Spring Boot, and MySQL, including a high-traffic eCinema Booking System with JWT/OAuth2 authentication and CI/CD pipelines, improving response time and supporting thousands of concurrent users.",
      "Developed and integrated an AI-powered patient query system using data processing technologies and NLP models exposed via API, enabling natural-language search of patient records in a Next.js application and improving data retrieval speed and accessibility.",
      "Created and documented 30+ RESTful APIs using Swagger, integrated JUnit and Mockito test suites (90%+ coverage), and conducted performance/scalability testing; established CI/CD pipelines with GitHub Actions and Jenkins to reduce manual deployment time.",
      "Led code reviews and mentored 160+ students, delivering lectures on Spring Security, OAuth2, and API design; recognized with the Outstanding Teaching Assistant award."
    ],
    skills: ["Spring Boot", "React", "TypeScript", "MySQL", "Swagger", "JUnit", "Mockito", "OAuth2", "CI/CD", "GitHub Actions", "Jenkins", "Next.js"],
    logo: "./uga.png"
  },
  {
    title: "Software Engineer",
    company: "TCS Inc.",
    date: "Nov 2021 - Jul 2023",
    description: [
      "Developed 20+ Python, Java, and Go microservices using Spring Boot and Hibernate, integrating OAuth2 authentication to improve system reliability and support high-throughput backend operations.",
      "Built and managed AWS infrastructure (EC2, RDS, S3) using Terraform for scalable deployments; integrated Redis caching, implemented MongoDB/Oracle replication for data consistency, and optimized queries to boost read performance by 40%.",
      "Developed CI/CD pipelines with Jenkins and Docker to reduce release cycles by 50%; built event-driven systems using Apache Kafka and implemented structured logging/monitoring with Kibana and CloudWatch.",
      "Participated in Agile ceremonies (daily stand-ups, sprint planning) and collaborated with cross-regional teams to improve delivery velocity."
    ],
    skills: ["Spring Boot", "Hibernate", "AWS", "Terraform", "Oracle", "MongoDB", "Redis", "Kafka", "Docker", "Jenkins", "CI/CD", "Kibana", "CloudWatch"],
    logo: "./tcs.png"
  },
  {
    title: "Software Engineer Intern",
    company: "Phenompeople",
    date: "Jul 2021 - Nov 2021",
    description: [
      "Developed RESTful APIs using Spring Boot for real-time data streaming, improving analytics workflows and enabling 15% faster report generation.",
      "Integrated MongoDB with Spring Boot APIs and used Elasticsearch for advanced querying and full-text search, increasing application completion rates by 30% through improved responsiveness.",
      "Configured Jenkins jobs to automatically trigger Spinnaker pipelines, reducing deployment errors by 50% and improving release frequency.",
      "Wrote and maintained unit and integration tests using JUnit and Mockito, increasing coverage and contributing to a 35% drop in post-deployment bugs."
    ],
    skills: ["Spring Boot", "MongoDB", "Elasticsearch", "REST APIs", "Jenkins", "Spinnaker", "JUnit", "Mockito"],
    logo: "./phenom.png"
  }
];


export const Experience = () => {
  return (
    console.log("testing"),
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
              <div className="absolute -left-[135px] top-0 hidden md:block">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-20 h-20 rounded-full border-2 border-gray-300 bg-white shadow-md"
                />
              </div>
              <div className="absolute -left-12 -top-2 text-gray-400 font-bold text-sm md:block hidden">
                {/* {console.log(exp.date.split(" "))} */}
                {exp.date.split(" ")[0]} {exp.date.split(" ")[1]} 
              </div>

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
                    <p>{exp.description}</p>
                  )}
                </div>

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
