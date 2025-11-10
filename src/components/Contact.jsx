import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");

  // Controls
  const badgeControls = useAnimation();
  const titleControls = useAnimation();
  const descControls = useAnimation();
  const buttonsControls = useAnimation();

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  // --- Scroll direction ---
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Masuk berurutan ---
  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      badgeControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 150);
      setTimeout(() => descControls.start("visible"), 300);
      setTimeout(() => buttonsControls.start("visible"), 450);
    }
  }, [inView, badgeControls, titleControls, descControls, buttonsControls]);

  // --- Keluar (scroll ke atas) ---
  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;
      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top > screenHeight * 0.75) control.start("exit");
      };
      checkExit(buttonsRef, buttonsControls);
      checkExit(descRef, descControls);
      checkExit(titleRef, titleControls);
      checkExit(badgeRef, badgeControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [badgeControls, titleControls, descControls, buttonsControls]);

  // --- Re-enter di tengah jalan (scroll bawah lagi) ---
  useEffect(() => {
    const handleReEnter = () => {
      if (scrollDirection.current !== "down") return;

      const screenHeight = window.innerHeight;
      const reEnterThreshold = screenHeight * 1.2; // lebih longgar
      const checkReEnter = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top < reEnterThreshold && rect.bottom > 0) {
          control.start("visible");
        }
      };

      checkReEnter(badgeRef, badgeControls);
      setTimeout(() => checkReEnter(titleRef, titleControls), 150);
      setTimeout(() => checkReEnter(descRef, descControls), 300);
      setTimeout(() => checkReEnter(buttonsRef, buttonsControls), 450);
    };

    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [badgeControls, titleControls, descControls, buttonsControls]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dur = isMobile ? 0.45 : 0.65;
  const dist = isMobile ? 20 : 30;

  // --- VARIANTS ---
  const fadeDown = {
    hidden: { opacity: 0, y: -dist },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -dist, transition: { duration: dur * 0.8 } },
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

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 -right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-8 z-10 text-center">
        {/* Badge */}
        <Motion.div
          ref={badgeRef}
          variants={fadeDown}
          initial="hidden"
          animate={badgeControls}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
          <span className="text-xs md:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide">
            LET’S CONNECT
          </span>
        </Motion.div>

        {/* Title */}
        <Motion.h2
          ref={titleRef}
          variants={fadeDown}
          initial="hidden"
          animate={titleControls}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </Motion.h2>

        {/* Description */}
        <Motion.p
          ref={descRef}
          variants={fadeUp}
          initial="hidden"
          animate={descControls}
          className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Have a project in mind, a collaboration offer, or just want to chat?
          Feel free to reach out, I’d love to hear from you!
        </Motion.p>

        {/* Buttons */}
        <Motion.div
          ref={buttonsRef}
          variants={fadeUp}
          initial="hidden"
          animate={buttonsControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="mailto:revimeidina72@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Email Me
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            href="https://wa.me/6281818294515"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-500 text-gray-900 dark:text-white font-semibold text-sm md:text-base transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:-translate-y-0.5"
          >
            WhatsApp
            <svg
              className="w-4 h-4 group-hover:rotate-45 transition-transform"
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
        </Motion.div>
      </div>
    </section>
  );
}
