// import { motion } from "framer-motion";

// export const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-4 bg-secondary">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-accent mx-auto"></div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-xl p-8 shadow-lg"
//         >
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={6}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
//                 placeholder="Your message here..."
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:translate-y-[-2px] transition-all duration-200"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// import { useState } from "react";
// import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaDownload, FaTimes } from "react-icons/fa";

// export const Contact = () => {
//   const [showResume, setShowResume] = useState(false);
//   const resumeLink = "/path-to-your-resume.pdf";
//   return (
//     <section id="contact" className="py-20 px-4 bg-secondary">
//       <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
//         {/* Profile Image */}
//         {/* <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
//           <img
//             src="/profile.jpeg"
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div> */}
//      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg flex items-center justify-center bg-white">
//   <img
//     src="/test.png"
//     alt="Profile"
//     className="w-full h-full object-cover aspect-square"
//   />
// </div>

//         {/* Contact Info */}
//         <div className="md:ml-12 mt-8 md:mt-0">
//           <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
//           <p className="text-gray-700 mt-4">
//             I have a strong enthusiasm for creating scalable and easily maintainable applications 
//             using the latest technologies. Currently, I am actively seeking opportunities in the 
//             fields of Software Development and DevOps. If you are aware of any open positions, have 
//             inquiries, or simply want to connect, feel free to get in touch!
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start gap-4 mt-6">
//             <a href="https://github.com/LingalaRohith?tab=repositories" target="_blank" rel="noopener noreferrer">
//               <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition" />
//             </a>
//             <a href="https://www.linkedin.com/in/rohithlingala/" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-500 transition" />
//             </a>
//             <a href="https://www.instagram.com/__its__me__rohith__/" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 transition" />
//             </a>
//             <a href="mailto:rohithlingala11@gmail.com">
//               <FaEnvelope className="w-8 h-8 text-gray-700 hover:text-gray-500 transition" />
//             </a>
//             <a href="tel:+17066158730">
//               <FaPhone className="w-8 h-8 text-green-600 hover:text-green-500 transition" />
//             </a>
//           </div>

//           {/* Resume Button
//           <a
//             href="/path-to-your-resume.pdf"
//             download
//             className="mt-6 inline-block bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition"
//           >
//             See My Resume
//           </a> */}
//            {/* Resume Button */}
//            {/* <button className="mt-4 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-[#CC583F]"
//           onClick={() => setShowResume(true)}>
//             Resume
//           </button>
//           {showResume && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg w-3/4">
//                         <h2 className="text-xl font-bold mb-4">My Resume</h2>
//                         <iframe 
//                             src="/path-to-your-resume.pdf" 
//                             className="w-full h-96" 
//                         ></iframe>
//                         <button 
//                             className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//                             onClick={() => setShowResume(false)}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )} */}

//              {/* Resume Button */}
//           <button 
//             className="mt-6 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-[#CC583F] transition"
//             onClick={() => setShowResume(true)}
//           >
//             See My Resume
//           </button>
//         </div>
//       </div>

//       {/* Resume Modal */}
//       {showResume && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-xl font-bold text-gray-900">Rohith's Resume</h2>
//               <div className="flex items-center space-x-4">
//                 {/* Download Button */}
//                 <a href={resumeLink} download className="text-gray-700 hover:text-gray-900">
//                   <FaDownload className="w-6 h-6" />
//                 </a>
//                 {/* Close Button */}
//                 <button onClick={() => setShowResume(false)} className="text-gray-700 hover:text-gray-900">
//                   <FaTimes className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Resume Content */}
//             <div className="p-4">
//               <iframe 
//                 src={resumeLink} 
//                 className="w-full h-[500px] border rounded-md"
//                 title="Resume"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//         {/* </div> */}

//       {/* </div> */}
//     </section>
//   );
// };

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaDownload, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export const Contact = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeLink = "/portfolio_resume.pdf";

  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left bg-white p-6 rounded-lg shadow-lg">
        
        {/* ✅ Left Section - Profile Image */}
        <div className="flex justify-center w-full md:w-1/3">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg bg-white">
            <img
              src="./cropped_image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ✅ Right Section - Contact Info */}
        <div className="w-full md:w-2/3 md:ml-8 mt-6 md:mt-0">
          {/* <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2> */}
          <p className="text-gray-700 mt-4">
            I have a strong enthusiasm for creating scalable and easily maintainable applications 
            using the latest technologies. Currently, I am actively seeking opportunities in the 
            fields of Software Development and DevOps. Feel free to connect!
          </p>

          {/* ✅ Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://github.com/LingalaRohith?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition" />
            </a>
            <a href="https://www.linkedin.com/in/rohithlingala/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/__its__me__rohith__/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 transition" />
            </a>
            <a href="mailto:rohithlingala11@gmail.com">
              <FaEnvelope className="w-8 h-8 text-gray-700 hover:text-gray-500 transition" />
            </a>
            <a href="tel:+17066158730">
              <FaPhone className="w-8 h-8 text-green-600 hover:text-green-500 transition" />
            </a>
          </div>

          {/* ✅ Resume Button */}
          <button 
            className="mt-6 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-[#CC583F] transition"
            onClick={() => setShowResume(true)}
          >
            See My Resume
          </button>
        </div>
      </div>

      {/* ✅ Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl transition-transform transform scale-100">
            
            {/* ✅ Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Rohith's Resume</h2>
              <div className="flex items-center space-x-4">
                {/* Download Button */}
                <a href={resumeLink} download className="text-gray-700 hover:text-gray-900">
                  <FaDownload className="w-6 h-6" />
                </a>
                {/* Close Button */}
                <button onClick={() => setShowResume(false)} className="text-gray-700 hover:text-gray-900">
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* ✅ Resume Content */}
            <div className="p-4">
              <iframe 
                src={resumeLink} 
                className="w-full h-[500px] border rounded-md"
                title="Resume"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

