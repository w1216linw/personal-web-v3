"use client";

import { motion } from "motion/react";

export default function Bio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-heading font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-200 rounded-lg h-96 mb-6 flex items-center justify-center">
              <span className="text-gray-500">Your Photo Here</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-body text-gray-600 leading-relaxed">
              Hello! I'm a passionate developer with a love for creating
              innovative digital solutions. With years of experience in web
              development, I specialize in modern technologies and enjoy
              bringing ideas to life through code.
            </p>

            <p className="text-body text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying the great
              outdoors. I believe in continuous learning and staying up-to-date
              with the latest industry trends.
            </p>

            <div className="pt-4">
              <h3 className="text-section font-semibold text-gray-900 mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Tailwind CSS",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-small font-medium"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + Math.random() * 0.3,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
