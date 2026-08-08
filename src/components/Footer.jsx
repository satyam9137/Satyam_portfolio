import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black w-full text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-cyan-400">&lt;</span>
              Satyam
              <span className="text-cyan-400"> /&gt;</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Passionate Full Stack Web Developer focused on building
              fast, responsive, and modern web applications with
              clean code and great user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <Mail />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-400 flex items-center gap-2">
            © {year} Satyam Gupta. Made with
            <Heart className="text-red-500" size={18} />
            using React & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full transition font-semibold"
          >
            Back to Top
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}