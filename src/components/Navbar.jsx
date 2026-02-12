import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed top-0 w-full z-50
        bg-black/30 backdrop-blur-xl
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
          Roshan Kumar Mungle
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-gray-200">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>

          {/* Resume */}
          <a
            href="MungleRoshanKumarJavaFullStack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600"
          >
            Resume
          </a>

          {/* Socials */}
          <a
            href="https://www.linkedin.com/in/mungle-roshan-kumar-877595374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/mungle-roshan-kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-black/90 backdrop-blur-lg
              px-6 py-6
              space-y-5
              text-gray-200
            "
          >
            {/* Links */}
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-blue-400"
            >
              Contact
            </a>

            {/* Resume Button */}
            <a
              href="MungleRoshanKumarJavaFullStack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block text-center
                px-5 py-3 rounded-xl
                bg-blue-500 hover:bg-blue-600
                font-semibold
              "
            >
              Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/mungle-roshan-kumar-877595374"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/mungle-roshan-kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
