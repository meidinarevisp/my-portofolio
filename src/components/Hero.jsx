import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  // Separate refs and controls for each animated section
  const [badgeRef, badgeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [btnRef, btnInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const badgeControls = useAnimation();
  const headingControls = useAnimation();
  const subtitleControls = useAnimation();
  const btnControls = useAnimation();
  const socialControls = useAnimation();

  useEffect(() => {
    if (badgeInView) badgeControls.start("show");
  }, [badgeInView, badgeControls]);

  useEffect(() => {
    if (headingInView) headingControls.start("show");
  }, [headingInView, headingControls]);

  useEffect(() => {
    if (subtitleInView) subtitleControls.start("show");
  }, [subtitleInView, subtitleControls]);

  useEffect(() => {
    if (btnInView) btnControls.start("show");
  }, [btnInView, btnControls]);

  useEffect(() => {
    if (socialInView) socialControls.start("show");
  }, [socialInView, socialControls]);

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
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* Soft orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-md sm:max-w-2xl mx-auto px-5 sm:px-8 z-10">
        {/* Greeting Badge */}
        <Motion.div
          ref={badgeRef}
          variants={fadeDown}
          initial="hidden"
          animate={badgeControls}
          className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50 mb-5 sm:mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide">
            WELCOME TO MY PORTFOLIO
          </span>
        </Motion.div>

        {/* Main Heading */}
        <Motion.h1
          ref={headingRef}
          variants={fadeDown}
          initial="hidden"
          animate={headingControls}
          className="mb-4 sm:mb-6"
        >
          <span className="block text-gray-700 dark:text-gray-400 font-normal text-xl sm:text-3xl mb-2">
            Hello, I'm
          </span>
          <span className="block text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
            Meidina Revi
          </span>
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          ref={subtitleRef}
          variants={fadeUp}
          initial="hidden"
          animate={subtitleControls}
          className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 px-1"
        >
          A{" "}
          <span className="font-semibold text-pink-700 dark:text-pink-400">
            Front-End Web Developer
          </span>{" "}
          who loves creating beautiful, responsive websites
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div
          ref={btnRef}
          variants={fadeUp}
          initial="hidden"
          animate={btnControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          <Motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Motion.a>

          <Motion.a
            href="mailto:revimeidina72@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-500 text-gray-900 dark:text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-900/10"
          >
            <span>Get In Touch</span>
            <HiOutlineMail className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </Motion.a>
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          ref={socialRef}
          variants={fadeUp}
          initial="hidden"
          animate={socialControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-pink-300 dark:to-pink-700" />
            <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
              CONNECT
            </span>
          </div>

          <div className="flex gap-3 sm:gap-4">
            {[
              { href: "https://github.com/meidinarevisp", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/meidina-revi/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://www.instagram.com/meidinarevisp",
                icon: <FaInstagram />,
              },
            ].map((item, i) => (
              <Motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 shadow-md transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
              >
                {item.icon}
              </Motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
              WITH ME
            </span>
            <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-300 dark:to-pink-700" />
          </div>
        </Motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <Motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-pink-400/60 dark:border-pink-500/60 flex items-start justify-center p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
        >
          <Motion.div
            animate={{ y: [0, 14, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-pink-500 to-rose-500"
          />
        </Motion.div>
        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-widest">
          SCROLL
        </span>
      </Motion.div>
    </section>
  );
}
