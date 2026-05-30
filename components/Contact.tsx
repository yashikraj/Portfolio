"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity, Mail, MapPin, MessageCircle } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const particleDots = [
  { id: 1, x: "10%", y: "18%" },
  { id: 2, x: "24%", y: "64%" },
  { id: 3, x: "46%", y: "28%" },
  { id: 4, x: "62%", y: "72%" },
  { id: 5, x: "78%", y: "22%" },
  { id: 6, x: "90%", y: "52%" },
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

const Contact = () => {
  return (
    <FadeIn>
      <section id="contact" className="relative w-full px-4 pb-20 pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(99,102,241,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.2)_1px,transparent_1px)] bg-[size:28px_28px]" />
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
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Get In Touch</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Open to collaborations, ML projects, research discussions and opportunities.
            </p>
          </div>

          <motion.div
            className="flex justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={item}
              className="group relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-xl"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono tracking-[0.2em] text-indigo-400">CONTACT CHANNEL</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Let&apos;s Build Something Interesting
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400">
                    Always open to discussing machine learning, backend systems, research ideas and collaborations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Open for opportunities",
                    "Open to collaborations",
                    
                  ].map((chip) => (
                    <motion.div
                      key={chip}
                      variants={item}
                      whileHover={{ y: -2, scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-md border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_10px_rgba(99,102,241,.2)]"
                    >
                      {chip}
                    </motion.div>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.a
                    variants={item}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    href="mailto:yashikraj.ml@gmail.com"
                    className="group/card flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-4 text-sm text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_12px_rgba(99,102,241,.18)]"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover/card:scale-110" />
                      yashikraj.ml@gmail.com
                    </span>
                    <span className="text-xs text-zinc-500">Email</span>
                  </motion.a>

                  <motion.a
                    variants={item}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    href="https://wa.me/919840094375"
                    target="_blank"
                    rel="noreferrer"
                    className="group/card flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-4 text-sm text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_12px_rgba(99,102,241,.18)]"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover/card:scale-110" />
                      +91 9840094375
                    </span>
                    <span className="text-xs text-zinc-500">WhatsApp</span>
                  </motion.a>

                  <motion.div
                    variants={item}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group/card flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-4 text-sm text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_12px_rgba(99,102,241,.18)]"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover/card:scale-110" />
                      Chennai, India
                    </span>
                    <span className="text-xs text-zinc-500">Location</span>
                  </motion.div>

                  <motion.div
                    variants={item}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group/card flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-4 text-sm text-zinc-300 transition-all hover:border-indigo-500 hover:shadow-[0_0_12px_rgba(99,102,241,.18)]"
                  >
                    <span className="flex items-center gap-3">
                      <Activity className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover/card:scale-110" />
                      Active
                    </span>
                    <span className="text-xs text-zinc-500">Status</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-10 flex items-center justify-between text-xs text-zinc-500">
            <span>Open for opportunities</span>
            <span className="flex items-center gap-2">
              <span className="h-px w-16 bg-zinc-800" />
              <motion.span
                className="h-2 w-2 rounded-full bg-indigo-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <span className="h-px w-16 bg-zinc-800" />
            </span>
            <span>Built &amp; Designed by Yashik</span>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Contact;