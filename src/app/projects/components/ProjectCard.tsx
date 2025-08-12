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
    <motion.div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:grid-flow-col-dense"
      }`}
    >
      {/* Image Section */}
      <motion.div
        className={`relative ${isEven ? "" : "lg:col-start-2"}`}
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
          <div className="mb-8">
            <h4 className="text-section font-semibold text-text-primary mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
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
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.links?.github && (
              <motion.a
                href={project.links.github}
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={hover.scale}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
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
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}