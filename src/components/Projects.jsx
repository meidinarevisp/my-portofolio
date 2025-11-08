// Projects.jsx
import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi"; // import icon search

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

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
  };

  const latestProjects = projects.slice(0, 4);
  const currentProject = latestProjects[currentIndex];

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden transition-colors duration-200 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      {/* TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* FLOATING BLUR */}
      <div className="absolute top-28 left-10 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-16 right-10 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* CONTENT */}
      <Motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[74rem] mx-auto px-6 lg:px-8 relative z-10"
      >
        {/* HEADER */}
        <Motion.div
          variants={fadeUp}
          className="flex justify-between items-start mb-12 flex-wrap gap-6"
        >
          <div className="pt-2">
            <h4 className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold">
              Projects
            </h4>
            <h2 className="text-4xl font-extrabold text-pink-900 dark:text-rose-200">
              My Featured{" "}
              <span className="text-pink-600 dark:text-rose-400">Projects</span>
            </h2>
            <p className="text-s mt-1 text-pink-800 dark:text-pink-200">
              Some of my latest work.
            </p>
          </div>

          <Motion.a
            href="/projects"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-pink-700 dark:bg-pink-900 text-white font-sans font-normal shadow transition-all relative z-10 hover:bg-pink-600 dark:hover:bg-pink-800"
          >
            <span>View All Projects</span>
            <Motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-700 dark:bg-pink-700 transition-colors duration-300 group-hover:bg-pink-600 dark:group-hover:bg-pink-500"
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

        {/* SELECTED PROJECT */}
        <Motion.div variants={fadeUp} className="mb-8">
          <AnimatePresence mode="wait">
            <Motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-pink-50 dark:bg-[#1a1a1a] rounded-3xl p-6 shadow-lg border border-pink-100 dark:border-[#2a2a2a] transition-colors duration-200"
            >
              {/* Left Content */}
              <div className="flex flex-col justify-between h-full space-y-6">
                {/* Top: Title */}
                <div className="pt-2">
                  <h4 className="text-3xl font-bold text-pink-950 dark:text-pink-300 transition-colors duration-200">
                    {currentProject.title}
                  </h4>
                  <p className="text-pink-800 dark:text-pink-200 leading-relaxed transition-colors duration-200 mt-2 mr-4 mt-3 text-justify">
                    {currentProject.description}
                  </p>
                </div>

                {/* Bottom: Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
                  {/* Study Case */}
                  <Link
                    to={`/study-case/${currentProject.id}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-pink-700 dark:bg-pink-900 text-rose-100 dark:text-rose-100 font-semibold rounded-full transition-all duration-300 shadow-md hover:bg-pink-600 dark:hover:bg-pink-800 cursor-pointer w-full sm:w-auto text-center"
                  >
                    <span>Study Case</span>
                    <HiOutlineSearch className="w-5 h-5" />
                  </Link>

                  {/* Visit Website */}
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-transparent border-2 border-pink-800 dark:border-pink-400 text-pink-800 dark:text-pink-300 font-semibold rounded-full transition-all duration-300 cursor-pointer hover:bg-pink-100 dark:hover:bg-pink-800/30 w-full sm:w-auto text-center"
                  >
                    <span>Visit Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transform rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7l-10 10M7 7h10v10"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="order-first lg:order-last overflow-hidden rounded-2xl shadow-xl">
                <Motion.img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </Motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {latestProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-pink-800 dark:bg-pink-400"
                    : "w-2 bg-pink-300 dark:bg-pink-700"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
