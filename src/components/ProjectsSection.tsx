"use client";

import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectsSection() {
  const { ref, isInView } = useInView();

  const projects = [
    {
      title: "Books Catalogue",
      description:
        "A light weight platform built with Next.js, featuring personalised book libraries for users.",
      image: "/images/books-catalogue.png",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "PostgreSQL"],
      liveUrl: "http://book-catalog-peach.vercel.app",
      githubUrl: "https://github.com/Hasan-Mamoon/book-catalog",
    },
    {
      title: "MindScope",
      description:
        "An AI powered journaling app built to help users reflect, track, and improve their mental well-being through journaling and data-driven insights.",
      image: "/images/mind-scope.png",
      technologies: [
        "Flask",
        "Transformers",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      //liveUrl: 'https://www.linkedin.com/in/muhammad-hassan-mamoon-534190286/',
      githubUrl: "https://github.com/Hasan-Mamoon/mind-scope",
    },
    {
      title: "Shifa",
      description:
        "A web based healthcare platform buit to create convenience for patients and doctors",
      image: "/images/shifa.png",
      technologies: [
        "React",
        "AWS-S3",
        "Express",
        "MongoDB",
        "Stripe",
        "Nodemailer",
        "JitsiMeet",
      ],
      //liveUrl: 'https://example.com',
      githubUrl: "https://github.com/Hasan-Mamoon/Shifa",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group ${
                  isInView ? "animate-in" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative w-full h-48 overflow-hidden ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 px-8 py-3 text-lg hover:bg-blue-50"
              onClick={() =>
                window.open(
                  "https://github.com/Hasan-Mamoon?tab=repositories",
                  "_blank"
                )
              }
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
