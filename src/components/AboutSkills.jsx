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
import responsive from "../assets/images/responsive.png";
import api from "../assets/images/api.png";

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
    { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-7 h-7" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 w-7 h-7" /> },
    { name: "SASS", icon: <SiSass className="text-pink-500 w-7 h-7" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 w-7 h-7" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 w-7 h-7" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-500 w-7 h-7" />,
    },
    { name: "React", icon: <SiReact className="text-cyan-500 w-7 h-7" /> },
    { name: "Vite", icon: <SiVite className="text-violet-500 w-7 h-7" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 w-7 h-7" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 dark:text-gray-200 w-7 h-7" />,
    },
    { name: "PHP", icon: <SiPhp className="text-indigo-700 w-7 h-7" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-600 w-7 h-7" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-500 w-7 h-7" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400 w-7 h-7" /> },
    { name: "Git", icon: <SiGit className="text-orange-500 w-7 h-7" /> },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-800 dark:text-white w-7 h-7" />,
    },
    { name: "Figma", icon: <SiFigma className="text-pink-600 w-7 h-7" /> },
    {
      name: "Microsoft Office",
      icon: <FaMicrosoft className="text-orange-700 w-7 h-7" />,
    },
    {
      name: "Responsive Web Design",
      icon: <img src={responsive} alt="responsive" className="w-7 h-7" />,
    },
    {
      name: "API Integration",
      icon: <img src={api} alt="api" className="w-7 h-7" />,
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
        if (rect.top > screenHeight * 0.7) control.start("exit");
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
    return row * 0.15 + col * 0.05;
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: getItemDelay(i), duration: 0.4, ease: "easeOut" },
    }),
    exit: (i = 0) => ({
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        delay: getItemDelay(i) * 0.3,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 -right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <Motion.div
            ref={badgeRef}
            variants={fadeDown}
            initial="hidden"
            animate={badgeControls}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50">
              <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide">
                MY EXPERTISE
              </span>
            </div>
          </Motion.div>

          <Motion.h2
            ref={titleRef}
            variants={fadeDown}
            initial="hidden"
            animate={titleControls}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"
          >
            Technical &{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </Motion.h2>
        </div>

        {/* Tabs */}
        <Motion.div
          ref={tabsRef}
          variants={fadeUp}
          initial="hidden"
          animate={tabsControls}
          className="flex justify-center mb-8 md:mb-10"
        >
          <div className="inline-flex bg-white dark:bg-[#1a1a1a] rounded-full p-1 border border-pink-200 dark:border-pink-800/50 shadow-sm">
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/25"
                  : "text-gray-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
              }`}
            >
              <MdOutlineWork className="w-4 h-4 md:w-5 md:h-5" />
              <span>Technical</span>
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "soft"
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/25"
                  : "text-gray-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
              }`}
            >
              <MdPerson className="w-4 h-4 md:w-5 md:h-5" />
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
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
              >
                {technicalSkills.map((skill, i) => (
                  <Motion.div
                    key={i}
                    custom={i}
                    variants={cardVariant}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
                    <div className="relative bg-white/80 dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:to-[#181818] backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-900/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-purple-500/10" />
                      <div className="relative flex flex-col items-center gap-2.5 text-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 dark:from-pink-600/20 dark:to-rose-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative p-2.5 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            {skill.icon}
                          </div>
                        </div>
                        <p className="font-bold text-xs md:text-sm text-gray-900 dark:text-gray-50 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/30 dark:from-white/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
              >
                {softSkills.map((skill, i) => (
                  <Motion.div
                    key={i}
                    custom={i}
                    variants={cardVariant}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-25 blur-lg transition-all duration-500" />
                    <div className="relative bg-white/90 dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:to-[#181818] backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-900/30 transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />
                      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-rose-400/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 animate-pulse" />
                        </div>
                        <p className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-50 leading-relaxed group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                          {skill}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
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
