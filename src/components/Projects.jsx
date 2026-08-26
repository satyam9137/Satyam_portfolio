import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import image1 from "../assets/Dailycode_image.png";
import image2 from "../assets/NeuroClass_AI.png";

const projects = [
  {
    title: "DailyCode - Online Coding Platform",
    description:
      "A full-stack coding platform where users can solve programming problems, compile code, and get instant results.",
    image: image1,
    tech: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/satyam9137/Dailycode_Learning_Plateform",
    demo: "https://dailycodeonlinec.netlify.app/",
  },
 {
  title: "NeuroClass AI",
  description:
    "An AI-powered e-learning platform that analyzes attention, fatigue, and emotional states in real time to support personalized and effective learning.",
  image: image2,
  tech: ["React", "FastAPI", "Python", "MongoDB", "AI/ML"],
  github: "https://github.com/satyam9137/Neural-Cognitive-AI-meeting-plateform",
  demo: "https://neuroclassai.netlify.app/",
},
  {
    title: "Bus Ticket Booking",
    description:
      "An online bus reservation system with login, and admin dashboard.",
    image: "/projects/bus.png",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "#",
    demo: "#",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-transparent w-full py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Some of my recent work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl"
            >
              {/* Image */}
              <div className="w-full aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}