import profile from "../assets/Profile.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden pt-32 sm:pt-36 lg:pt-40 scroll-mt-24"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pb-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm sm:text-base">
            Welcome to my Portfolio
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-white">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Satyam Gupta
            </span>
          </h1>

          <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-gray-300">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-300 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
            I build modern, fast, responsive, and user-friendly web
            applications using React, JavaScript, Tailwind CSS,
            Node.js, Express, and MongoDB.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-8 sm:mt-10">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/40 text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 mt-2 text-xs sm:text-base">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">1+</h3>
              <p className="text-gray-400 mt-2 text-xs sm:text-base">Years Learning</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 mt-2 text-xs sm:text-base">Dedication</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/30 rounded-full" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px] rounded-full border border-cyan-400/30 bg-slate-900 flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src={profile}
                alt="Satyam Gupta"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}