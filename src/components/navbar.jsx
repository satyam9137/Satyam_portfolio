import { Menu, X } from "lucide-react";
import { useState } from "react";
import resume from "../assets/SatyamGupta_Resume.pdf"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-wide text-white"
          >
            <span className="text-cyan-400">&lt;</span>
            Satyam
            <span className="text-cyan-400"> /&gt;</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link}
              </a>
            ))}

           <a
      href={resume}
      download="Satyam_Gupta_Resume.pdf"
      className="inline-block"
    >
      <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300">
       ⬇ Resume
      </button>
    </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link}
              </a>
            ))}
<a
      href={resume}
      download="Satyam_Gupta_Resume.pdf"
      className="inline-block"
    >
      <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300">
        ⬇ Resume
      </button>
    </a>
          </div>
        </div>
      </div>
    </nav>
  );
}