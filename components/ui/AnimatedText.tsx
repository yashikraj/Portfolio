"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

const AnimatedText = ({ phrases, className }: AnimatedTextProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      if (isDeleting) {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (text.length < currentPhrase.length) {
          setText((prev) => currentPhrase.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <motion.div
        className="w-0.5 h-6 bg-purple-400 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
};

export default AnimatedText;
