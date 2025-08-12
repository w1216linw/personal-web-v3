"use client";

import { fadeInDown } from "@/lib/animations";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Distance to scroll before background appears
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bio", href: "/bio" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  const indicatorWidth = 85; // Percentage of item width
  const indicatorOffset = (100 - indicatorWidth) / 2; // Center the smaller indicator

  return (
    <motion.header
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xs sm:max-w-xs md:max-w-lg lg:max-w-2xl mx-auto mt-2 sm:mt-4 px-2 sm:px-0"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      role="banner"
    >
      <motion.nav
        className="rounded-full shadow-lg border border-border/50 px-2 sm:px-4 md:px-6 py-2 sm:py-3"
        role="navigation"
        aria-label="Main navigation"
        animate={{
          backgroundColor: isScrolled ? "rgb(var(--color-surface) / 0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="flex justify-between items-center relative">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative z-10 px-2 sm:px-3 md:px-4 py-2 text-body font-medium transition-colors flex-1 text-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Navigate to ${item.name} page`}
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-text-primary"
                  } ${isHovered && !isActive ? "text-primary" : ""}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
          {currentIndex !== -1 && (
            <motion.div
              className="absolute inset-y-1 bg-primary rounded-full shadow-md"
              initial={false}
              animate={{
                left: `${
                  (currentIndex / navItems.length) * 100 +
                  (100 / navItems.length) * (indicatorOffset / 100)
                }%`,
                width: `${(100 / navItems.length) * (indicatorWidth / 100)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              layoutId="activeIndicator"
              aria-hidden="true"
            />
          )}
          {hoveredIndex !== null && hoveredIndex !== currentIndex && (
            <motion.div
              className="absolute inset-y-1 bg-surface-secondary rounded-full"
              initial={false}
              animate={{
                left: `${
                  (hoveredIndex / navItems.length) * 100 +
                  (100 / navItems.length) * (indicatorOffset / 100)
                }%`,
                width: `${(100 / navItems.length) * (indicatorWidth / 100)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              aria-hidden="true"
            />
          )}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
