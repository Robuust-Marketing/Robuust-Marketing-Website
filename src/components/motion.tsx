"use client";

/**
 * Re-export framer-motion components for use in client components.
 * This allows server components to dynamically import these without
 * including framer-motion in the initial bundle.
 */
export { motion, AnimatePresence } from "framer-motion";
export type { Variants, Transition } from "framer-motion";
