import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  const glowHover = {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(255, 182, 193, 0.5)",
  };

  return (
    <section
      id="home"
      className="relative min-h-[110vh] flex items-center justify-center text-center font-sans
      bg-[radial-gradient(circle_at_top_left,_#fff3d0_0%,_#ffd9ea_35%,_transparent_70%),_radial-gradient(circle_at_bottom_right,_#ffe3cb_0%,_#ffd9ea_40%,_transparent_70%),_radial-gradient(circle_at_70%_30%,_#fff0f5_0%,_#ffd9ea_50%,_#ffe3cb_100%)]
      dark:bg-[radial-gradient(circle_at_top_left,_#2b0d17_0%,_#3b0d1f_35%,_transparent_70%),_radial-gradient(circle_at_bottom_right,_#0b0b0b_0%,_#2b0e1b_45%,_transparent_80%),_radial-gradient(circle_at_70%_40%,_#3b0d24_0%,_#621a38_40%,_#2b0e1b_70%,_#12080a_100%)]
      transition-colors duration-700 overflow-hidden"
    >
      {/* Subtle texture layers */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_70%)] animate-pulse-slow" />

      <div className="relative max-w-3xl mx-auto px-6 z-10">
        <p className="text-pink-600 dark:text-pink-300 text-lg mb-3 tracking-wide">
          Hello, There!
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="font-normal text-pink-700 dark:text-pink-400">
            I'm{" "}
          </span>
          <span className="font-extrabold text-pink-900 dark:text-rose-200">
            Meidina Revi
          </span>
          <span className="text-pink-500 dark:text-rose-400">.</span>
        </h1>

        <p className="mt-5 text-pink-700 dark:text-pink-200 text-lg md:text-xl leading-relaxed font-light">
          Front-End Web Developer based in Yogyakarta, Indonesia.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex items-center justify-center gap-4 flex-wrap">
          <Motion.a
            whileHover={glowHover}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 rounded-full border-2 border-pink-800 dark:border-pink-400 text-pink-800 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-all duration-300 flex items-center justify-center gap-2 font-sans font-normal"
          >
            My Projects
          </Motion.a>

          <Motion.a
            whileHover={glowHover}
            whileTap={{ scale: 0.95 }}
            href="mailto:revimeidina72@gmail.com"
            className="px-6 py-3 rounded-full text-white bg-pink-700 dark:bg-pink-900 hover:bg-pink-600 dark:hover:bg-pink-800 transition-colors duration-300 flex items-center justify-center gap-2 font-sans font-normal"
          >
            Contact Me
            <HiOutlineMail className="text-lg" />
          </Motion.a>
        </div>

        {/* Social icons */}
        <div className="mt-7 flex justify-center gap-6 text-2xl text-pink-700 dark:text-pink-300">
          <Motion.a
            href="https://github.com/meidinarevisp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <FaGithub />
          </Motion.a>

          <Motion.a
            href="https://www.linkedin.com/in/meidina-revi/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <FaLinkedin />
          </Motion.a>
        </div>
      </div>
    </section>
  );
}
