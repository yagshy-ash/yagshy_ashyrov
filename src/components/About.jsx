const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo for About Section */}
          <div className="order-2 md:order-1 flex justify-center md:justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl"></div>
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Yagshygeldi Ashyrov"
                className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an experienced Full Stack Developer with over 4 years of expertise
              in JavaScript, React, Python, Django, and FastAPI. I have a proven track
              record of delivering 50+ successful projects, including e-commerce platforms,
              trading applications, and AI-based tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm adept at improving system automation to drive sales and collaborating
              with cross-functional teams to innovate scalable solutions. Currently pursuing
              my Master's in Systems Engineering at Technical University of Cluj-Napoca
              while working as a Full Stack Developer at Novartis.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-blue-400 font-semibold">4+</span>
                <span className="text-gray-400 ml-2">Years Experience</span>
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <span className="text-purple-400 font-semibold">50+</span>
                <span className="text-gray-400 ml-2">Projects</span>
              </div>
              <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <span className="text-pink-400 font-semibold">Full Stack</span>
                <span className="text-gray-400 ml-2">Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">Frontend</div>
              <p className="text-gray-400">React, JavaScript, TailwindCSS, BootstrapCSS</p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">Backend</div>
              <p className="text-gray-400">Python, Django, FastAPI, Flask</p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-pink-400 mb-2">Database</div>
              <p className="text-gray-400">MySQL, PostgreSQL, Redis</p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">DevOps</div>
              <p className="text-gray-400">Apache, NGINX, Ubuntu, Windows</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About

