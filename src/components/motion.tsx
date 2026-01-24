"use client";

import * as React from "react";
import {
  motion as framerMotion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

export type { Variants, Transition } from "framer-motion";
export { AnimatePresence, useReducedMotion };

/**
 * Create a motion component that respects prefers-reduced-motion.
 * When reduced motion is preferred, animation props are stripped.
 * Uses mounted state to prevent hydration mismatches.
 */
function withReducedMotion<P extends object>(
  MotionComponent: React.ComponentType<P>
): React.FC<P> {
  const ReducedMotionComponent: React.FC<P> = (props) => {
    const [mounted, setMounted] = React.useState(false);
    const prefersReducedMotion = useReducedMotion();

    React.useEffect(() => {
      setMounted(true);
    }, []);

    // Before mount, render without animation to prevent hydration mismatch
    // The initial state should match what the server renders
    if (!mounted) {
      const {
        initial,
        animate,
        exit,
        whileHover,
        whileTap,
        whileInView,
        whileFocus,
        whileDrag,
        transition,
        variants,
        ...rest
      } = props as Record<string, unknown>;

      return <MotionComponent {...(rest as P)} />;
    }

    if (prefersReducedMotion) {
      // Strip animation props when reduced motion is preferred
      const {
        initial,
        animate,
        exit,
        whileHover,
        whileTap,
        whileInView,
        whileFocus,
        whileDrag,
        transition,
        variants,
        ...rest
      } = props as Record<string, unknown>;

      return <MotionComponent {...(rest as P)} />;
    }

    return <MotionComponent {...props} />;
  };

  return ReducedMotionComponent;
}

/**
 * Motion components that automatically respect prefers-reduced-motion.
 * Use these instead of importing directly from framer-motion.
 */
export const motion = {
  div: withReducedMotion(framerMotion.div),
  span: withReducedMotion(framerMotion.span),
  p: withReducedMotion(framerMotion.p),
  h1: withReducedMotion(framerMotion.h1),
  h2: withReducedMotion(framerMotion.h2),
  h3: withReducedMotion(framerMotion.h3),
  h4: withReducedMotion(framerMotion.h4),
  h5: withReducedMotion(framerMotion.h5),
  h6: withReducedMotion(framerMotion.h6),
  a: withReducedMotion(framerMotion.a),
  button: withReducedMotion(framerMotion.button),
  img: withReducedMotion(framerMotion.img),
  ul: withReducedMotion(framerMotion.ul),
  ol: withReducedMotion(framerMotion.ol),
  li: withReducedMotion(framerMotion.li),
  section: withReducedMotion(framerMotion.section),
  article: withReducedMotion(framerMotion.article),
  header: withReducedMotion(framerMotion.header),
  footer: withReducedMotion(framerMotion.footer),
  nav: withReducedMotion(framerMotion.nav),
  main: withReducedMotion(framerMotion.main),
  form: withReducedMotion(framerMotion.form),
  input: withReducedMotion(framerMotion.input),
  textarea: withReducedMotion(framerMotion.textarea),
  label: withReducedMotion(framerMotion.label),
  svg: withReducedMotion(framerMotion.svg),
  path: withReducedMotion(framerMotion.path),
  circle: withReducedMotion(framerMotion.circle),
  rect: withReducedMotion(framerMotion.rect),
  line: withReducedMotion(framerMotion.line),
  polyline: withReducedMotion(framerMotion.polyline),
  polygon: withReducedMotion(framerMotion.polygon),
  g: withReducedMotion(framerMotion.g),
} as typeof framerMotion;
