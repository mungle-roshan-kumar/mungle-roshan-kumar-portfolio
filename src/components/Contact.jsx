import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // ✅ Detect Mobile Device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  // ✅ Toast Helper
  function showToast(message, type = "success") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }

  // ✅ Form Submit Logic
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_subject", "IMPORTANT : Received a message from Portfolio");

    try {
      const response = await fetch("https://formspree.io/f/xykdgeal", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast("✅ Message Sent Successfully!", "success");
        e.target.reset();
      } else {
        showToast("❌ Something went wrong. Try again.", "error");
      }
    } catch (error) {
      showToast("❌ Network error. Please try again.", "error");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-16 relative">
      {/* ✅ Toast Popup */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className={`
              fixed top-6 right-6 z-50
              px-6 py-4 rounded-xl shadow-xl
              text-white font-medium
              ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}
            `}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-400 mb-6"
        >
          Contact
        </motion.h2>

        <p className="text-gray-300 mb-12">
          Feel free to reach out for opportunities, collaborations, or a quick
          chat about backend & full-stack development.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {/* ✅ Email Card */}
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value="mungleroshankumar123@gmail.com"
            link="mailto:mungleroshankumar123@gmail.com"
          />

          {/* ✅ Phone Card → Dial Only on Mobile */}
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Phone"
            value="+91 7095821977"
            link={isMobile ? "tel:+917095821977" : null}
          />

          {/* ✅ LinkedIn Card → FIXED (Opens in Same Tab) */}
          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/mungle-roshan-kumar"
            link="https://www.linkedin.com/in/mungle-roshan-kumar-877595374"
          />

          {/* ✅ GitHub Card → Still Opens New Tab */}
          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/mungle-roshan-kumar"
            link="https://github.com/mungle-roshan-kumar"
            external
          />

          {/* ✅ Location Card → Opens Google Maps New Tab */}
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Hyderabad, India"
            link="https://www.google.com/maps/search/?api=1&query=Hyderabad,India"
            external
          />
        </div>

        {/* ✅ Direct Email Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:mungleroshankumar123@gmail.com"
          className="
            inline-block mb-12 px-10 py-3 rounded-xl
            bg-blue-500 hover:bg-blue-600
            shadow-lg shadow-blue-500/30
            transition font-medium
          "
        >
          Email Me Directly 📩
        </motion.a>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            max-w-3xl mx-auto
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-8
            shadow-lg shadow-black/40
          "
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send Me a Message 🚀
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200"
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                mt-2 px-8 py-3 rounded-xl
                flex items-center justify-center gap-2
                font-medium transition
                ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30"
                }
              `}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message ✨"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ✅ Reusable Contact Card → Entire Card Clickable */
function ContactCard({ icon, title, value, link, external }) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link || undefined}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        hover:border-blue-400
        hover:shadow-lg hover:shadow-blue-500/20
        transition
        block cursor-pointer
      `}
    >
      <div className="text-blue-400 text-3xl mx-auto mb-4 w-fit">{icon}</div>

      <p className="text-gray-200 font-semibold">{title}</p>

      <p className="text-gray-400 mt-2">{value}</p>
    </Wrapper>
  );
}
