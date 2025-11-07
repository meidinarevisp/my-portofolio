// MyProjects.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function MyProjects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects-page"
      className="relative py-24 overflow-hidden transition-colors duration-700 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      {/* TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* FLOATING BLUR */}
      <div className="absolute top-30 left-10 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-15 right-10 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center mb-12 text-center gap-4"
        >
          <h4 className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold">
            Projects
          </h4>
          <h2 className="text-4xl font-extrabold text-pink-900 dark:text-rose-200">
            All My{" "}
            <span className="text-pink-600 dark:text-rose-400">Projects</span>
          </h2>
          <p className="text-sm text-pink-800 dark:text-pink-200 max-w-xl">
            A complete list of projects I’ve worked on, from small experiments
            to full-fledged applications.
          </p>
        </Motion.div>

        {/* GRID - Semua project */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
