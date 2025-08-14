"use client";

import { type Project } from "@/data";
import {
  createSlideIn,
  DISTANCE,
  hover,
  TIMING,
} from "@/lib/animations";
import { ChevronRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageStack } from "./ImageStack";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  // Create slide animations based on index (alternating left/right)
  const imageDirection = isEven ? "left" : "right";
  const contentDirection = isEven ? "right" : "left";

  const imageVariants = createSlideIn(
    imageDirection,
    0,
    TIMING.normal,
    DISTANCE.large
  );
  const contentVariants = createSlideIn(
    contentDirection,
    TIMING.fast,
    TIMING.normal,
    DISTANCE.large
  );

  return (
    <motion.article
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:grid-flow-col-dense"
      }`}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Image Section */}
      <motion.div
        className={`relative ${isEven ? "" : "lg:col-start-2"}`}
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-label={`Visual preview of ${project.title}`}
      >
        <ImageStack project={project} />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`space-y-6 ${isEven ? "" : "lg:col-start-1"}`}
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div>
          <motion.h3
            id={`project-title-${project.id}`}
            className="text-subsection font-bold text-text-primary mb-4"
            whileHover={hover.scale}
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            className="text-body text-text-secondary leading-relaxed mb-6"
          >
            {project.description}
          </motion.p>

          {/* Technology Stack */}
          <section className="mb-8" aria-labelledby={`tech-heading-${project.id}`}>
            <h4 id={`tech-heading-${project.id}`} className="text-section font-semibold text-text-primary mb-3">
              Technologies
            </h4>
            <ul className="flex flex-wrap gap-3" aria-label="Technologies used">
              {project.technologies.map((tech: string, techIndex: number) => (
                <li key={tech}>
                  <motion.span
                    className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-body font-medium"
                    whileHover={hover.scale}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: TIMING.fast,
                      delay: TIMING.fast + TIMING.fast * techIndex,
                    }}
                  >
                    {tech}
                  </motion.span>
                </li>
              ))}
            </ul>
          </section>

          {/* Action Links */}
          <nav className="flex flex-col sm:flex-row gap-4" aria-label="Project links">
            {project.links?.github && (
              <motion.a
                href={project.links.github}
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={hover.scale}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <ChevronRight className="w-4 h-4 mr-2" aria-hidden="true" />
                View Code
              </motion.a>
            )}
            
            {project.links?.live && (
              <motion.a
                href={project.links.live}
                className="inline-flex items-center justify-center border border-secondary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors"
                whileHover={hover.scale}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                Live Demo
              </motion.a>
            )}
          </nav>
        </div>
      </motion.div>
    </motion.article>
  );
}