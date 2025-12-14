import React from "react";

const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect - Associate",
        // name: "Rohith Lingala",
        validationNumber: "e94e34042643438e83cab658d9fb8205",
        validationLink: "https://www.credly.com/badges/c7e4c429-5b75-48ee-ba9f-00bec5a36395/public_url",
        issueDate: "Jan 14, 2025",
        expirationDate: "Jan 14, 2028",
        image: "./aws.png"
    },
    {
        id: 2,
        title: "Microsoft Certified: Azure Fundamentals",
        // name: "Rohith Lingala",
        validationNumber: "da956560-030e-4c5b-8634-412f0f8594a2",
        validationLink: "https://www.credly.com/badges/b8ab1bd9-199d-4cc6-8b86-c7fa4b275b24/linked_in",
        issueDate: "Aug 20, 2021",
        expirationDate: "NA",
        image: "./AZ.png"
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className=" bg-secondary text-white py-16 px-8">
            <h2 className="text-4xl font-bold mb-6 text-center text-black">Certifications</h2>
            <div className="w-[100px] h-1 bg-accent mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
                {certifications.map((cert) => (
                    <div key={cert.id} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                        <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-md mb-4" />
                        {/* <h3 className="text-2xl font-semibold">{cert.name}</h3> */}
                        <p className="text-lg text-gray-300">{cert.title}</p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold">Validation Number:</span> {cert.validationNumber}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold">Validate At:</span>{" "}
                                <a href={cert.validationLink} target="_blank" className="text-yellow-400 hover:underline">
                                    {cert.validationLink}
                                </a>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                <span className="font-semibold">Issue Date:</span> {cert.issueDate}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold">Expiration Date:</span> {cert.expirationDate}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
