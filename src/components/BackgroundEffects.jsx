import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* Gradient Glow Blob 1 */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[180px]" />

      {/* Gradient Glow Blob 2 */}
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[200px]" />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[20%] w-3 h-3 bg-blue-400 rounded-full blur-sm opacity-70"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] left-[70%] w-2 h-2 bg-white rounded-full blur-sm opacity-40"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[80%] left-[40%] w-2.5 h-2.5 bg-purple-400 rounded-full blur-sm opacity-50"
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
