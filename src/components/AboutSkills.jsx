import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiFlutter,
  SiDart,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { MdOutlineWork, MdPerson } from "react-icons/md";

export default function AboutSkills() {
  const [activeTab, setActiveTab] = useState("technical");
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");

  const badgeControls = useAnimation();
  const titleControls = useAnimation();
  const tabsControls = useAnimation();
  const gridControls = useAnimation();

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);

  const technicalSkills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "SASS",
      icon: <SiSass className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "React",
      icon: <SiReact className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Vite",
      icon: <SiVite className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Dart",
      icon: <SiDart className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Git",
      icon: <SiGit className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Microsoft Office",
      icon: <FaMicrosoft className="text-black w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      name: "Responsive Design",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "API Integration",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const softSkills = [
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Problem Solving",
    "Attention to Detail",
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enter animations
  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      badgeControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 100);
      setTimeout(() => tabsControls.start("visible"), 200);
      setTimeout(() => gridControls.start("visible"), 300);
    }
  }, [inView, badgeControls, titleControls, tabsControls, gridControls]);

  // Exit animations
  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;
      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top > screenHeight * 0.75) control.start("exit");
      };
      checkExit(gridRef, gridControls);
      checkExit(tabsRef, tabsControls);
      checkExit(titleRef, titleControls);
      checkExit(badgeRef, badgeControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [badgeControls, titleControls, tabsControls, gridControls]);

  // Re-enter animations
  useEffect(() => {
    const handleReEnter = () => {
      if (scrollDirection.current !== "down") return;
      const screenHeight = window.innerHeight;
      const reEnterThreshold = screenHeight * 1.2;
      const checkReEnter = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top < reEnterThreshold && rect.bottom > 0) {
          control.start("visible");
        }
      };
      checkReEnter(badgeRef, badgeControls);
      setTimeout(() => checkReEnter(titleRef, titleControls), 100);
      setTimeout(() => checkReEnter(tabsRef, tabsControls), 200);
      setTimeout(() => checkReEnter(gridRef, gridControls), 300);
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [badgeControls, titleControls, tabsControls, gridControls]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dur = isMobile ? 0.45 : 0.65;
  const dist = isMobile ? 20 : 30;

  const fadeDown = {
    hidden: { opacity: 0, y: -dist },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -dist, transition: { duration: dur * 0.7 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: dist },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, y: dist, transition: { duration: dur * 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: dur * 0.7 } },
  };

  const getItemDelay = (index, itemsPerRow = 5) => {
    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;
    return row * 0.1 + col * 0.03;
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: getItemDelay(i), duration: 0.35, ease: "easeOut" },
    }),
    exit: (i = 0) => ({
      opacity: 0,
      y: -15,
      scale: 0.95,
      transition: {
        delay: getItemDelay(i) * 0.2,
        duration: 0.25,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white transition-colors duration-300"
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

      {/* Decorative Geometric Shapes - Hidden on mobile */}
      <Motion.div
        animate={{
          rotate: [0, 90, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-16 lg:top-20 right-16 lg:right-20 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5"
      />
      <Motion.div
        animate={{
          rotate: [0, -90, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden md:block absolute bottom-16 lg:bottom-20 left-16 lg:left-20 w-20 lg:w-24 h-20 lg:h-24 border-4 border-black opacity-5 rotate-45"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <Motion.div
            ref={badgeRef}
            variants={fadeDown}
            initial="hidden"
            animate={badgeControls}
            className="mb-4 sm:mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
                My Expertise
              </span>
            </div>
          </Motion.div>

          <Motion.h2
            ref={titleRef}
            variants={fadeDown}
            initial="hidden"
            animate={titleControls}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 uppercase"
          >
            Technical & Soft Skills
            <Motion.div
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-2 sm:mt-3 mx-auto w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-black"
            />
          </Motion.h2>
        </div>

        {/* Tabs */}
        <Motion.div
          ref={tabsRef}
          variants={fadeUp}
          initial="hidden"
          animate={tabsControls}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex bg-white p-1 border-2 sm:border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              <MdOutlineWork className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Technical</span>
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "soft"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              <MdPerson className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Soft Skills</span>
            </button>
          </div>
        </Motion.div>

        {/* Skills Grid */}
        <Motion.div
          ref={gridRef}
          variants={scaleIn}
          initial="hidden"
          animate={gridControls}
        >
          <AnimatePresence mode="wait">
            {activeTab === "technical" ? (
              <Motion.div
                key="technical"
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4"
              >
                {technicalSkills.map((skill, i) => (
                  <Motion.div
                    key={i}
                    custom={i}
                    variants={cardVariant}
                    className="group relative"
                  >
                    <div className="relative bg-white backdrop-blur-sm p-3 sm:p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                      {/* Scan line effect */}
                      <Motion.div
                        animate={{
                          y: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent h-8 sm:h-10 opacity-0 group-hover:opacity-100"
                      />

                      <div className="relative flex flex-col items-center gap-2 text-center">
                        <div className="relative">
                          <div className="p-1.5 sm:p-2 bg-white border-2 border-black transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            {skill.icon}
                          </div>
                        </div>
                        <p className="font-bold text-[9px] sm:text-[10px] md:text-xs text-black uppercase tracking-wide group-hover:tracking-wider transition-all duration-300 line-clamp-2">
                          {skill.name}
                        </p>
                      </div>

                      {/* Bottom indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            ) : (
              <Motion.div
                key="soft"
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
              >
                {softSkills.map((skill, i) => (
                  <Motion.div
                    key={i}
                    custom={i}
                    variants={cardVariant}
                    className="group relative"
                  >
                    <div className="relative bg-white backdrop-blur-sm p-4 sm:p-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 text-center overflow-hidden">
                      {/* Diagonal stripes on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `repeating-linear-gradient(
                              45deg,
                              transparent,
                              transparent 10px,
                              rgba(0,0,0,0.02) 10px,
                              rgba(0,0,0,0.02) 20px
                            )`,
                          }}
                        />
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex items-center justify-center min-h-[60px] sm:min-h-[70px]">
                        <p className="font-bold text-xs sm:text-sm text-black leading-relaxed uppercase tracking-wide group-hover:tracking-wider transition-all duration-300">
                          {skill}
                        </p>
                      </div>

                      {/* Bottom bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
}
