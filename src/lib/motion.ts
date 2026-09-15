/**
 * Project Buddy Centralized Premium Motion System
 * Custom ease transitions and variants to deliver a cinematic, high-end, and responsive feeling.
 */

// Premium Cinematic Ease Curve (easeOutExpo)
export const EASE_CINEMATIC = [0.16, 1, 0.3, 1];

// Transition timings hierarchy
export const TIMING_MICRO = 0.2;       // Micro interactions (buttons, icons)
export const TIMING_CARD = 0.35;       // Cards, hover transitions
export const TIMING_TEXT = 0.55;       // Text reveals, headers
export const TIMING_SECTION = 0.7;     // Section entry reveals

/**
 * Helper to check reduced motion preference in JS when needed
 */
export const getReducedMotionQuery = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * 1. Eyebrow/Chapter Reveal
 * Quick fade and subtle slide up
 */
export const eyebrowReveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: 0.45, ease: EASE_CINEMATIC }
};

/**
 * 2. Premium Heading Reveal (Mask/Line style)
 * Animates vertical offset with custom cinematic ease
 */
export const headingReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: TIMING_TEXT, ease: EASE_CINEMATIC }
};

/**
 * Delayed Highlight Reveal (For electric blue or highlighted words in headings)
 */
export const highlightReveal = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: TIMING_TEXT, delay: 0.15, ease: EASE_CINEMATIC }
};

/**
 * 3. Paragraph/Description Reveal
 * Soft fade with small vertical movement
 */
export const paragraphReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: TIMING_TEXT, delay: 0.08, ease: EASE_CINEMATIC }
};

/**
 * 4. Image/Video Cinematic Reveal
 * Slight scale down from 1.02, optional blur reduction, and full opacity
 */
export const visualReveal = {
  initial: { opacity: 0, scale: 1.02 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: TIMING_SECTION, delay: 0.1, ease: EASE_CINEMATIC }
};

/**
 * 5. Card Stagger Container
 */
export const cardContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    }
  },
  viewport: { once: true, margin: "-15px" }
};

/**
 * Card Stagger Child Reveal
 * 16px slide up + fade
 */
export const cardRevealChild = {
  initial: { opacity: 0, y: 16 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: TIMING_CARD, ease: EASE_CINEMATIC }
  }
};

/**
 * 6. CTA / Button Reveal
 */
export const ctaReveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: TIMING_CARD, delay: 0.12, ease: EASE_CINEMATIC }
};

/**
 * 7. Page Entrance Transitions
 */
export const pageReveal = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: EASE_CINEMATIC }
};

/**
 * 8. Button Hover Micro-interactions (Desktop only)
 */
export const buttonHoverFeedback = {
  whileHover: { scale: 1.015, y: -1 },
  whileTap: { scale: 0.985, y: 0 },
  transition: { duration: TIMING_MICRO, ease: EASE_CINEMATIC }
};
