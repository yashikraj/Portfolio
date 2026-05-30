"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "up"
          ? 30
          : direction === "down"
          ? -30
          : 0,
      x:
        direction === "left"
          ? 30
          : direction === "right"
          ? -30
          : 0,
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;