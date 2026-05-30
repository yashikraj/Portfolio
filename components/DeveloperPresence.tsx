"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeIn from "./ui/FadeIn";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr:false
  }
);
const socialCards = [
  {
    label: "GITHUB",
    title: "GitHub",
    username: "yashikraj",
    subtitle: "yashikraj",
    href: "https://github.com/yashikraj",
    Icon: FaGithub,
  },
  {
    label: "LINKEDIN",
    title: "LinkedIn",
    username: "yashik-raj",
    subtitle: "Yashik Raj",
    href: "https://www.linkedin.com/in/yashik-raj",
    Icon: FaLinkedin,
  },
];

const microDots = [
  { id: 1, x: "14%", y: "24%" },
  { id: 2, x: "28%", y: "62%" },
  { id: 3, x: "52%", y: "32%" },
  { id: 4, x: "66%", y: "70%" },
  { id: 5, x: "82%", y: "40%" },
];

const DeveloperPresence = () => {
  return (
    <FadeIn>
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          Developer Presence
        </h2>

        <p className="text-lg text-zinc-400 text-center mb-12">
          Explore my developer journey and online presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-left backdrop-blur-xl transition-all hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,.15),0_0_60px_rgba(59,130,246,.08)]"
            >
              <div className="absolute inset-0 pointer-events-none">
                {microDots.map((dot) => (
                  <motion.span
                    key={`${card.title}-${dot.id}`}
                    className="absolute h-1 w-1 rounded-full bg-indigo-500/30"
                    style={{ left: dot.x, top: dot.y }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ repeat: Infinity, duration: 5 + dot.id }}
                  />
                ))}
              </div>

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">
                    {card.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{card.subtitle}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-black/30 text-zinc-200 transition-transform duration-300 group-hover:scale-110">
                  <card.Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="relative mt-6 flex items-center justify-between text-xs text-zinc-500">
                <span className="rounded-md border border-zinc-800 bg-black/30 px-2 py-1">
                  @{card.username}
                </span>
                <span className="flex items-center gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Open profile
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </motion.a>
          ))}

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl md:col-span-2 transition-all hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,.15),0_0_60px_rgba(59,130,246,.08)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">GITHUB ACTIVITY</p>
                <h3 className="mt-4 text-2xl font-bold text-white">GitHub Activity</h3>
                <p className="mt-2 text-sm text-zinc-400">Live contribution data</p>
              </div>
            </div>

            <div className="
overflow-x-auto
pb-6
mb-2
pr-2
scrollbar-thin
scrollbar-track-transparent
scrollbar-thumb-zinc-700
hover:scrollbar-thumb-zinc-500
">
  <GitHubCalendar
    username="yashikraj"
    blockSize={13}
    blockMargin={5}
    fontSize={14}
  />
</div>
          </motion.div>

          <motion.a
  href="/resume-view"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -6, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="
    group relative overflow-hidden rounded-2xl
    border border-zinc-800
    bg-zinc-900/40
    p-6 text-left
    backdrop-blur-xl md:col-span-2
    transition-all
    hover:border-indigo-500/60
    hover:shadow-[0_0_30px_rgba(59,130,246,.15),0_0_60px_rgba(59,130,246,.08)]
  "
>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
  </div>

  <div className="relative flex items-center justify-between">
    <div>
      <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">
        RESUME
      </p>

      <h3 className="mt-4 text-2xl font-bold text-white">
        Resume
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        View Resume
      </p>
    </div>

    <div className="
      flex h-11 w-11 items-center justify-center
      rounded-xl border border-zinc-800
      bg-black/30 text-zinc-200
      transition-all duration-300
      group-hover:scale-110
      group-hover:border-blue-500
      group-hover:shadow-[0_0_20px_rgba(59,130,246,.4)]
    ">
      <FileText className="h-5 w-5" />
    </div>
  </div>
</motion.a>
        </div>
      </section>
    </FadeIn>
  );
};

export default DeveloperPresence;