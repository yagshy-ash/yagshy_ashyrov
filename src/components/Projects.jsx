const Projects = () => {
  const projects = [
    {
      title: 'SalesApp.dev',
      description: 'Comprehensive eCommerce platform with full shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Django', 'PostgreSQL', 'REST API'],
      category: 'E-commerce',
      color: 'blue',
    },
    {
      title: 'Salon Service Booking App',
      description: 'User-friendly salon service booking application with scheduling, appointment management, and payment functionalities.',
      technologies: ['React', 'FastAPI', 'MySQL', 'Payment Gateway'],
      category: 'SaaS',
      color: 'purple',
    },
    {
      title: 'Landing Page Constructor',
      description: 'Drag-and-drop landing page builder application for creating professional marketing pages.',
      technologies: ['React', 'JavaScript', 'TailwindCSS'],
      category: 'Tool',
      color: 'green',
    },
    {
      title: 'AI-Based Tools',
      description: 'Various AI-driven solutions including generative AI projects and automation tools.',
      technologies: ['Python', 'AI/ML', 'Django', 'React'],
      category: 'AI',
      color: 'pink',
    },
    {
      title: 'Trading Applications',
      description: 'Real-time trading platform with advanced analytics and automated trading features.',
      technologies: ['React', 'Python', 'WebSocket', 'Redis'],
      category: 'Finance',
      color: 'yellow',
    },
    {
      title: 'Turkmen-Indian Center Website',
      description: 'Official website development and maintenance with feature integration and performance optimization.',
      technologies: ['Django', 'FastAPI', 'NGINX', 'PostgreSQL'],
      category: 'Web Development',
      color: 'indigo',
    },
  ]

  const colorClasses = {
    blue: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
    },
    purple: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
    },
    green: {
      border: 'border-green-500/30',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
    },
    pink: {
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      text: 'text-pink-400',
    },
    yellow: {
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-400',
    },
    indigo: {
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color]
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 ${colors.bg} ${colors.border} border rounded-full text-xs ${colors.text}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Over <span className="text-blue-400 font-bold">50+ projects</span> delivered
            successfully
          </p>
          <a
            href="https://github.com/yagshy-ash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

