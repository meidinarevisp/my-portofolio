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
          src="/images/responsive.png"
          alt="responsive"
          className="w-7 h-7"
        />
      ),
    },
    {
      name: "API Integration",
      icon: <img src="/images/api.png" alt="api" className="w-7 h-7" />,
    },
  ];

  const softSkills = [
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Problem Solving",
    "Attention to Detail",
  ];

  // ===== VARIANTS =====
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      y: 20,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="skills"
      className="relative py-24 transition-colors duration-700 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-0 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-15 left-10 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl animate-pulse-slow delay-200" />

      <div
        ref={ref}
        className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 relative z-10"
      >
        <Motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="exit"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
              },
            },
            exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
          }}
          className="text-center mb-10"
        >
          <Motion.h4
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              },
              exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
            }}
            className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold"
          >
            Skills
          </Motion.h4>

          <Motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
              exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
            }}
            className="text-4xl font-extrabold text-pink-900 dark:text-rose-200 mb-8"
          >
            My Technical & Soft Skills
          </Motion.h2>

          {/* ===== TOGGLE BUTTON ===== */}
          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
              exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
            }}
            className="inline-flex bg-white dark:bg-[#1a1a1a] rounded-full p-1 shadow-sm border border-pink-100 dark:border-[#2a2a2a]"
          >
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === "technical"
                  ? "bg-pink-600 text-white shadow-md"
                  : "text-pink-800 dark:text-pink-200"
              }`}
            >
              <MdOutlineWork className="text-lg" />
              Technical
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === "soft"
                  ? "bg-pink-600 text-white shadow-md"
                  : "text-pink-800 dark:text-pink-200"
              }`}
            >
              <MdPerson className="text-lg" />
              Soft Skills
            </button>
          </Motion.div>
        </Motion.div>

        {/* ===== SKILLS GRID ===== */}
        <AnimatePresence mode="wait">
          {activeTab === "technical" ? (
            <Motion.div
              key="technical"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              exit="exit"
              custom="left"
            >
              {technicalSkills.map((s, i) => (
                <Motion.div
                  key={i}
                  custom="left"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 p-5 bg-white dark:bg-[#1a1a1a] rounded-xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm transition-all duration-300"
                >
                  {s.icon && <div>{s.icon}</div>}
                  <p className="font-medium text-pink-950 dark:text-pink-50">
                    {s.name}
                  </p>
                </Motion.div>
              ))}
            </Motion.div>
          ) : (
            <Motion.div
              key="soft"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              exit="exit"
              custom="right"
            >
              {softSkills.map((skill, i) => (
                <Motion.div
                  key={i}
                  custom="right"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-5 bg-white dark:bg-[#1a1a1a] rounded-xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm text-center font-medium text-pink-950 dark:text-pink-50 transition-all duration-300"
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
