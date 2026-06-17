const Education = () => {
  const educations = [
    {
      degree: "Master's in Systems Engineering",
      university: 'Technical University of Cluj-Napoca',
      location: 'Cluj, Romania',
      period: '2024 - Current',
      level: 'EQF level 8',
      website: 'https://www.utcluj.ro/',
      color: 'blue',
    },
    {
      degree: "Bachelor's in Innovation Science",
      university: 'Oguz Khan Engineering and Technologies University of Turkmenistan',
      location: 'Ashgabat, Turkmenistan',
      period: '2016 – 2021',
      level: 'EQF level 9',
      website: 'https://etut.edu.tm/',
      color: 'purple',
    },
  ]

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-xl text-blue-400 mb-2">{edu.university}</p>
              <p className="text-gray-400 mb-4">{edu.location}</p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <span className="text-gray-400 text-sm">Level: {edu.level}</span>
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

