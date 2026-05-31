"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

const particleDots = [
  { id: 1, x: "8%", y: "18%" },
  { id: 2, x: "22%", y: "52%" },
  { id: 3, x: "36%", y: "28%" },
  { id: 4, x: "48%", y: "66%" },
  { id: 5, x: "62%", y: "22%" },
  { id: 6, x: "72%", y: "48%" },
  { id: 7, x: "84%", y: "30%" },
  { id: 8, x: "90%", y: "68%" },
];

const systemLines = [
  "STATUS: ACTIVE",
  "LEARNING: MACHINE LEARNING",
  "MODE: BUILD",
  "LOCATION: CHENNAI",
];

const focusAreas = [
  "Python",
  "Machine Learning",
  "React",
  "Scikit-learn",
  "Data Analytics",
  "Backend Development",
  "Problem Solving",
  "Product Thinking",
];

const statusItems = [
  "Training ML intuition",
  "Sharpening DSA thinking",
  "Building production habits",
  "Experimenting beyond tutorials",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const About = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-12">
      <div className="pointer-events-none absolute inset-0">
        {particleDots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400/40"
            style={{ left: dot.x, top: dot.y }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6 + dot.id, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-xs tracking-widest text-indigo-400 font-mono">
            02 ARCHIVE_002
          </p>
          <h2 className="mt-3 text-5xl font-bold text-white">About &amp; Journey</h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs uppercase tracking-widest text-zinc-400 space-y-2 text-left md:text-right"
        >
          {systemLines.map((line) => (
            <motion.p key={line} variants={itemVariants}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.12)]"
        >
          <div className="flex items-center justify-between text-xs text-indigo-400 font-mono">
            <span>ABOUT_ME</span>
            <span>[BIO_DATA]</span>
          </div>
          <p className="mt-4 text-zinc-300 leading-7">
            "I enjoy building practical systems that solve real-world problems and turning ideas into products.
            My interests currently revolve around machine learning, backend development, and experimenting with projects beyond tutorials.
            Most of what I build starts with curiosity and ends with learning something new."
          </p>

          <div className="mt-6">
            <p className="text-xs tracking-widest text-zinc-400 font-mono">
              FOCUS_AREAS
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <motion.span
                  key={area}
                  variants={itemVariants}
                  whileHover={{ y: -2, boxShadow: "0 0 12px rgba(99,102,241,0.2)" }}
                  className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-300"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl p-6"
          >
            <div className="flex items-center gap-2 text-indigo-400">
              <GraduationCap className="h-4 w-4" />
              <p className="text-xs font-mono tracking-widest">EDUCATION</p>
            </div>
            <p className="mt-3 text-zinc-300 font-semibold">Bachelor of Technology</p>
            <p className="text-zinc-300">Computer Science Engineering</p>
            <p className="mt-2 text-zinc-400">SRM University, Chennai</p>
            <p className="text-zinc-500">2023 – 2027</p>
            <p className="mt-4 text-sm text-zinc-400">
              Building strong foundations through projects, experimentation and practical learning.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl p-6"
          >
            <p className="text-xs font-mono tracking-widest text-indigo-400">CURRENT_STATUS</p>
            <div className="mt-4 space-y-3">
              {statusItems.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-indigo-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "PROJECTS", value: "7+" },
          { label: "FOCUS", value: "Machine Learning" },
          { label: "STACK", value: "Python + React" },
          { label: "STATUS", value: "Active" },
        ].map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 0 16px rgba(99,102,241,0.18)" }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-xl p-4 text-center"
          >
            <p className="text-xs font-mono tracking-widest text-indigo-400">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;