"use client";

import { createFadeIn, DISTANCE, hover, tap, TIMING } from "@/lib/animations";
import { Home } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 -mt-20"
      role="main"
      aria-labelledby="error-heading"
    >
      <motion.div
        className="max-w-2xl text-center"
        variants={createFadeIn(0, TIMING.slow, DISTANCE.medium)}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number */}
        <motion.div
          className="mb-8"
          variants={createFadeIn(TIMING.fast, TIMING.normal, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          <h1
            id="error-heading"
            className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4"
            aria-label="Error 404"
          >
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-8"
          variants={createFadeIn(TIMING.normal, TIMING.normal, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-heading font-bold text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto leading-relaxed">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
        </motion.div>

        <motion.nav
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={createFadeIn(TIMING.slow, TIMING.normal, DISTANCE.medium)}
          initial="hidden"
          animate="visible"
          aria-label="Navigation options"
        >
          <motion.div whileHover={hover.scale} whileTap={tap.scale}>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-primary text-text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              aria-label="Go back to homepage"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Go Home</span>
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </main>
  );
}
