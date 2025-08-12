"use client";

import { type Project } from "@/data";
import { TIMING } from "@/lib/animations";
import { motion } from "motion/react";
import { useState } from "react";

interface ImageStackProps {
  project: Project;
}

export function ImageStack({ project }: ImageStackProps) {
  const [isImageOnTop, setIsImageOnTop] = useState(false);

  const handleImageClick = () => {
    setIsImageOnTop(!isImageOnTop);
  };

  return (
    <div className="relative h-80 lg:h-96" onClick={handleImageClick}>
      {/* Image B (Bottom Right by default) */}
      <motion.div
        className="absolute rounded-lg shadow-lg overflow-hidden cursor-pointer top-12 left-12 right-0 bottom-0"
        animate={{
          zIndex: isImageOnTop ? 20 : 10,
          scale: isImageOnTop ? 1.02 : 1,
        }}
        transition={{
          duration: TIMING.normal,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--color-primary) / 0.2), rgb(var(--color-secondary) / 0.2))",
          pointerEvents: isImageOnTop ? "auto" : "none",
        }}
      >
        <div className="w-full h-full flex items-center justify-center border border-border bg-surface-secondary">
          <span className="text-text-secondary font-medium text-center px-4">
            {project.title} - Image B
          </span>
        </div>
      </motion.div>

      {/* Image A (Top Left by default) */}
      <motion.div
        className="absolute rounded-lg shadow-xl overflow-hidden cursor-pointer top-0 left-0 right-12 bottom-12"
        animate={{
          zIndex: isImageOnTop ? 10 : 20,
          scale: !isImageOnTop ? 1.02 : 1,
        }}
        transition={{
          duration: TIMING.normal,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--color-secondary) / 0.2), rgb(var(--color-accent) / 0.2))",
          pointerEvents: !isImageOnTop ? "auto" : "none",
        }}
      >
        <div className="w-full h-full flex items-center justify-center border border-border bg-surface">
          <span className="text-text-secondary font-medium text-center px-4">
            {project.title} - Image A
          </span>
        </div>
      </motion.div>
    </div>
  );
}
