import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");

  // Animation controls
  const titleControls = useAnimation();
  const cardControls = useAnimation();
  const navigationControls = useAnimation();

  // Refs untuk setiap elemen
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const navigationRef = useRef(null);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const newDirection = currentY > lastScrollY.current ? "down" : "up";

      if (scrollDirection.current !== newDirection) {
        scrollDirection.current = newDirection;

        if (newDirection === "down" && inView) {
          titleControls.start("visible");
          cardControls.start("visible");
          navigationControls.start("visible");
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, titleControls, cardControls, navigationControls]);

  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      titleControls.start("visible");
      setTimeout(() => cardControls.start("visible"), 150);
      setTimeout(() => navigationControls.start("visible"), 300);
    }
  }, [inView, titleControls, cardControls, navigationControls]);

  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;
      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const { top, bottom } = rect;
        if (top > screenHeight * 0.7 && bottom > 0) control.start("exit");
      };
      checkExit(navigationRef, navigationControls);
      checkExit(cardRef, cardControls);
      checkExit(titleRef, titleControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [titleControls, cardControls, navigationControls]);

  useEffect(() => {
    const handleReEnter = () => {
      if (scrollDirection.current !== "down" || !inView) return;
      const screenHeight = window.innerHeight;
      const navTop = navigationRef.current?.getBoundingClientRect().top;
      if (navTop < screenHeight * 0.9) {
        titleControls.start("visible");
        cardControls.start("visible");
        navigationControls.start("visible");
      }
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [inView, titleControls, cardControls, navigationControls]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const handleViewAllClick = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  const currentProject = projects[currentIndex];

  // Responsif
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dur = isMobile ? 0.45 : 0.65;

  // --- VARIANTS ---
  const fadeDown = {
    hidden: { opacity: 0, y: isMobile ? -20 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: isMobile ? -20 : -30,
      transition: { duration: dur * 0.7 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: isMobile ? 20 : 30,
      transition: { duration: dur * 0.8 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: dur * 0.7 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 -right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Motion.div
          ref={titleRef}
          variants={fadeDown}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-6 md:mb-8"
        >
          <Motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50 mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide">
              FEATURED WORK
            </span>
          </Motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are a few of the projects I've worked on recently
          </p>
        </Motion.div>

        {/* Main Featured Project Card */}
        <Motion.div
          ref={cardRef}
          variants={scaleIn}
          initial="hidden"
          animate={cardControls}
          className="mb-6 md:mb-8"
        >
          <AnimatePresence mode="wait">
            <Motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="group relative bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#151515] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200 dark:border-gray-800 hover:shadow-pink-500/10 dark:hover:shadow-pink-900/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Image */}
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                    <Motion.img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-2 left-2 md:top-3 md:left-3 px-2.5 py-1 rounded-full bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-white/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                        />
                      </svg>
                      <span className="text-[10px] md:text-xs font-light text-white/85 tracking-[0.07em]">
                        {currentProject.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 flex items-center gap-2 md:gap-3">
                      <div className="text-4xl md:text-5xl font-bold text-white/20">
                        {String(currentIndex + 1).padStart(2, "0")}
                      </div>
                      <div className="h-8 w-0.5 bg-white/30" />
                      <div className="text-xs md:text-sm font-medium text-white/80">
                        {String(projects.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="p-5 md:p-7 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                        {currentProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 md:mb-5 text-justify">
                        {currentProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                        {currentProject.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 md:px-3.5 md:py-1.5 text-xs md:text-sm font-medium bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-900 dark:text-pink-300 rounded-full border border-pink-200 dark:border-pink-800/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <a
                        href={currentProject.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-2.5 text-sm md:text-base bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-0.5"
                      >
                        <span>View Case Study</span>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>

                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-2.5 text-sm md:text-base bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-500 text-gray-900 dark:text-white font-semibold rounded-full transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:-translate-y-0.5"
                      >
                        <span>Live Site</span>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-bl from-pink-500/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-tr from-rose-500/10 to-transparent pointer-events-none" />
              </div>
            </Motion.div>
          </AnimatePresence>
        </Motion.div>

        {/* Navigation Controls */}
        <Motion.div
          ref={navigationRef}
          variants={fadeUp}
          initial="hidden"
          animate={navigationControls}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6"
        >
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <button
              onClick={handlePrev}
              className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              aria-label="Previous project"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 flex items-center justify-center transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:-translate-y-0.5"
              aria-label="Next project"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 md:gap-3 order-1 sm:order-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 md:w-12 bg-gradient-to-r from-pink-600 to-rose-600"
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-pink-400 dark:hover:bg-pink-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          <Motion.button
            onClick={handleViewAllClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors order-3"
          >
            <span>View All</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Motion.button>
        </Motion.div>
      </div>
    </section>
  );
}
