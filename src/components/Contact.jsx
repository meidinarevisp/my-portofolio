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
      const reEnterThreshold = screenHeight * 1.2;
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-black transition-colors duration-300"
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

      {/* Retro Geometric Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-32 lg:w-40 h-32 lg:h-40 border-4 border-white opacity-10 rotate-45 animate-pulse-slow" />
      <div
        className="hidden md:block absolute bottom-32 right-16 w-24 lg:w-32 h-24 lg:h-32 border-4 border-white opacity-10 rounded-full animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="hidden lg:block absolute top-1/2 right-20 w-24 h-24 border-4 border-white opacity-10" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 z-10 text-center">
        {/* Badge */}
        <Motion.div
          ref={badgeRef}
          variants={fadeDown}
          initial="hidden"
          animate={badgeControls}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-white bg-black mb-4 sm:mb-5 md:mb-6"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white tracking-widest uppercase">
            LET'S CONNECT
          </span>
        </Motion.div>

        {/* Title */}
        <Motion.h2
          ref={titleRef}
          variants={fadeDown}
          initial="hidden"
          animate={titleControls}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 uppercase"
        >
          <span className="block">Get in</span>
          <span className="block">Touch</span>
          <div className="mt-2 sm:mt-3 mx-auto w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-white" />
        </Motion.h2>

        {/* Description */}
        <Motion.p
          ref={descRef}
          variants={fadeUp}
          initial="hidden"
          animate={descControls}
          className="text-gray-300 max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base leading-relaxed px-2"
        >
          Have a project in mind, a collaboration offer, or just want to chat?
          Feel free to reach out, I'd love to hear from you!
        </Motion.p>

        {/* Buttons */}
        <Motion.div
          ref={buttonsRef}
          variants={fadeUp}
          initial="hidden"
          animate={buttonsControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6"
        >
          <Motion.a
            href="mailto:revimeidina72@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-white text-black font-bold text-xs sm:text-sm md:text-base border-2 border-white hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
          >
            Email Me
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
          </Motion.a>

          <Motion.a
            href="https://wa.me/6281818294515"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 border-2 border-white bg-black text-white font-bold text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
          >
            WhatsApp
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform"
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
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}
