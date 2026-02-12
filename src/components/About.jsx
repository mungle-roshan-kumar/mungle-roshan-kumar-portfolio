import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-400 mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          I am a Full Stack Developer with 2.9 years of experience in building
          scalable airline booking and CRM applications using Java, Spring Boot,
          Microservices, and React. I enjoy designing reliable backend systems
          and creating clean, modern frontend interfaces.
        </motion.p>
      </div>
    </section>
  );
}
