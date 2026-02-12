import { motion } from "framer-motion";

const projects = [
  {
    projectName: "Internal HR & Finance Management System",
    applicationName: "Company Confidential",
    technologies: ["Java", "Spring Boot", "MySQL", "DynamoDB"],
    description:
      "Exclusive internal application used by HR and Accounting teams for Payroll, ESI, PF, EPF, and statutory compliance workflows with role-based secure access.",
  },
  {
    projectName: "Flight Schedulers Application",
    applicationName: "Post-Booking Management System",
    technologies: ["Java", "Spring Boot", "MySQL", "DynamoDB"],
    description:
      "Developed a post-booking platform supporting airline scheduling operations including e-ticket generation, schedule changes, and booking updates.",
  },
  {
    projectName: "Indian Eagle – Mobile Web Application",
    applicationName: "Mobile Optimized Booking Platform",
    technologies: ["Java", "Groovy", "Spring Boot", "Microservices", "MySQL", "DynamoDB"],
    description:
      "Developed a mobile-optimized web platform accessible via browsers, improving responsiveness and performance for mobile users.",
    liveLink: "https://www.indianeagle.com",
    mobileView: true,
  },
  {
    projectName: "Indian Eagle – Desktop Web Application",
    applicationName: "Public B2C Flight Booking System",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "JavaScript", "MySQL", "DynamoDB"],
    description:
      "Built a public-facing monolithic flight booking platform integrating multiple backend microservices and rendering dynamic content using Thymeleaf templates.",
    liveLink: "https://www.indianeagle.com",
  },
  {
    projectName: "I-GARUDA – Internal CRM Application",
    applicationName: "24/7 Customer Support CRM",
    technologies: ["Java", "Spring Framework", "JSP", "MySQL", "DynamoDB"],
    description:
      "Designed and developed an internal CRM supporting continuous customer service operations, enabling agents to manage bookings, requests, and issue resolution efficiently.",
  },
  {
    projectName: "Search API – Microservice",
    applicationName: "Core Search Backend Service",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "DynamoDB",
      "SonarQube",
      "Jacoco",
      "PIT",
    ],
    description:
      "Migrated the service codebase from Groovy to Java, fixed defects, and improved overall reliability, maintainability, and response time.",
  },
  {
    projectName: "Structured Fare Rules – Microservice",
    applicationName: "Refund & Cancellation Rules Service",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "DynamoDB",
      "SonarQube",
      "Jacoco",
      "PIT",
    ],
    description:
      "Developed a microservice providing refundability and cancellation penalty details with validation and comprehensive automated test coverage.",
  },
  {
    projectName: "Seat Map – Microservice",
    applicationName: "Real-Time Seat Availability Service",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "DynamoDB",
      "SonarQube",
      "Jacoco",
      "PIT",
      "Swagger",
    ],
    description:
      "Built a seat availability microservice providing real-time paid/free/occupied seat information and fare calculation logic consumed by other applications.",
  },
];

export default function Projects() {
  // Open Mobile Version in Small Window
  const openMobileView = (url) => {
    window.open(
      url,
      "_blank",
      "width=430,height=900,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Project Experience
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-400/40 transition overflow-hidden"
            >
              {/* Project Name */}
              <h3 className="text-xl font-bold text-white mb-1">
                {proj.projectName}
              </h3>

              {/* Application Name */}
              <p className="text-blue-400 font-semibold mb-4">
                {proj.applicationName}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-gray-200 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Live Button ONLY for Indian Eagle Apps */}
              {proj.liveLink && (
                <div className="relative z-10">
                  <button
                    onClick={() =>
                      proj.mobileView
                        ? openMobileView(proj.liveLink)
                        : window.open(proj.liveLink, "_blank")
                    }
                    className="mt-4 px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
                  >
                    Live
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
