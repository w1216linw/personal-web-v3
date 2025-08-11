"use client";

import {
  createFadeIn,
  DISTANCE,
  hover,
  staggerContainer,
  tap,
  TIMING,
} from "@/lib/animations";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section
      className="container mx-auto px-4 py-16"
      aria-labelledby="hero-heading"
      aria-describedby="hero-desc"
      role="banner"
    >
      <motion.div
        variants={createFadeIn(0, TIMING.slow, DISTANCE.medium)}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          id="hero-heading"
          className="text-5xl md:text-7xl font-bold text-text-primary mb-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {["Welcome", "to", "My", "Portfolio"].map((word, index) => {
            return (
              <motion.span
                key={index}
                className="inline-block mr-4"
                variants={createFadeIn(
                  TIMING.fast * index,
                  TIMING.slow,
                  DISTANCE.medium
                )}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          id="hero-desc"
          className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
          variants={createFadeIn(TIMING.normal, TIMING.slow, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          I&rsquo;m a passionate developer creating amazing digital experiences
        </motion.p>

        <motion.nav
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={createFadeIn(TIMING.slow, TIMING.slow, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
          aria-label="Quick access actions"
          role="navigation"
        >
          <motion.a
            href="/projects"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            whileHover={hover.scale}
            whileTap={tap.scale}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/contact"
            className="border border-secondary text-secondary px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors"
            whileHover={hover.scale}
            whileTap={tap.scale}
          >
            Get In Touch
          </motion.a>
        </motion.nav>
      </motion.div>
    </section>
  );
}
