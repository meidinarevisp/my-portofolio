import React from "react";
import { motion as Motion } from "framer-motion";
import projects from "../data/projects";

export default function MyProjects() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // --- Inline ProjectCard Component ---
  const ProjectCard = ({ project, index }) => {
    return (
      <Motion.div
        variants={itemVariants}
        whileHover={{ y: -8 }}
        className="group relative bg-white border-2 sm:border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden"
      >
        {/* Scan line effect */}
        <Motion.div
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent h-20 opacity-0 group-hover:opacity-100 z-30 pointer-events-none"
        />

        {/* Image Container */}
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 border-b-2 border-black">
          <Motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />

          {/* Number Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-black bg-white text-black font-black text-base sm:text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 group-hover:rotate-12 transition-transform duration-300">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Tags Overlay */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 z-20">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <Motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="text-[10px] sm:text-xs font-bold px-2.5 py-1 border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
              >
                {tag}
              </Motion.span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          {/* Title */}
          <Motion.h3
            whileHover={{ x: 3 }}
            className="text-lg sm:text-xl font-black text-black line-clamp-2 uppercase tracking-tight group-hover:tracking-wide transition-all duration-300"
          >
            {project.title}
          </Motion.h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-black/70 line-clamp-2 leading-relaxed font-bold">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-0.5 bg-black" />

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Motion.a
              href={`/study-case/${project.id}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 text-center px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 uppercase tracking-wider"
            >
              Study Case
            </Motion.a>

            <Motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 text-center px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold border-2 border-black text-black bg-white hover:bg-black hover:text-white transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
            >
              <span>Visit</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Motion.a>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Bottom indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Motion.div>
    );
  };

  return (
    <section
      id="projects-page"
      className="relative pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden bg-white transition-colors duration-700"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Geometric Shapes */}
      <Motion.div
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute top-20 left-20 w-32 h-32 border-4 border-black opacity-5 rotate-45"
      />
      <Motion.div
        animate={{
          rotate: [0, -180, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute bottom-32 right-16 w-40 h-40 border-4 border-black opacity-5"
      />
      <Motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-1/2 left-1/4 w-28 h-28 border-4 border-black opacity-5 rounded-full"
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <Motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6"
        >
          {/* Badge */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
              My Portfolio
            </span>
          </Motion.div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase px-4 sm:px-0">
            All My{" "}
            <Motion.span className="relative inline-block">
              Projects
              {/* Decorative underline */}
              <Motion.div
                animate={{
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-black"
              />
            </Motion.span>
          </h2>

          {/* Description */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-black/70 max-w-2xl mx-auto leading-relaxed font-bold px-4 sm:px-6 md:px-0"
          >
            A curated collection of projects I've built with passion and
            precision. From concept to deployment, each one tells a unique story
            of innovation and problem-solving.
          </Motion.p>
        </Motion.div>

        {/* PROJECT GRID */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Motion.div>

        {/* EMPTY STATE */}
        {projects.length === 0 && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32"
          >
            <div className="w-24 h-24 mx-auto mb-6 border-2 border-black bg-white flex items-center justify-center">
              <svg
                className="w-12 h-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-black mb-3 uppercase">
              No Projects Yet
            </h3>
            <p className="text-black/70 font-bold">
              Stay tuned! Amazing projects are coming soon.
            </p>
          </Motion.div>
        )}
      </div>
    </section>
  );
}
