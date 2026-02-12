import { motion } from "framer-motion";
import profile from "../assets/profile.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-[88vh]
        flex items-center justify-center
        px-6 pt-16
        overflow-x-hidden
      "
    >
      {/* ✅ Full width prevents layout break */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-300 text-lg">Hi, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 leading-tight">
            Roshan Kumar <span className="text-blue-400">Mungle</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Full Stack Developer (Java + Spring Boot + React)
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/40 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-white/20 hover:border-blue-400 transition"
            >
              Contact Me
            </a>

            {/* ✅ Resume Link Fixed for GitHub Pages */}
            <a
              href={`${import.meta.env.BASE_URL}Roshan_Kumar_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/mungle-roshan-kumar-877595374"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/mungle-roshan-kumar"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div className="flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
            "
          >
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-3xl"></div>

            <img
              src={profile}
              alt="Roshan Kumar"
              className="
                relative
                max-w-full
                w-[220px] h-[220px]
                sm:w-[280px] sm:h-[280px]
                md:w-[380px] md:h-[380px]
                object-contain
                rounded-3xl
                bg-black/30 p-4
                border border-white/10
                shadow-2xl shadow-blue-500/40
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
