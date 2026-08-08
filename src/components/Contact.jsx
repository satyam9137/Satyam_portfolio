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
      className="bg-slate-950 w-full text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?
            Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {[
              {
                icon: <Mail size={30} />,
                title: "Email",
                value: "your@email.com",
              },
              {
                icon: <Phone size={30} />,
                title: "Phone",
                value: "+91 9876543210",
              },
              {
                icon: <MapPin size={30} />,
                title: "Location",
                value: "Mumbai, India",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center text-black">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Links */}

            <div className="flex gap-5 pt-6">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            ></textarea>

            <button
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}