"use client";

import { bioData } from "@/data";
import {
  createFadeIn,
  createStagger,
  DISTANCE,
  hover,
  TIMING,
} from "@/lib/animations";
import { motion } from "motion/react";

export default function Bio() {
  const containerVariants = createStagger(0.15);
  const itemVariants = createFadeIn(0, TIMING.normal, DISTANCE.medium);

  // Combine all skills from all categories into one array
  const allSkills = bioData.skills.flatMap((category) => category.items);

  return (
    <main
      className="container mx-auto px-4 py-16"
      aria-labelledby="bio-heading"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          id="bio-heading"
          className="text-heading font-bold text-text-primary mb-12 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        {/* Horizontal Layout: Background and Skills */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Background Section */}
          <motion.section variants={itemVariants} aria-labelledby="background-heading">
            <motion.h2
              id="background-heading"
              className="text-subsection font-semibold text-text-primary mb-6"
              variants={itemVariants}
            >
              Background
            </motion.h2>

            <motion.div variants={itemVariants}>
              <p className="text-body text-text-secondary leading-relaxed mb-8">
                {bioData.introduction}
              </p>

              <div>
                <h3 id="interests-heading" className="text-section font-semibold text-text-primary mb-4">
                  Interests
                </h3>
                <ul className="flex flex-wrap gap-3" aria-labelledby="interests-heading">
                  {bioData.interests.map((interest, index) => (
                    <motion.li
                      key={interest}
                      className="bg-accent/20 text-accent px-4 py-2 rounded-full text-body font-medium"
                      whileHover={hover.scale}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: TIMING.fast,
                        delay: TIMING.fast * index,
                      }}
                    >
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants} aria-labelledby="skills-heading">
            <motion.h2
              id="skills-heading"
              className="text-subsection font-semibold text-text-primary mb-6"
              variants={itemVariants}
            >
              Skills & Technologies
            </motion.h2>

            <motion.div variants={itemVariants}>
              <ul className="flex flex-wrap gap-3" aria-labelledby="skills-heading">
                {allSkills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-small font-medium"
                    whileHover={hover.scale}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: TIMING.fast,
                      delay: TIMING.fast * index * 0.1,
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}
