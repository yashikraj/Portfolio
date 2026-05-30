"use client";
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './ui/FadeIn';

const particleDots = [
  { id: 1, x: '12%', y: '16%' },
  { id: 2, x: '28%', y: '62%' },
  { id: 3, x: '44%', y: '28%' },
  { id: 4, x: '58%', y: '72%' },
  { id: 5, x: '72%', y: '22%' },
  { id: 6, x: '84%', y: '44%' },
  { id: 7, x: '92%', y: '58%' },
];

const timeline = [
  {
    year: '2024',
    title: 'Machine Learning focus',
    tags: ['Machine Learning', 'Backend', 'Foundations'],
    points: [
      'Started focusing deeply on Machine Learning and practical software development.',
      'Built stronger foundations in backend development and software concepts.',
    ],
  },
  {
    year: '2025',
    title: 'Project expansion',
    tags: ['Projects', 'Hands-on', 'Python'],
    points: [
      'Built: Phishing Detection System',
      'Built: Izumi Inventory',
      'Expanded hands-on experience through project-based learning.',
    ],
  },
  {
    year: '2026',
    title: 'Applied security research',
    tags: ['Research', 'RouteX', 'IEEE'],
    points: [
      'Built: Network Intrusion Detection System',
      'Working on RouteX concept',
      'TrustVox selected for IEEE publication process',
    ],
  },
];

const hackathons = [
  {
    title: "Hack MALENADU '26",
    type: 'National Hackathon',
    location: 'PESITM',
    track: 'Predictive Maintenance Agent',
    status: 'Attended',
    accent: 'from-emerald-400/20 via-transparent to-transparent',
    glow: 'shadow-[0_0_40px_-12px_rgba(16,185,129,0.7)]',
  },
  {
    title: 'HackVerse 2024',
    type: 'Hackathon',
    location: 'SRM Chennai',
    track: 'Open Track',
    status: 'Attended',
    accent: 'from-sky-400/20 via-transparent to-transparent',
    glow: 'shadow-[0_0_40px_-12px_rgba(56,189,248,0.6)]',
  },
];

const certifications = [
  {
    group: 'Web Development',
    items: [
      {
        title: 'Complete Full Stack Web Development Bootcamp',
        provider: 'Udemy',
      },
      {
        title: '100 Days of Code: Complete Python Bootcamp',
        provider: 'Udemy',
      },
    ],
  },
  {
    group: 'Machine Learning & Data Science',
    items: [
      {
        title: 'Machine Learning Certification',
        provider: 'NPTEL',
      },
      {
        title: 'Data Science Certification',
        provider: 'DeepLearning',
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    borderColor: 'rgba(39,39,42,1)',
  },
  hover: {
    y: -5,
    scale: 1.02,
    borderColor: 'rgba(99,102,241,.55)',
    boxShadow: '0 0 25px rgba(59,130,246,.15), 0 0 50px rgba(59,130,246,.06)',
    transition: {
      duration: 0.3,
    },
  },
};

const Journey = () => {
  return (
    <FadeIn>
      <section className="relative w-full px-4 pb-20 pt-16">
        <div className="absolute inset-0 pointer-events-none">
          {particleDots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute h-1 w-1 rounded-full bg-indigo-500/30"
              style={{ left: dot.x, top: dot.y }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 6 + dot.id }}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Journey &amp; Milestones
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Journey &amp; Milestones
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Hackathons, certifications, research, and continuous learning.
            </p>
          </div>

          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-500/30" />

            <div className="space-y-8">
              {timeline.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={step.year}
                    variants={item}
                    className="relative"
                  >
                    <motion.span
                      className="absolute left-1/2 top-6 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                    />
                    <div
                      className={`relative w-full lg:w-[calc(50%-28px)] ${
                        isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                      }`}
                    >
                      <div
                        className={`absolute top-6 hidden h-px w-6 bg-indigo-500/30 lg:block ${
                          isLeft ? 'right-0' : 'left-0'
                        }`}
                      />
                      <motion.div
                        variants={cardVariants}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl"
                      >
                        <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">MILESTONE</p>
                        <h3 className="mt-4 text-2xl font-bold text-white">{step.year}</h3>
                        <p className="mt-3 text-sm text-zinc-400">{step.title}</p>

                        <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                          {step.points.map((point) => (
                            <li key={point} className="leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <div
                              key={tag}
                              className="rounded-md border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_10px_rgba(99,102,241,.2)]"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl"
            >
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">HACKATHONS</p>
                    <h3 className="mt-4 text-2xl font-bold text-white">Hackathons</h3>
                  </div>
                  <span className="text-xs text-zinc-500">Attended</span>
                </div>

                <div className="space-y-3">
                  {hackathons.map((event) => (
                    <motion.div
                      key={event.title}
                      whileHover={{
                        y: -3,
                        scale: 1.02,
                        borderColor: 'rgba(99,102,241,.5)',
                        backgroundColor: 'rgba(99,102,241,.05)',
                        boxShadow: '0 0 20px rgba(59,130,246,.10), 0 0 35px rgba(59,130,246,.06)',
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderColor: 'rgba(39,39,42,1)',
                      }}
                      className="rounded-xl border border-zinc-800 bg-black/30 p-4"
                    >
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                              {event.type}
                            </p>
                            <p className="mt-1 text-base font-semibold text-white">
                              {event.title}
                            </p>
                          </div>
                          <span className="rounded-full border border-zinc-800 bg-black/30 px-2 py-1 text-[10px] text-zinc-300">
                            {event.status}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                          <span>{event.location}</span>
                          <span>{event.track}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl"
            >
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">CERTIFICATIONS</p>
                    <h3 className="mt-4 text-2xl font-bold text-white">Certifications</h3>
                  </div>
                  <span className="text-xs text-zinc-500">Verified</span>
                </div>

                {certifications.map((group) => (
                  <div key={group.group} className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((cert) => (
                        <motion.div
                          key={cert.title}
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                            borderColor: 'rgba(99,102,241,.5)',
                            backgroundColor: 'rgba(99,102,241,.05)',
                            boxShadow: '0 0 20px rgba(59,130,246,.10), 0 0 35px rgba(59,130,246,.06)',
                          }}
                          transition={{ duration: 0.25 }}
                          style={{
                            cursor: 'pointer',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderColor: 'rgba(39,39,42,1)',
                          }}
                          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                        >
                          <span>{cert.title}</span>
                          <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                            {cert.provider}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl"
            >
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">
                      Research &amp; Publications
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-white">TrustVox</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-amber-200">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                    </span>
                    Pending
                  </div>
                </div>
                <p className="text-sm text-zinc-300">IEEE — Publication Pending</p>
                <p className="text-sm text-zinc-300">
                  Research work selected and currently progressing through publication stages.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['IEEE', 'Security', 'Research'].map((tag) => (
                    <motion.div
                      key={tag}
                      whileHover={{
  y: -3,
  scale: 1.06,
  borderColor: "rgba(99,102,241,.55)",
  backgroundColor: "rgba(79,70,229,.06)",
  boxShadow: "0 0 20px rgba(59,130,246,.14)",
}}
                      transition={{ duration: 0.25 }}
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderColor: 'rgba(39,39,42,1)',
                      }}
                      className="rounded-md border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
  variants={cardVariants}
  initial="rest"
  animate="rest"
  whileHover="hover"
  className="
  group
  relative
  rounded-2xl
  border
  border-zinc-800
  bg-zinc-900/40
  p-6
  backdrop-blur-xl
  "
>
  <div className="relative space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p
          className="
          text-xs
          font-mono
          tracking-[0.2em]
          text-indigo-400
          "
        >
          Currently Exploring
        </p>

        <h3 className="mt-4 text-2xl font-bold text-white">
          Currently Exploring
        </h3>
      </div>

      <span className="text-xs text-zinc-500">
        Now
      </span>
    </div>

    <div className="flex flex-wrap gap-2">
      {[
        "Backend Development",
        "Blender Animations",
        "System Design",
        "Building Real Products",
      ].map((itemLabel) => (
        <motion.div
          key={itemLabel}
          whileHover={{
            y: -3,
            scale: 1.06,
            borderColor: "rgba(99,102,241,.55)",
            backgroundColor:
              "rgba(79,70,229,.06)",
            boxShadow:
              "0 0 20px rgba(59,130,246,.14)",
          }}
          transition={{
            duration: .25,
            ease: "easeOut"
          }}
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderColor: 'rgba(39,39,42,1)',
          }}
          className="
          rounded-md
          border
          border-zinc-800
          bg-black/30
          px-3
          py-1
          text-xs
          text-zinc-300
          cursor-pointer
          "
        >
          {itemLabel}
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Journey;