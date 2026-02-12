import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-semibold">
          Software Developer — Indian Eagle Pvt Ltd
        </h3>
        <p className="text-gray-400 mt-1">
          June 2023 – January 2026 | Hyderabad, India
        </p>

        <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
          <li>Built scalable airline booking microservices using Spring Boot.</li>
          <li>Developed REST & SOAP APIs integrated with GDS providers.</li>
          <li>Refactored legacy systems and optimized database performance.</li>
          <li>Handled production-critical incidents in 24/7 environments.</li>
        </ul>
      </motion.div>
    </section>
  );
}
