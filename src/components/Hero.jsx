import React from "react";
import { motion as Motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[110vh] flex items-center justify-center text-center font-sans
      bg-[radial-gradient(circle_at_top_left,_#fff3d0_0%,_#ffd9ea_35%,_transparent_70%),_radial-gradient(circle_at_bottom_right,_#ffe3cb_0%,_#ffd9ea_40%,_transparent_70%),_radial-gradient(circle_at_70%_30%,_#fff0f5_0%,_#ffd9ea_50%,_#ffe3cb_100%)]
      dark:bg-[radial-gradient(circle_at_top_left,_#2b0d17_0%,_#3b0d1f_35%,_transparent_70%),_radial-gradient(circle_at_bottom_right,_#0b0b0b_0%,_#2b0e1b_45%,_transparent_80%),_radial-gradient(circle_at_70%_40%,_#3b0d24_0%,_#621a38_40%,_#2b0e1b_70%,_#12080a_100%)]
      transition-colors duration-700 overflow-hidden"
    >
      {/* ===== Noise & Glow Layers ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_70%)] animate-pulse-slow" />

      <Motion.div
        ref={ref}
        className="relative max-w-3xl mx-auto px-6 z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Motion.p
          variants={fadeDown}
          className="text-pink-600 dark:text-pink-300 text-lg mb-3 tracking-wide"
        >
          Hello, There!
        </Motion.p>

        <Motion.h1
          variants={fadeDown}
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          <span className="font-normal text-pink-700 dark:text-pink-400">
            I'm{" "}
          </span>
          <span className="font-extrabold text-pink-900 dark:text-rose-200">
            Meidina Revi
          </span>
          <span className="text-pink-500 dark:text-rose-400">.</span>
        </Motion.h1>

        <Motion.p
          variants={fadeUp}
          className="mt-5 text-pink-700 dark:text-pink-200 text-lg md:text-xl leading-relaxed font-light"
        >
          a Front-End Web Developer who loves creating beautiful, responsive
          websites
        </Motion.p>

        {/* ===== Buttons Section ===== */}
        <Motion.div
          variants={fadeUp}
          className="mt-6 flex items-center justify-center gap-4 flex-wrap"
        >
          {/* My Projects */}
          <Motion.a
            href="#projects"
            className="h-12 px-6 flex items-center justify-center rounded-full border-2 border-pink-800 dark:border-pink-400 
            text-pink-800 dark:text-pink-300 font-sans font-normal 
            transition-all duration-300 
            hover:bg-pink-100 dark:hover:bg-pink-800/40 
            hover:shadow-[0_0_18px_rgba(255,105,180,0.75),0_0_28px_rgba(255,182,193,0.45)] 
            dark:hover:shadow-[0_0_12px_rgba(255,182,193,0.4),0_0_24px_rgba(255,182,193,0.2)]"
          >
            My Projects
          </Motion.a>

          {/* Contact Me */}
          <Motion.a
            href="mailto:revimeidina72@gmail.com"
            className="h-12 px-6 flex items-center justify-center gap-2 rounded-full 
            text-rose-100 bg-pink-700 dark:bg-pink-900 
            font-sans font-normal 
            transition-all duration-300 
            hover:bg-pink-600 dark:hover:bg-pink-800 
            hover:shadow-[0_0_22px_rgba(255,105,180,0.8),0_0_36px_rgba(255,182,193,0.5)] 
            dark:hover:shadow-[0_0_14px_rgba(255,182,193,0.4),0_0_28px_rgba(255,182,193,0.2)]"
          >
            Contact Me
            <HiOutlineMail className="text-lg" />
          </Motion.a>
        </Motion.div>

        {/* ===== Social Links ===== */}
        <Motion.div
          variants={fadeUp}
          className="mt-7 flex justify-center gap-6 text-2xl text-pink-700 dark:text-pink-300"
        >
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

          <Motion.a
            href="https://www.instagram.com/meidinarevisp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
          >
            <FaInstagram />
          </Motion.a>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
