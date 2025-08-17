"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);

    // Apply theme to document
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";

    // Delay theme change to sync with animation
    setTimeout(() => {
      setTheme(newTheme);

      // Save preference
      localStorage.setItem("theme", newTheme);

      // Apply to document
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      setIsAnimating(false);
    }, 300);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="w-12 h-12 rounded-full bg-border relative opacity-50">
        <div className="w-6 h-6 bg-surface rounded-full absolute top-3 left-3" />
      </button>
    );
  }

  return (
    <div className="fixed right-2 top-3 sm:top-5 z-50">
      <motion.button
        onClick={toggleTheme}
        className={`cursor-pointer w-12 h-12 rounded-full relative overflow-hidden shadow-lg transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-b from-slate-900 to-slate-600"
            : "bg-gradient-to-b from-sky-500 to-sky-200"
        }`}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {/* Background stars for dark mode */}
        {theme === "dark" && (
          <div className="absolute inset-0">
            <div className="absolute top-2 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
            <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
            <div className="absolute bottom-2 left-5 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
          </div>
        )}

        {/* Sun/Moon container with animation */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.4,
                }}
                className="absolute"
              >
                <Sun className="w-6 h-6 text-yellow-300" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.4,
                }}
                className="absolute"
              >
                <Moon className="w-5 h-5 text-slate-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
