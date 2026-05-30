"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalSequence = [
  { command: "whoami", output: "Izumi", delay: 1000 },
  { command: "skills", output: "React, Next.js, Spring Boot, Python", delay: 2000 },
  { command: "currently_building", output: "WhatsApp Cafe Ordering System", delay: 3000 },
  { command: "status", output: "Learning. Building. Improving.", delay: 4000 },
];

const FakeTerminal = () => {
  const [lines, setLines] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const addLine = (index: number) => {
      if (index >= terminalSequence.length) return;

      const { command, output, delay } = terminalSequence[index];
      
      setLines(prev => [
        ...prev,
        <div key={`${index}-command`} className="flex items-center">
          <span className="text-cyan-400">&gt; </span>
          <span className="ml-2">{command}</span>
        </div>
      ]);

      setTimeout(() => {
        setLines(prev => [
          ...prev,
          <div key={`${index}-output`} className="ml-2">{output}</div>,
          <div key={`${index}-spacer`} className="h-4" />
        ]);
        timeoutId = setTimeout(() => addLine(index + 1), 500);
      }, 500);
    };

    timeoutId = setTimeout(() => addLine(0), 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full max-w-lg mx-auto rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20"
    >
      <div className="h-8 bg-zinc-800 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4 font-mono text-sm text-zinc-300 h-72 overflow-y-auto">
        {lines}
        <div className="flex items-center">
            <span className="text-cyan-400">&gt; </span>
            <motion.div
                className="w-2 h-4 bg-cyan-400 ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </div>
      </div>
    </motion.div>
  );
};

export default FakeTerminal;
