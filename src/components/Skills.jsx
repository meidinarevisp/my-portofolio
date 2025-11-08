import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
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

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

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
      icon: (
        <img
          src={responsive}
          alt="Responsive"
          className="w-7 h-7"
          loading="lazy"
        />
      ),
    },
    {
      name: "API Integration",
      icon: <img src={api} alt="API" className="w-7 h-7" loading="lazy" />,
    },
  ];

  const softSkills = [
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Problem Solving",
    "Attention to Detail",
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const rowVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
    exit: (i) => ({
      opacity: 0,
      rotateX: 90,
      transition: { delay: i * 0.04, duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 bg-[#fef6f8] dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-200"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] transition-colors duration-200" />
      <div className="absolute top-18 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl transition-colors duration-200" />
      <div className="absolute bottom-13 left-10 w-52 h-52 bg-rose-500/15 rounded-full blur-3xl transition-colors duration-200" />

      {/* Updated width container */}
      <div className="relative z-10 container mx-auto max-w-[78rem] px-6 sm:px-10 lg:px-16">
        {/* Header & Toggle */}
        <AnimatePresence>
          {inView && (
            <Motion.div
              key="header"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={headerVariants}
              className="text-center mb-10 transition-colors duration-200"
            >
              <h4 className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold mb-2 transition-colors duration-200">
                Skills
              </h4>
              <h2 className="text-4xl font-extrabold text-pink-900 dark:text-rose-200 mb-8 transition-colors duration-200">
                My Technical & Soft Skills
              </h2>

              <div className="inline-flex bg-white dark:bg-[#1a1a1a] rounded-full p-1 shadow-sm border border-pink-100 dark:border-[#2a2a2a] transition-colors duration-200">
                <button
                  onClick={() => setActiveTab("technical")}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-200 ${
                    activeTab === "technical"
                      ? "bg-pink-600 text-white shadow-md"
                      : "text-pink-800 dark:text-pink-200"
                  }`}
                >
                  <MdOutlineWork className="text-lg" /> Technical
                </button>
                <button
                  onClick={() => setActiveTab("soft")}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-200 ${
                    activeTab === "soft"
                      ? "bg-pink-600 text-white shadow-md"
                      : "text-pink-800 dark:text-pink-200"
                  }`}
                >
                  <MdPerson className="text-lg" /> Soft Skills
                </button>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Skills Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "technical" ? (
            <Motion.div
              key="technical"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {technicalSkills.map((s, i) => (
                <Motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  exit="exit"
                  variants={rowVariants}
                  className="flex items-center gap-3 p-4 px-5 w-full bg-white dark:bg-[#1a1a1a] rounded-xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm transition-colors duration-200 min-h-[60px]"
                >
                  <div>{s.icon}</div>
                  <p className="font-medium text-pink-950 dark:text-pink-50 transition-colors duration-200">
                    {s.name}
                  </p>
                </Motion.div>
              ))}
            </Motion.div>
          ) : (
            <Motion.div
              key="soft"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {softSkills.map((skill, i) => (
                <Motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  exit="exit"
                  variants={rowVariants}
                  className="p-4 px-5 w-full bg-white dark:bg-[#1a1a1a] rounded-xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm text-center font-medium text-pink-950 dark:text-pink-50 transition-colors duration-200 min-h-[60px]"
                >
                  {skill}
                </Motion.div>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
