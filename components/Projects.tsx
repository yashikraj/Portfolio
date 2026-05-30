"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const particleDots = [
  { id: 1, x: "10%", y: "20%" },
  { id: 2, x: "24%", y: "62%" },
  { id: 3, x: "40%", y: "30%" },
  { id: 4, x: "56%", y: "70%" },
  { id: 5, x: "70%", y: "24%" },
  { id: 6, x: "82%", y: "46%" },
  { id: 7, x: "92%", y: "60%" },
];

const projects = [
  {
    title: "NETWORK INTRUSION DETECTION SYSTEM",
    description:
      "Machine learning based system designed to identify suspicious network activity and detect potential security threats.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    github:
      "https://github.com/yashikraj/ML-Based-Network-Anomaly-Detection-System",
  },

  {
    title: "PHISHING DETECTION SYSTEM",
    description:
      "ML powered phishing detection system focused on identifying malicious links and improving security awareness.",
    tech: ["Python", "Classification", "Machine Learning", "Security"],
  },

  {
    title: "IZUMI INVENTORY",
    description:
      "Inventory management system designed for warehouse organization and stock management.",
    tech: ["React", "Database", "Management System", "Backend"],
    github: "https://github.com/yashikraj/Izumi-Inventory",
  },

  {
    title: "ROUTEX",
    status: "IN DEVELOPMENT",
    description:
      "Communication platform concept for long-distance bike riders focused on improving coordination and group travel experiences. Currently in architecture and planning phase.",
    tech: [
      "System Design",
      "UX Research",
      "Real-time Communication",
      "Product Design",
      "Mobile App Concept",
    ],
  },
];

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    borderColor: "rgba(39,39,42,1)",
  },

  hover: {
    y: -8,
    scale: 1.02,
    borderColor: "rgba(99,102,241,.45)",
    boxShadow: "0 0 35px rgba(99,102,241,.14)",

    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 18,
    },
  },
};

const buttonVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },

  hover: {
    scale: 1.1,
    rotate: 6,
    boxShadow:
      "0 0 20px rgba(99,102,241,.35)",

    transition: {
      duration: .3
    }
  }
};

const iconVariants = {
  rest: {
    rotate:0
  },

  hover:{
    rotate:15
  }
};

const Projects = () => {
  return (
    <section className="relative">

      {/* background particles */}

      <div className="absolute inset-0 pointer-events-none">

        {particleDots.map((dot) => (

          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
            style={{
              left: dot.x,
              top: dot.y,
            }}
            animate={{
              opacity: [.2,.6,.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + dot.id,
            }}
          />

        ))}

      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center">

          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>

          <p className="text-zinc-400 text-sm">
            Things I've built, explored and continue improving.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {projects.map((project) => (

            <motion.div
              key={project.title}
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
              backdrop-blur-xl
              p-6
              overflow-hidden
              "
            >

              {/* top right visuals */}

              <div className="absolute top-5 right-5 opacity-60">

                {/* Network */}
                {project.title.includes("NETWORK") && (
                  <motion.div
                    animate={{
                      rotate:[0,3,-3,0]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:5
                    }}
                    className="relative w-16 h-10"
                  >

                    <div className="absolute w-1 h-1 rounded-full bg-indigo-400 top-0 left-2" />
                    <div className="absolute w-1 h-1 rounded-full bg-indigo-400 top-4 left-8" />
                    <div className="absolute w-1 h-1 rounded-full bg-indigo-400 top-1 right-1" />

                    <div className="absolute w-8 h-[1px] bg-indigo-400/30 top-1 left-2 rotate-12" />

                    <div className="absolute w-8 h-[1px] bg-indigo-400/30 top-4 left-6 -rotate-12" />

                  </motion.div>
                )}

                {/* phishing */}

                {project.title.includes("PHISHING") && (

                  <motion.div
                    animate={{
                      scale:[1,.95,1]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:2
                    }}
                    className="text-4xl opacity-40"
                  >
                    🛡️
                  </motion.div>

                )}

                {/* inventory */}

                {project.title.includes("IZUMI") && (

                  <motion.div
                    animate={{
                      y:[0,-3,0]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:2
                    }}
                    className="grid grid-cols-3 gap-1"
                  >

                    {[...Array(9)].map((_,i)=>(

                      <div
                        key={i}
                        className="
                        w-2
                        h-2
                        rounded-sm
                        border
                        border-indigo-500/40
                        "
                      />

                    ))}

                  </motion.div>

                )}

                {/* RouteX */}

                {project.title.includes("ROUTEX") && (

                  <motion.div
                    animate={{
                      scale:[1,1.1,1]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:2
                    }}
                    className="text-green-400 text-3xl"
                  >
                    📡
                  </motion.div>

                )}

              </div>

              <p className="text-xs tracking-[0.2em] font-mono text-indigo-400">
                PROJECT
              </p>

              <h3 className="mt-6 flex items-center flex-wrap gap-3 text-2xl font-bold text-white">

                {project.title}

                {project.status && (

                  <span className="flex items-center gap-2 text-green-400 text-xs">

                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{
                        opacity:[.3,1,.3]
                      }}
                      transition={{
                        duration:1.2,
                        repeat:Infinity
                      }}
                    />

                    {project.status}

                  </span>

                )}

              </h3>

              <p className="mt-8 text-zinc-400 leading-9">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((item)=>(

                  <div
                    key={item}
                    className="
                    px-3
                    py-1
                    rounded-md
                    border
                    border-zinc-800
                    bg-black/30
                    text-xs
                    text-zinc-300
                    transition-all
                    hover:border-indigo-500
                    hover:shadow-[0_0_10px_rgba(99,102,241,.2)]
                    "
                  >
                    {item}
                  </div>

                ))}

              </div>

              {project.github && (

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View Repository"
                  variants={buttonVariants}
                  className="
                  absolute
                  bottom-5
                  right-5
                  h-10
                  w-10
                  rounded-lg
                  border
                  border-zinc-800
                  bg-black/50
                  flex
                  items-center
                  justify-center
                  text-zinc-300
                  hover:text-white
                  hover:border-indigo-500
                  "
                >

                  <motion.span variants={iconVariants}>
                    <FaGithub size={16}/>
                  </motion.span>

                </motion.a>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;