'use client';

import { useInView } from '@/hooks/useInView';
import { User, Heart, Code, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                <div className="relative z-10">
                  <User className="h-16 w-16 mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    With 2+ years of experience in web development, I specialize in creating 
                    digital experiences with elegant user-interface and powerful functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Passionate about creating exceptional digital experiences
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I&apos;m a full-stack developer with a keen eye for design and a passion for clean, 
                  efficient code. I love turning complex problems into simple, beautiful solutions 
                  that users genuinely enjoy using.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or capturing moments through photography.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Passionate</p>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Code className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Technical</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Creative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}