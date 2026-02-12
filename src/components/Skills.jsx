import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Java", "Groovy", "JavaScript"],
  },
  {
    title: "Frameworks & Architecture",
    skills: ["Spring Boot", "Spring Framework", "Microservices Architecture"],
  },
  {
    title: "Web Services",
    skills: ["RESTful APIs", "SOAP Web Services (WSDL)", "XSD Schema Handling & Overrides"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "DynamoDB"],
  },
  {
    title: "Testing & Code Quality",
    skills: ["JUnit", "SonarQube", "Jacoco", "PIT"],
  },
  {
    title: "API Tools & Documentation",
    skills: ["Postman", "Swagger"],
  },
  {
    title: "Cloud & AWS Services",
    skills: [
      "AWS S3 (Buckets)",
      "CloudWatch Logs Insights",
      "DynamoDB",
      "Cognito (Exploring)",
      "SQS (Exploring)",
      "SNS (Exploring)",
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "Jenkins (Exploring)", "Kubernetes (Exploring)"],
  },
  {
    title: "Build Tools & Version Control",
    skills: ["Maven", "Gradle", "Git"],
  },
  {
    title: "Frontend & Templating (Working Knowledge)",
    skills: ["HTML", "CSS", "JSP", "Thymeleaf", "ReactJS (Exploring)", "TailwindCSS (Exploring)"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Jira", "Agile/Scrum"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-gradient-to-b from-black via-[#07182e] to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/30 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
