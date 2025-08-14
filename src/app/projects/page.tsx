"use client";

import { projects } from "@/data";
import { createFadeIn, DISTANCE, TIMING } from "@/lib/animations";
import { motion } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";

export default function Projects() {
  return (
    <main
      className="container mx-auto px-4 py-16"
      role="main"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          id="projects-heading"
          className="text-heading font-bold text-text-primary mb-8 text-center"
          {...createFadeIn(0, TIMING.normal, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-section text-text-secondary text-center mb-20 max-w-3xl mx-auto"
          {...createFadeIn(TIMING.fast, TIMING.normal, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          Here are some of the projects I&apos;ve worked on. Each one represents
          a unique challenge and learning experience in my development journey.
        </motion.p>

        <section className="space-y-32" aria-labelledby="projects-heading">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
