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
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black transition-colors duration-300 px-4 py-20 sm:py-24 md:py-0"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
        }}
      />

      {/* Retro Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-24 lg:w-32 h-24 lg:h-32 border-4 border-white opacity-10 rotate-45 animate-pulse-slow" />
      <div
        className="hidden md:block absolute bottom-32 right-16 w-32 lg:w-40 h-32 lg:h-40 border-4 border-white opacity-10 rounded-full animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="hidden lg:block absolute top-1/2 right-20 w-24 h-24 border-4 border-white opacity-10" />

      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto z-10">
        {/* Greeting Badge */}
        <Motion.div
          ref={badgeRef}
          variants={fadeDown}
          initial="hidden"
          animate={badgeControls}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-white bg-black mb-4 sm:mb-5 md:mb-6"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white tracking-widest">
            WELCOME TO MY PORTFOLIO
          </span>
        </Motion.div>

        {/* Main Heading */}
        <Motion.h1
          ref={headingRef}
          variants={fadeDown}
          initial="hidden"
          animate={headingControls}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <span className="block text-white font-normal text-base sm:text-xl md:text-2xl lg:text-3xl mb-2 tracking-wide">
            Hello, I'm
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
            Meidina Revi
          </span>
          <div className="mt-2 sm:mt-3 mx-auto w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-white" />
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          ref={subtitleRef}
          variants={fadeUp}
          initial="hidden"
          animate={subtitleControls}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-full sm:max-w-md md:max-w-xl mx-auto mb-5 sm:mb-6 md:mb-8 px-2 sm:px-4"
        >
          A{" "}
          <span className="font-bold text-white border-b-2 border-white">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mb-8 sm:mb-10"
        >
          <Motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black font-bold text-xs sm:text-sm md:text-base hover:bg-black hover:text-white border-2 border-white transition-all duration-300 uppercase tracking-wider"
          >
            <span>View My Work</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
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
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white text-white font-bold text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
          >
            <span>Get In Touch</span>
            <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
          </Motion.a>
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          ref={socialRef}
          variants={fadeUp}
          initial="hidden"
          animate={socialControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 sm:w-8 md:w-12 h-[2px] bg-white" />
            <span className="text-[10px] sm:text-xs text-white font-bold tracking-widest">
              CONNECT
            </span>
          </div>

          <div className="flex gap-2.5 sm:gap-3 md:gap-4">
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
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center border-2 border-white bg-black hover:bg-white text-white hover:text-black transition-all duration-300 text-base sm:text-lg"
              >
                {item.icon}
              </Motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs text-white font-bold tracking-widest">
              WITH ME
            </span>
            <div className="w-6 sm:w-8 md:w-12 h-[2px] bg-white" />
          </div>
        </Motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-20"
      >
        <Motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white flex items-start justify-center p-1.5 sm:p-2 bg-black"
        >
          <Motion.div
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white"
          />
        </Motion.div>
        <span className="text-[10px] sm:text-xs text-white font-bold tracking-widest">
          SCROLL
        </span>
      </Motion.div>
    </section>
  );
}
