"use client";

import { heroData } from "@/data";
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
      className="min-h-screen flex items-center justify-center px-4 -mt-20"
      aria-labelledby="hero-heading"
      aria-describedby="hero-desc"
      role="banner"
    >
      <motion.div
        variants={createFadeIn(0, TIMING.slow, DISTANCE.medium)}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        <motion.h1
          id="hero-heading"
          className="text-hero font-bold text-text-primary mb-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={createFadeIn(
              TIMING.fast * 4,
              TIMING.slow,
              DISTANCE.medium
            )}
            className="inline-block mr-3 sm:mr-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold text-hero-accent drop-shadow-lg"
          >
            {heroData.greeting}
          </motion.span>
          {heroData.title.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index + 100}
                className="inline-block mr-3 sm:mr-4"
                variants={createFadeIn(
                  TIMING.fast * (index + 5),
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
          className="text-body mb-8 max-w-2xl mx-auto"
          variants={createFadeIn(TIMING.normal, TIMING.slow, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          {heroData.description
            .split(new RegExp(`(${heroData.highlights})`, "gi"))
            .map((word, index) => {
              return word.toLowerCase() ===
                heroData.highlights.toLowerCase() ? (
                <span
                  className="text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full text-subtitle"
                  key={index}
                >
                  {word}
                </span>
              ) : (
                <span className="text-text-secondary" key={index}>
                  {word}
                </span>
              );
            })}
        </motion.p>

        <motion.nav
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          variants={createFadeIn(TIMING.slow, TIMING.slow, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
          aria-label="Quick access actions"
          role="navigation"
        >
          <motion.a
            href={heroData.ctaButtons.primary.href}
            className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
            whileHover={hover.scale}
            whileTap={tap.scale}
          >
            {heroData.ctaButtons.primary.text}
          </motion.a>
          <motion.a
            href={heroData.ctaButtons.secondary.href}
            className="border border-secondary text-secondary px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors text-center"
            whileHover={hover.scale}
            whileTap={tap.scale}
          >
            {heroData.ctaButtons.secondary.text}
          </motion.a>
        </motion.nav>
      </motion.div>
    </section>
  );
}
