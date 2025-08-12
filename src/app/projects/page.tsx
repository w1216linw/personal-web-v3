"use client";

import { projects } from "@/data";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-heading font-bold text-text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-section text-text-secondary text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Here are some of the projects I've worked on. Each one represents a
          unique challenge and learning experience in my development journey.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-surface rounded-lg shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-border/20 h-48 flex items-center justify-center">
                <span className="text-text-secondary">Project Image</span>
              </div>

              <div className="p-6">
                <h3 className="text-section font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-small font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links?.github && (
                  <motion.a
                    href={project.links.github}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    whileHover={{ x: 5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
