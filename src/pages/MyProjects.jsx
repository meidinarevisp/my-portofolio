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
        whileHover={{ y: -12 }}
        className="group relative bg-white/80 dark:bg-gray-900/80 rounded-3xl overflow-hidden backdrop-blur-sm border border-pink-200/50 dark:border-pink-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 dark:hover:shadow-pink-900/20 hover:border-pink-300/80 dark:hover:border-pink-700/50"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-rose-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:via-rose-500/5 group-hover:to-purple-500/5 transition-all duration-500 z-10 pointer-events-none" />

        {/* Image Container */}
        <div className="relative overflow-hidden h-64">
          <Motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Shimmer Effect */}
          <Motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />

          {/* Tags Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            {project.tags.map((tag, idx) => (
              <Motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 text-pink-700 dark:text-pink-300 backdrop-blur-md shadow-lg border border-pink-200/50 dark:border-pink-800/50"
              >
                {tag}
              </Motion.span>
            ))}
          </div>

          {/* Number Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white font-bold text-lg shadow-lg z-20">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4 z-20">
          {/* Title */}
          <Motion.h3
            whileHover={{ x: 5 }}
            className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300"
          >
            {project.title}
          </Motion.h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-300 dark:via-pink-700 to-transparent" />

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Motion.a
              href={`/study-case/${project.id}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 rounded-full hover:shadow-lg hover:shadow-pink-500/50 dark:hover:shadow-pink-900/50 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Study Case</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Motion.a>

            <Motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center px-5 py-3 text-sm font-bold border-2 border-pink-600 dark:border-pink-500 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Visit
                <svg
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Motion.a>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <Motion.div
          animate={{
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-8 -right-8 w-24 h-24 border-4 border-pink-200/30 dark:border-pink-800/30 rounded-full"
        />
        <Motion.div
          animate={{
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-rose-200/30 dark:border-rose-800/30 rounded-full"
        />
      </Motion.div>
    );
  };

  return (
    <section
      id="projects-page"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pink-50/50 via-white to-rose-50/30 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-700"
    >
      {/* Animated Background Elements */}
      <Motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl"
      />
      <Motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl"
      />
      <Motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/15 to-pink-500/15 dark:from-rose-600/8 dark:to-pink-700/8 rounded-full blur-3xl"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDExMywgMTMzLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 dark:opacity-20" />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <Motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 space-y-6"
        >
          {/* Badge */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border border-pink-200/50 dark:border-pink-800/50 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/10 backdrop-blur-md"
          >
            <Motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400"
            />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </Motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            All My{" "}
            <Motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
              className="relative inline-block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Projects
              {/* Decorative underline */}
              <Motion.div
                animate={{
                  scaleX: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 rounded-full"
              />
            </Motion.span>
          </h2>

          {/* Description */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of projects I've built with passion and
            precision. From concept to deployment, each one tells a unique story
            of innovation and problem-solving.
          </Motion.p>

          {/* Stats */}
        </Motion.div>

        {/* PROJECT GRID */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-pink-600 dark:text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No Projects Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay tuned! Amazing projects are coming soon.
            </p>
          </Motion.div>
        )}
      </div>
    </section>
  );
}
