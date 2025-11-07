// AboutMe.jsx
import React, { useState } from "react";
import umby from "../assets/images/umby.png";
import responsive from "../assets/images/responsive.png";
import api from "../assets/images/api.png";
import profile from "../assets/images/profile.png";
import { motion as Motion } from "framer-motion";
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

import workExperience from "../data/workExperience";
import certifications from "../data/certifications";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("technical");

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

  const education = [
    {
      degree: "Bachelor of Informatics - Faculty of Information Technology",
      school: "Mercu Buana University Yogyakarta",
      period: "September 2021 – October 2025",
      gpa: "GPA: 3.86 / 4.00",
      thesis:
        "Microscopic Image Analysis of Organic and Non-Organic Rice Based on Texture Features Using the K-Nearest Neighbor Method",
    },
  ];

  return (
    <section
      id="about-page"
      className="relative py-24 overflow-hidden bg-[#fef6f8] dark:bg-[#0a0a0a] text-pink-900 dark:text-pink-100 transition-colors duration-700"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* === HEADER === */}
        <div className="flex flex-col items-center mb-12 text-center gap-4">
          <h4 className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold">
            About
          </h4>
          <h2 className="text-4xl font-extrabold text-pink-900 dark:text-rose-200 mb-4">
            More About{" "}
            <span className="text-pink-600 dark:text-rose-400">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
            <div className="relative flex-shrink-0">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-40 bg-pink-400/25 dark:bg-pink-600/25 blur-3xl rounded-t-full" />
              <div className="relative w-56 h-80 md:w-64 overflow-hidden rounded-b-[160px] border-b-[4px] border-pink-500 dark:border-pink-300">
                <img
                  src={profile}
                  alt="Meidina Revi Sandra Pertiwi"
                  className="w-full h-full object-contain scale-[1.22] translate-y-8 drop-shadow-[0_0_18px_rgba(244,114,182,0.35)] dark:drop-shadow-[0_0_22px_rgba(236,72,153,0.45)]"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Meidina Revi Sandra Pertiwi
              </h3>
              <p className="text-pink-800 dark:text-pink-200 mb-6 font-medium">
                Front-End Web Developer
              </p>
              <p className="text-sm text-pink-900 dark:text-pink-100 max-w-3xl leading-relaxed">
                I’m an enthusiastic Web and Mobile Developer who enjoys
                transforming ideas into functional, user-friendly applications.
                Skilled in HTML, CSS, JavaScript, PHP, MySQL, and Flutter, I’ve
                developed projects ranging from interactive websites to mobile
                apps with speech-to-text features. My academic background also
                includes research in image processing using the K-Nearest
                Neighbor method.
                <br />
                <br />I value collaboration, adaptability, and attention to
                detail in every project I work on. Whether developing responsive
                interfaces or experimenting with new technologies, I’m driven by
                a desire to create efficient and meaningful user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* === SKILLS === */}
        <section className="mt-8 mb-24">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="inline-flex bg-white dark:bg-[#1a1a1a] rounded-full p-1 shadow-sm border border-pink-100 dark:border-[#2a2a2a]">
              <button
                onClick={() => setActiveTab("technical")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "technical"
                    ? "bg-pink-600 text-white shadow-md"
                    : "text-pink-800 dark:text-pink-200"
                }`}
              >
                <MdOutlineWork className="text-lg" /> Technical
              </button>
              <button
                onClick={() => setActiveTab("soft")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "soft"
                    ? "bg-pink-600 text-white shadow-md"
                    : "text-pink-800 dark:text-pink-200"
                }`}
              >
                <MdPerson className="text-lg" /> Soft Skills
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(activeTab === "technical" ? technicalSkills : softSkills).map(
              (item, i) => (
                <Motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center justify-center gap-3 p-5 bg-white dark:bg-[#1a1a1a] rounded-xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm transition-all duration-300 text-center"
                >
                  {typeof item === "string" ? (
                    <p className="font-medium text-pink-950 dark:text-pink-50">
                      {item}
                    </p>
                  ) : (
                    <>
                      {item.icon}
                      <p className="font-medium text-pink-950 dark:text-pink-50">
                        {item.name}
                      </p>
                    </>
                  )}
                </Motion.div>
              )
            )}
          </div>
        </section>

        {/* === WORK EXPERIENCE === */}
        <div className="mb-16">
          <h4 className="text-lg font-semibold mb-6">Work Experience</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workExperience.map((job, idx) => (
              <Motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="relative p-6 bg-white dark:bg-[#111111] rounded-2xl shadow-md border border-pink-100 dark:border-[#2a2a2a] transition-all duration-300 group"
              >
                {job.type && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                    {job.type}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 text-xl font-bold">
                    {job.icon || job.company.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold">{job.company}</h5>
                    <p className="text-sm text-pink-800 dark:text-pink-300">
                      {job.period}
                    </p>
                  </div>
                </div>
                <h6 className="text-lg font-bold mb-2">{job.role}</h6>
                {job.description && (
                  <p className="text-sm leading-relaxed">{job.description}</p>
                )}
              </Motion.div>
            ))}
          </div>
        </div>

        {/* === EDUCATION === */}
        <div className="mb-20">
          <h4 className="text-lg font-semibold mb-6">Education</h4>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white dark:bg-[#111111] p-6 rounded-2xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm"
            >
              <img
                src={umby}
                alt={edu.school}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h5 className="text-xl font-extrabold mb-1">{edu.school}</h5>
                <p className="text-base font-semibold mb-2">{edu.degree}</p>
                <p className="text-sm mb-1">{edu.period}</p>
                <p className="text-sm font-medium mb-1">{edu.gpa}</p>
                <p className="text-sm italic leading-relaxed">
                  Thesis: {edu.thesis}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === CERTIFICATIONS === */}
        <div className="mb-16">
          <h4 className="text-lg font-semibold mb-6">
            Certifications & Courses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <Motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-white dark:bg-[#111111] rounded-2xl border border-pink-100 dark:border-[#2a2a2a] shadow-sm relative group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 overflow-hidden">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.institution}
                      className="w-9 h-9 object-contain"
                    />
                  ) : (
                    <span className="text-pink-700 dark:text-pink-300 font-semibold text-lg">
                      {cert.institution.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-1">{cert.title}</h5>
                  <p className="text-sm text-pink-800 dark:text-pink-200">
                    {cert.institution} • {cert.period}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
