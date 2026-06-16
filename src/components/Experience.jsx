const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Novartis',
      location: 'Romania',
      period: 'Jan 2025 - Dec 2025',
      description:
        'During my time in this position, I primarily specialized in frontend development, building user-experience-focused interfaces with modern web technologies. I also actively contributed to generative AI projects, gaining experience in developing AI-driven solutions.',
      technologies: ['React', 'JavaScript', 'AI', 'Frontend'],
      color: 'blue',
    },
    {
      title: 'Full Stack Web Developer',
      company: 'VIVA Marketing and IT',
      location: 'Ashgabat, Turkmenistan',
      period: '2023',
      description: [
        'Ecommerce Application Development - SalesApp.dev: Led the design and development of a comprehensive eCommerce platform.',
        'Salon Service Booking Application: Developed a user-friendly salon service booking application, integrating scheduling, appointment management, and payment functionalities to streamline customer bookings and enhance service.',
      ],
      technologies: ['React', 'Django', 'FastAPI', 'E-commerce'],
      color: 'purple',
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Turkmen-Indian Center, IT Department',
      location: 'Ashgabat, Turkmenistan',
      period: 'Apr 2024 - Oct 2024',
      description: [
        'Develop and maintain the Turkmen-Indian Center\'s Website.',
        'Managed the deployment process for all company projects, ensuring timely and efficient delivery, with a focus on quality assurance and performance optimization.',
        'Collaborated with the teams to conceptualize, design, and integrate new features to enhance website functionality and user engagement.',
      ],
      technologies: ['Django', 'FastAPI', 'Deployment', 'NGINX'],
      color: 'green',
    },
    {
      title: 'Full Stack Web Developer',
      company: '"TAKYK ULGAM" ES',
      location: 'Ashgabat, Turkmenistan',
      period: '2023',
      description: ['Landing Page Constructor Application'],
      technologies: ['React', 'JavaScript', 'Landing Pages'],
      color: 'pink',
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelancer',
      location: 'Remote',
      period: '2018 - 2022',
      description: [
        'Contributed to a diverse range of projects, focusing on continuous self-improvement and expanding expertise across various domains, including:',
        'ECommerce Applications, Landing Pages, Python Scripts, Networking Projects, AI Projects, Game Development',
      ],
      technologies: ['Python', 'React', 'Django', 'FastAPI', 'E-commerce'],
      color: 'yellow',
    },
  ]

  const colorClasses = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    green: 'border-green-500/30 bg-green-500/5',
    pink: 'border-pink-500/30 bg-pink-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative border-l-4 ${colorClasses[exp.color]} rounded-r-lg p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-400 mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{exp.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

