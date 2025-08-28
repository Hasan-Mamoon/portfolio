'use client';

import { useInView } from '@/hooks/useInView';

export default function SkillsSection() {
  const { ref, isInView } = useInView();

  const skills = [
    
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Next.js', level: 88, category: 'Framework' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'MERN', level: 88, category: 'Framework' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Language' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Docker', level: 78, category: 'DevOps' },
  ];

  const categoryColors = {
    Frontend: 'bg-blue-500',
    Backend: 'bg-green-500',
    Language: 'bg-purple-500',
    Framework: 'bg-orange-500',
    Database: 'bg-red-500',
    Cloud: 'bg-cyan-500',
    DevOps: 'bg-indigo-500',
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isInView ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      categoryColors[skill.category as keyof typeof categoryColors]
                    }`}
                  >
                    {skill.category}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isInView ? `${skill.level}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Always Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Artificial Intelligence', 'NLP', 'Machine Learning', 'Web Frameworks', 'Cloud'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-gray-700 font-medium hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}