import { useState } from "react";
import { motion } from "framer-motion";
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
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">

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

          <a
            href="/Roshan_Kumar_Resume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/mungle-roshan-kumar-877595374"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/mungle-roshan-kumar"
            target="_blank"
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

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 px-8 py-6 space-y-4">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="/Roshan_Kumar_Resume.pdf"
            target="_blank"
            className="block text-blue-400"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
