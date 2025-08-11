import { Variants } from "motion/react";

// Base timing and easing configurations
export const TIMING = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  xSlow: 1.2,
} as const;

export const EASING = {
  // Standard easing curves
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  // Custom easing for smooth animations
  spring: { type: "spring", stiffness: 300, damping: 30 },
  smoothSpring: { type: "spring", stiffness: 200, damping: 25 },
  bouncy: { type: "spring", stiffness: 400, damping: 20 },
} as const;

// Distance values for movement animations
export const DISTANCE = {
  small: 10,
  medium: 20,
  large: 40,
  xlarge: 60,
} as const;

// Animation variant factory functions for customization
export const createFadeIn = (
  delay: number = 0,
  duration: number = TIMING.normal,
  distance: number = DISTANCE.medium
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASING.easeOut,
    },
  },
});

export const createSlideIn = (
  direction: "left" | "right" | "up" | "down" = "left",
  delay: number = 0,
  duration: number = TIMING.normal,
  distance: number = DISTANCE.large
): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -distance };
      case "right":
        return { opacity: 0, x: distance };
      case "up":
        return { opacity: 0, y: -distance };
      case "down":
        return { opacity: 0, y: distance };
    }
  };

  return {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: EASING.easeOut,
      },
    },
  };
};

export const createScale = (
  delay: number = 0,
  duration: number = TIMING.fast,
  scale: number = 0.8
): Variants => ({
  hidden: { opacity: 0, scale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: EASING.easeOut,
    },
  },
});

export const createStagger = (
  staggerDelay: number = 0.1,
  childVariants?: Variants
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
  ...(childVariants || {}),
});

// Pre-defined animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.easeOut,
    },
  },
};

export const fadeInUp: Variants = createFadeIn(0, TIMING.normal, DISTANCE.medium);

export const fadeInDown: Variants = createFadeIn(0, TIMING.normal, -DISTANCE.medium);

export const slideInLeft: Variants = createSlideIn("left");

export const slideInRight: Variants = createSlideIn("right");

export const slideInUp: Variants = createSlideIn("up");

export const slideInDown: Variants = createSlideIn("down");

export const scaleIn: Variants = createScale();

export const scaleInBig: Variants = createScale(0, TIMING.normal, 0.6);

// Container animations for staggering children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Hover and interaction animations
export const hover = {
  scale: { scale: 1.05, transition: { duration: TIMING.fast } },
  lift: { y: -5, transition: { duration: TIMING.fast } },
  glow: { 
    scale: 1.02, 
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: { duration: TIMING.fast } 
  },
  rotate: { rotate: 5, transition: { duration: TIMING.fast } },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: EASING.easeInOut,
    },
  },
} as const;

export const tap = {
  scale: { scale: 0.95, transition: { duration: 0.1 } },
  press: { scale: 0.98, transition: { duration: 0.1 } },
} as const;

// Exit animations
export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeIn,
    },
  },
};

export const slideOutUp: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: -DISTANCE.medium,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeIn,
    },
  },
};

export const slideOutDown: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: DISTANCE.medium,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeIn,
    },
  },
};

// Page transition animations
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeIn,
    },
  },
};

// Utility functions for reduced motion
export const getReducedMotionVariants = (variants: Variants): Variants => {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Return simplified variants that only fade
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return variants;
};

// Custom transition presets
export const transitions = {
  spring: EASING.spring,
  smoothSpring: EASING.smoothSpring,
  bouncy: EASING.bouncy,
  smooth: {
    duration: TIMING.normal,
    ease: EASING.easeOut,
  },
  fast: {
    duration: TIMING.fast,
    ease: EASING.easeOut,
  },
  slow: {
    duration: TIMING.slow,
    ease: EASING.easeOut,
  },
} as const;

// Animation configuration objects for common use cases
export const animationConfigs = {
  // Page entrance
  pageEnter: {
    variants: pageTransition,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
  },
  
  // Staggered list
  staggeredList: {
    variants: staggerContainer,
    initial: "hidden",
    animate: "visible",
  },
  
  // Staggered list item
  listItem: {
    variants: createFadeIn(),
  },
  
  // Interactive element
  interactive: {
    whileHover: hover.scale,
    whileTap: tap.scale,
  },
  
  // Button with enhanced feedback
  button: {
    whileHover: hover.lift,
    whileTap: tap.press,
    transition: transitions.fast,
  },
  
  // Card hover effects
  card: {
    whileHover: hover.glow,
    transition: transitions.smooth,
  },
} as const;

// Export type definitions for TypeScript support
export type AnimationVariantName = keyof typeof animationConfigs;
export type HoverEffect = keyof typeof hover;
export type TapEffect = keyof typeof tap;
export type TimingKey = keyof typeof TIMING;
export type EasingKey = keyof typeof EASING;
export type DistanceKey = keyof typeof DISTANCE;