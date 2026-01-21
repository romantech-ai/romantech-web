import { Variants } from "framer-motion";

// Premium easing curves (typed as tuples for framer-motion)
export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeInOut: [number, number, number, number] = [0.76, 0, 0.24, 1];

// Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

// Stagger container - no opacity change to prevent invisible sections on mobile
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Draw line animation for process timeline
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easeInOut
    }
  }
};

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  }
};

// Button hover animation
export const buttonHover = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: easeOut
    }
  },
  tap: {
    scale: 0.98,
    y: 0
  }
};

// Text reveal animation for hero
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Counter animation for stats
export const counterAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

// Navbar animation
export const navbarAnimation: Variants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

// Mobile menu animation
export const mobileMenuAnimation: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easeInOut
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeOut
    }
  }
};

// FAQ accordion animation
export const accordionAnimation: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut
    }
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOut
    }
  }
};

// Floating animation for decorative elements
export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glow pulse animation
export const glowPulse = {
  initial: {
    boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
  },
  animate: {
    boxShadow: [
      "0 0 30px rgba(0, 212, 255, 0.3)",
      "0 0 50px rgba(0, 212, 255, 0.5)",
      "0 0 30px rgba(0, 212, 255, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
