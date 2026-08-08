import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: <Globe size={42} />,
    title: "Frontend",
    progress: 90,
    color: "from-cyan-500 to-blue-500",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: <Server size={42} />,
    title: "Backend",
    progress: 80,
    color: "from-purple-500 to-pink-500",
    tech: ["Node.js", "Express.js", "REST API"],
  },
  {
    icon: <Database size={42} />,
    title: "Database",
    progress: 85,
    color: "from-green-500 to-emerald-500",
    tech: ["MySQL", "MongoDB"],
  },
  {
    icon: <Code2 size={42} />,
    title: "Programming",
    progress: 88,
    color: "from-orange-500 to-red-500",
    tech: ["Java", "Python", "JavaScript"],
  },
  {
    icon: <GitBranch size={42} />,
    title: "Tools",
    progress: 82,
    color: "from-yellow-500 to-orange-500",
    tech: ["Git", "GitHub", "VS Code"],
  },
  {
    icon: <Terminal size={42} />,
    title: "Others",
    progress: 75,
    color: "from-indigo-500 to-violet-500",
    tech: ["DSA", "OOP", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black w-full text-white py-24"
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
            My Skills
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I enjoy learning modern technologies and building scalable,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 group"
            >
              {/* Glow */}

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r ${skill.color}`}
              />

              {/* Icon */}

              <div
                className={`w-18 h-18 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-8`}
              >
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {skill.title}
              </h3>

              {/* Progress */}

              <div className="w-full h-2 rounded-full bg-slate-700 mb-2">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.progress}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />

              </div>

              <p className="text-cyan-400 mb-6">
                {skill.progress}%
              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-2">

                {skill.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-slate-800 border border-slate-700 hover:border-cyan-400 transition"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}