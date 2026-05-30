"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalSequence = [
  { text: "yashik@dev:~$ whoami", type: "command" },
  { text: "Yashik Raj S", type: "result" },
  { text: "Machine Learning Developer", type: "result" },
  { text: "yashik@dev:~$ ls projects", type: "command" },
  { text: "Network-Intrusion-Detection/", type: "result" },
  { text: "Phishing-Detection-System/", type: "result" },
  { text: "Izumi-Inventory/", type: "result" },
  { text: "yashik@dev:~$ cat currently_learning.txt", type: "command" },
  { text: "Machine Learning", type: "result" },
  { text: "Backend Development", type: "result" },
  { text: "Building Better Products", type: "result" },
  { text: "yashik@dev:~$ systemctl status yashik", type: "command" },
  { text: "● Learning", type: "result" },
  { text: "● Building", type: "result" },
  { text: "● Improving", type: "result" },
  { text: "yashik@dev:~$", type: "command" },
];

const HeroTerminal = () => {
  const [lines, setLines] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    let elapsed = 500;
    const addLine = (index: number) => {
      if (index >= terminalSequence.length) {
        return;
      }

      const { text, type } = terminalSequence[index];

      setLines((prev) => {
        const className =
          type === "command" ? "text-green-300" : "text-green-200/70";

        return [
          ...prev,
          <div key={index} className={className}>
            {text}
          </div>,
        ];
      });

      const timeoutId = setTimeout(() => addLine(index + 1), 700);
      timeouts.push(timeoutId);
    };

    const startId = setTimeout(() => addLine(0), 500);
    timeouts.push(startId);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <motion.div
      className="w-full max-w-lg"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-full rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl shadow-green-500/10 p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-xs text-zinc-500 ml-auto">yashik@dev: ~</p>
        </div>
        <div className="font-mono text-sm space-y-0.5 text-green-200/80">
          {lines}
          <motion.span
            className="text-green-300"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(transparent_0%,rgba(34,197,94,0.06)_50%,transparent_100%)] opacity-40" />
      </div>
    </motion.div>
  );
};

export default HeroTerminal;
