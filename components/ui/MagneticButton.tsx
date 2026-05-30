"use client";

import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const MagneticButton = ({
  children,
  className,
  ...props
}: MagneticButtonProps) => {
  return (
    <motion.button
      className={`relative ${className}`}
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;