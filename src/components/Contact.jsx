import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 w-full text-white py-20 sm:py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold text-sm sm:text-base">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate?
            Feel free to contact me.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >

          {[
            {
              icon: <Mail size={28} />,
              title: "Email",
              value: "satyamg.9137@gmail.com",
            },
            {
              icon: <Phone size={28} />,
              title: "Phone",
              value: "+91 9137653421",
            },
            {
              icon: <MapPin size={28} />,
              title: "Location",
              value: "Mumbai, India",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 transition"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-cyan-500 flex items-center justify-center text-black">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base break-all">
                  {item.value}
                </p>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="flex gap-5 pt-6 justify-center">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/satyam9137"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}