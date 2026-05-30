"use client";

import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import FloatingParticles from "./FloatingParticles";

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  const gridRef = useRef<HTMLDivElement>(null);
  useAnimationFrame((t) => {
      if (gridRef.current) {
          gridRef.current.style.transform = `translateY(${15 * Math.sin(t / 4000)}px) translateX(${15 * Math.cos(t / 4000)}px)`;
      }
  });

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1: Slow Gradient Movement */}
      <motion.div 
        className="absolute inset-0"
        animate={{
            backgroundImage: [
                "radial-gradient(circle at 20% 20%, rgba(109, 40, 217, 0.2), transparent 40%)",
                "radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.2), transparent 40%)",
                "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.2), transparent 40%)",
                "radial-gradient(circle at 20% 80%, rgba(109, 40, 217, 0.2), transparent 40%)",
                "radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.2), transparent 40%)",
                "radial-gradient(circle at 20% 20%, rgba(109, 40, 217, 0.2), transparent 40%)",
            ]
        }}
        transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }}
      />

      {/* Layer 2: Animated Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Layer 3: Mouse Reactive Spotlight */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at ${smoothMouse.x}px ${smoothMouse.y}px, rgba(255, 255, 255, 0.1), transparent 20%)`,
          }}
        />
      )}

      {/* Layer 4: Floating Particles */}
      <FloatingParticles />

      {/* Layer 5: Noise Texture */}
      <div className="absolute inset-0 w-full h-full opacity-[0.02] bg-[url('/noise.png')] animate-pan" />
    </div>
  );
};

export default AnimatedBackground;
