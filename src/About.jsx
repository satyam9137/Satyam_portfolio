import { Code2, GraduationCap, Laptop } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 w-full text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-4xl font-bold">
            Passionate Web Developer
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            I'm an MCA student and a passionate Full Stack Web Developer.
            I enjoy building responsive, modern, and user-friendly web
            applications while continuously learning new technologies and
            improving my problem-solving skills.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left */}
          <div className="space-y-6">

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">
                <Code2 className="text-cyan-400" size={34} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Full Stack Development
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Building responsive applications using React,
                    JavaScript, Node.js, Express, MongoDB,
                    MySQL, and Tailwind CSS.
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">
                <GraduationCap className="text-cyan-400" size={34} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Education
                  </h3>

                  <p className="text-gray-400 mt-2">
                    🎓 MCA (2025–2027)<br />
                    Aditya Institute of Management Studies & Research
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">
                <Laptop className="text-cyan-400" size={34} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Goal
                  </h3>

                  <p className="text-gray-400 mt-2">
                    To become a skilled Software Engineer and create
                    scalable, efficient, and impactful web applications.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 p-10">

              <h3 className="text-3xl font-bold mb-8">
                Quick Information
              </h3>

              <div className="space-y-6">

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-gray-400">Name</span>
                  <span>Satyam Gupta</span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-gray-400">Degree</span>
                  <span>MCA Student</span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-gray-400">Location</span>
                  <span>Mumbai, India</span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-gray-400">Languages</span>
                  <span>Java, JavaScript, Python</span>
                </div>

                <div className="flex justify-between border-b border-slate-700 pb-3">
                  <span className="text-gray-400">Frontend</span>
                  <span>React, HTML, CSS, Tailwind</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Backend</span>
                  <span>Node.js, Express, MySQL</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}