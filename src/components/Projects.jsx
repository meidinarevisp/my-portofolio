// Projects.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const latestProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden transition-colors duration-700 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      {/* TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* FLOATING BLUR */}
      <div className="absolute top-30 left-10 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-15 right-10 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* CONTENT */}
      <Motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        {/* HEADER */}
        <Motion.div
          variants={fadeUp}
          className="flex justify-between items-center mb-12 flex-wrap gap-6"
        >
          <div>
            <h4 className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold">
              Projects
            </h4>
            <h2 className="text-4xl font-extrabold text-pink-900 dark:text-rose-200">
              My Featured{" "}
              <span className="text-pink-600 dark:text-rose-400">Projects</span>
            </h2>
            <p className="text-sm text-pink-800 dark:text-pink-200">
              A selection of my latest work.
            </p>
          </div>

          <Motion.a
            href="/projects"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-pink-700 dark:bg-pink-900 text-white font-sans font-normal shadow transition-all relative z-10 hover:bg-pink-600 dark:hover:bg-pink-800"
            whileHover={{ scale: 1.05 }}
          >
            <span>View All Projects</span>
            <Motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-800 dark:bg-pink-950 transition-colors duration-300 group-hover:bg-pink-900 dark:group-hover:bg-pink-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.75.75 0 0 1 .75-.75h9.19L8.22 4.53a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.72-2.72H1.75A.75.75 0 0 1 1 8z" />
              </svg>
            </Motion.span>
          </Motion.a>
        </Motion.div>

        {/* GRID - 3 PROJECT TERBARU */}
        <Motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}
