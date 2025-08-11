"use client";

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
    <div className="fixed right-2 top-2">
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
                initial={{
                  y: isAnimating ? 0 : -20,
                  opacity: isAnimating ? 1 : 0,
                }}
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
                <svg
                  className="w-6 h-6 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
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
                <svg
                  className="w-5 h-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
