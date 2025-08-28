'use client';

import { useInView } from '@/hooks/useInView';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { ref, isInView } = useInView();

  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full-Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions for Fortune 500 clients.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on critical product launches',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed responsive web applications and collaborated with designers to create intuitive user interfaces for a fast-growing fintech startup.',
      achievements: [
        'Built the entire frontend architecture from scratch',
        'Improved user engagement by 35% through UX improvements',
        'Integrated with 15+ third-party APIs and services'
      ],
    },
    {
      company: 'Digital Agency Pro',
      position: 'Junior Web Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Worked on various client projects, focusing on WordPress development, custom themes, and plugin development.',
      achievements: [
        'Delivered 25+ client projects on time and within budget',
        'Developed custom WordPress themes and plugins',
        'Maintained 98% client satisfaction rating'
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey through the tech industry, building impactful solutions and growing as a developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.company}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                        isInView ? 'animate-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {experience.position}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">
                            {experience.company}
                          </h4>
                        </div>
                        <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}