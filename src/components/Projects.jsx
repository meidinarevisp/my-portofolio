import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment integration, and responsive design for seamless shopping experience across all devices.",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website with modern animations and interactions. Features include dark mode, smooth scrolling, and dynamic content loading for an engaging user experience.",
    category: "UI/UX Design",
    tags: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "An intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates to boost productivity and streamline workflows.",
    category: "App Development",
    tags: ["Vue.js", "Firebase", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    caseStudyUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white transition-colors duration-300"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Retro Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5 rotate-45 animate-pulse-slow" />
      <div
        className="hidden md:block absolute bottom-32 right-16 w-32 lg:w-40 h-32 lg:h-40 border-4 border-black opacity-5"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Motion.div
          ref={titleRef}
          variants={fadeDown}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <Motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white mb-4 sm:mb-5"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
              FEATURED WORK
            </span>
          </Motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 md:mb-4 uppercase">
            Selected <span className="border-b-4 border-black">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-black" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rotate-45" />
            <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-black" />
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black max-w-2xl mx-auto font-medium px-4">
            These are a few of the projects I've worked on recently
          </p>
        </Motion.div>

        {/* Main Featured Project Card */}
        <Motion.div
          ref={cardRef}
          variants={scaleIn}
          initial="hidden"
          animate={cardControls}
          className="mb-6 sm:mb-8 md:mb-10"
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
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left - Laptop Mockup */}
                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="relative bg-black p-2 sm:p-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {/* Screen */}
                    <div className="relative bg-white border-2 border-black overflow-hidden aspect-video">
                      <Motion.img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Category Badge on Screen */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 sm:px-2.5 sm:py-1 bg-white border-2 border-black flex items-center gap-1 sm:gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <div className="w-1 h-1 bg-black" />
                        <span className="text-[8px] sm:text-[9px] font-bold text-black tracking-wider uppercase">
                          {currentProject.category}
                        </span>
                      </div>

                      {/* Counter on Screen */}
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1.5 sm:gap-2">
                        <div className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                          {String(currentIndex + 1).padStart(2, "0")}
                        </div>
                        <div className="h-5 sm:h-6 md:h-8 w-0.5 bg-white drop-shadow-lg" />
                        <div className="text-xs sm:text-sm font-bold text-white tracking-wider drop-shadow-lg">
                          {String(projects.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="h-1 sm:h-1.5 bg-black mt-1" />
                  </div>
                </div>

                {/* Right - Project Info */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white">
                    <div className="w-1.5 h-1.5 bg-black" />
                    <span className="text-[10px] sm:text-xs font-bold text-black tracking-widest uppercase">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black leading-tight uppercase">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {currentProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold bg-white text-black border-2 border-black uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <a
                      href={currentProject.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base bg-black text-white font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <span>Case Study</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
                      className="group flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base bg-white border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <span>Visit Website</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform"
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
            </Motion.div>
          </AnimatePresence>
        </Motion.div>

        {/* Navigation Controls */}
        <Motion.div
          ref={navigationRef}
          variants={fadeUp}
          initial="hidden"
          animate={navigationControls}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-1">
            <button
              onClick={handlePrev}
              className="group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white border-2 border-black flex items-center justify-center transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black"
              aria-label="Previous project"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white transition-colors"
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
              className="group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-black border-2 border-black flex items-center justify-center transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white"
              aria-label="Next project"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition-colors"
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
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1.5 sm:h-2 transition-all duration-300 border border-black ${
                  index === currentIndex
                    ? "w-8 sm:w-10 md:w-12 bg-black"
                    : "w-1.5 sm:w-2 bg-white hover:bg-gray-300"
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
            className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-bold text-black transition-all order-3 uppercase tracking-wider border-b-2 border-transparent hover:border-black"
          >
            <span>View All</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
