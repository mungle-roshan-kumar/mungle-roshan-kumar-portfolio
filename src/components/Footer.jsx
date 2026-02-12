export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Roshan Kumar Mungle. All Rights Reserved.
        </p>

        <p className="text-gray-600 text-xs mt-2">
          Built with React + Tailwind + Framer Motion 🚀
        </p>
      </div>
    </footer>
  );
}
