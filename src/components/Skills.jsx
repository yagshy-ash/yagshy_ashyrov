const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'TailwindCSS', 'BootstrapCSS', 'HTML5', 'CSS3'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'FastAPI', 'REST API'],
      color: 'purple',
    },
    {
      title: 'Database',
      icon: '💾',
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ'],
      color: 'green',
    },
    {
      title: 'DevOps & Tools',
      icon: '🚀',
      skills: ['Apache', 'NGINX', 'Ubuntu', 'Windows', 'Git', 'Docker'],
      color: 'pink',
    },
    {
      title: 'SEO & Optimization',
      icon: '📈',
      skills: ['SEO', 'GEO'],
      color: 'yellow',
    },
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      gradient: 'from-blue-500 to-blue-600',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      gradient: 'from-green-500 to-green-600',
    },
    pink: {
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      gradient: 'from-pink-500 to-pink-600',
    },
    yellow: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      gradient: 'from-yellow-500 to-yellow-600',
    },
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color]
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-lg p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
                      ></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Language Skills */}
        <div className="mt-16 bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Language Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">TURKMEN</div>
              <p className="text-gray-400">Mother Tongue</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">ENGLISH</div>
              <p className="text-gray-400">B2 Level</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">TURKISH</div>
              <p className="text-gray-400">C1 Level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

