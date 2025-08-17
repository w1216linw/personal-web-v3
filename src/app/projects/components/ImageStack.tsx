"use client";

import { type Project } from "@/data";
import { TIMING } from "@/lib/animations";
import { motion } from "motion/react";
import Image from "next/image";
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
    <div
      className="relative w-full aspect-[1440/900]"
      onClick={handleImageClick}
      role="button"
      tabIndex={0}
      aria-label={`Click to toggle between preview images for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleImageClick();
        }
      }}
    >
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
        role="img"
        aria-label="Application image B"
      >
        {project.images?.[1] && (
          <ImageWrapper>
            <Image
              src={project.images[1]}
              alt={`${project.title} screenshot 2`}
              fill
              className="object-fill"
              sizes="100vw"
              priority
            />
          </ImageWrapper>
        )}
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
        role="img"
        aria-label="Application image A"
      >
        {project.images?.[0] && (
          <ImageWrapper>
            <Image
              src={project.images[0]}
              alt={`${project.title} screenshot 1`}
              fill
              className="object-fill"
              sizes="100vw"
              priority
            />
          </ImageWrapper>
        )}
      </motion.div>
    </div>
  );
}

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-start gap-2 px-3 py-2 bg-foreground">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div className="flex-1 relative">{children}</div>
    </div>
  );
};
