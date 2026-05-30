"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Cpu,
  GitBranch,
  Globe,
  Wrench,
  FileCode,
} from "lucide-react";

const particleDots = [
  { id: 1, x: "8%", y: "20%" },
  { id: 2, x: "22%", y: "60%" },
  { id: 3, x: "38%", y: "30%" },
  { id: 4, x: "52%", y: "70%" },
  { id: 5, x: "66%", y: "24%" },
  { id: 6, x: "78%", y: "46%" },
  { id: 7, x: "90%", y: "32%" },
];

const skillCards = [
  {
    title: "LANGUAGES",
    items: [
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Terminal },
      { name: "SQL", icon: Database },
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Code2 },
    ],
  },

  {
    title: "FRAMEWORKS & LIBRARIES",
    items: [
      { name: "React.js", icon: Cpu },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "Scikit-learn", icon: Cpu },
    ],
  },

  {
    title: "TOOLS",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Globe },
      { name: "VS Code", icon: Terminal },
    ],
  },

  {
    title: "CORE AREAS",
    items: [
      { name: "Machine Learning", icon: Cpu },
      { name: "Data Analysis", icon: Database },
      { name: "Backend Development", icon: Wrench },
      { name: "Problem Solving", icon: Code2 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* background particles */}

      <div className="absolute inset-0 pointer-events-none">

        {particleDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/40"
            style={{
              left: dot.x,
              top: dot.y,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + dot.id,
              repeat: Infinity,
            }}
          />
        ))}

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* heading */}

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          <div>

            <h2 className="text-5xl font-bold text-white">
              Skills & Technologies
            </h2>

          </div>

          <p className="max-w-sm text-zinc-400 text-sm md:text-right">
            Technologies I use to build products and learn through building.
          </p>

        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {skillCards.map((card) => (

            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/40
              backdrop-blur-xl
              p-6
              hover:border-indigo-500/50
              transition-all
              duration-300
            "
            >

              <h3 className="
              text-xs
              font-mono
              tracking-[0.25em]
              text-indigo-400
            ">
                {card.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {card.items.map((item) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.name}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-800
                      bg-black/30
                      px-3
                      py-2
                      text-sm
                      text-zinc-300
                      cursor-pointer
                      overflow-hidden
                    "
                    >

                      <span className="
                      absolute
                      inset-0
                      opacity-0
                      bg-indigo-500/5
                      blur-md
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    " />

                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.15,
                        }}
                        className="
                        relative
                        z-10
                        text-indigo-400
                        transition-all
                        group-hover:text-indigo-300
                      "
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>

                      <span className="
                      relative
                      z-10
                      transition-all
                      group-hover:text-white
                    ">
                        {item.name}
                      </span>

                      <span className="
                      absolute
                      -top-1
                      -right-1
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-indigo-400
                      opacity-0
                      group-hover:opacity-100
                      group-hover:scale-150
                      transition-all
                    " />

                      <span className="
                      absolute
                      -bottom-1
                      -left-1
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-indigo-400
                      opacity-0
                      group-hover:opacity-100
                      group-hover:scale-150
                      transition-all
                    " />

                    </motion.div>

                  );
                })}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}