'use client';

import { useInView } from '@/hooks/useInView';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { ref, isInView } = useInView();

  const experiences = [
    {
      company: 'DevBerry',
      position: 'Full-Stack Developer',
      period: '2024 - 2025',
      location: 'Faisalabad, PK',
      description: 'Engineered full stack web applications in MERN and Next.js',
      achievements: [
        'Delivered elegant, responsive and scalable User Intefaces',
        'Implemented robust RESTful APIs, enabling secure operations and real-time data flow',
        
      ],
    },
    {
      company: 'Fiverr',
      position: 'Freelancer',
      period: '2023 - Current',
      location: 'Remote',
      description: 'Delivered multiple projects to clients',
      achievements: [
        'Timely delivery of projects',
        'Multiple 5 star reviews'
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
              My journey building impactful solutions and growing as a developer
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