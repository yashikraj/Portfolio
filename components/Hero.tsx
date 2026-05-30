"use client";

import AnimatedText from "./ui/AnimatedText";
import HeroTerminal from "./HeroTerminal";

const roles = [
  "Software Developer",
  "Machine Learning Engineer",
  "Backend Developer",
  "Building Practical Systems",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        
        <div className="grid lg:grid-cols-[1.2fr_1fr] items-center gap-20 min-h-[85vh]">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block text-white">Hi, I&apos;m</span>
              <span className="block whitespace-nowrap">
                <span
                  className="
                  inline-block
                  bg-gradient-to-r from-white via-zinc-100 to-slate-300
                  bg-clip-text text-transparent
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:[text-shadow:0_0_15px_rgba(99,102,241,0.25)]
                  "
                >
                  Yashik Raj S
                </span>{" "}
                <span>👋</span>
              </span>
            </h1>

            <div className="mt-6 text-xl text-indigo-400 font-medium min-h-[35px]">
              <AnimatedText phrases={roles} />
            </div>

            <p className="mt-4 text-zinc-500 text-sm">
              404: Idle Mode Not Found
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="#projects"
                className="
                px-8 py-4
                rounded-full
                text-white
                font-semibold
                bg-indigo-500
                hover:bg-indigo-400
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
                transition-all duration-300
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                px-8 py-4
                rounded-full
                border
                border-white/10
                bg-zinc-900/40
                backdrop-blur-md
                hover:bg-zinc-800/60
                hover:scale-105
                transition-all duration-300
                "
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT SIDE TERMINAL */}

          <div className="flex justify-center lg:justify-end">
            <HeroTerminal />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;