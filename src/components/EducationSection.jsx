import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import umby from "../assets/images/umby.png";

export default function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");

  const badgeControls = useAnimation();
  const titleControls = useAnimation();
  const contentControls = useAnimation();

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const education = [
    {
      degree: "Bachelor of Informatics - Faculty of Information Technology",
      school: "Mercu Buana University Yogyakarta",
      period: "September 2021 – October 2025",
      gpa: "GPA: 3.86 / 4.00",
      thesis:
        "Microscopic Image Analysis of Organic and Non-Organic Rice Based on Texture Features Using the K-Nearest Neighbor Method",
      logo: umby,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      badgeControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 100);
      setTimeout(() => contentControls.start("visible"), 200);
    }
  }, [inView, badgeControls, titleControls, contentControls]);

  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;
      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top > screenHeight * 0.75) control.start("exit");
      };
      checkExit(contentRef, contentControls);
      checkExit(titleRef, titleControls);
      checkExit(badgeRef, badgeControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [badgeControls, titleControls, contentControls]);

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
      setTimeout(() => checkReEnter(contentRef, contentControls), 200);
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [badgeControls, titleControls, contentControls]);

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

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white transition-colors duration-300"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Geometric Shapes - Hidden on mobile */}
      <Motion.div
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-16 lg:top-20 right-16 lg:right-20 w-28 lg:w-36 h-28 lg:h-36 border-4 border-black opacity-5 rotate-45"
      />
      <Motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute bottom-16 lg:bottom-20 left-16 lg:left-20 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5 rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <Motion.div
            ref={badgeRef}
            variants={fadeDown}
            initial="hidden"
            animate={badgeControls}
            className="mb-4 sm:mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
                Academic Background
              </span>
            </div>
          </Motion.div>

          <Motion.h2
            ref={titleRef}
            variants={fadeDown}
            initial="hidden"
            animate={titleControls}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 uppercase"
          >
            Education
            <Motion.div
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-2 sm:mt-3 mx-auto w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-black"
            />
          </Motion.h2>
        </div>

        {/* Education Content */}
        <Motion.div
          ref={contentRef}
          variants={fadeUp}
          initial="hidden"
          animate={contentControls}
        >
          {education.map((edu, idx) => (
            <Motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative bg-white p-5 sm:p-6 md:p-8 border-2 sm:border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden">
                {/* Scan line effect */}
                <Motion.div
                  animate={{
                    y: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent h-20 opacity-0 group-hover:opacity-100"
                />

                {/* Content Layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6">
                  {/* Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-black bg-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-black bg-white" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-3 uppercase tracking-tight group-hover:tracking-wide transition-all duration-300">
                      {edu.school}
                    </h3>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                      <span className="text-xs sm:text-sm font-bold text-black uppercase tracking-wide">
                        {edu.degree}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm text-black/70 font-bold uppercase tracking-wider">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm font-black text-black uppercase tracking-wider">
                          {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Thesis */}
                    <div className="relative p-4 sm:p-5 bg-white border-2 border-black">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0 group-hover:animate-pulse" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <h4 className="text-xs sm:text-sm font-black text-black uppercase tracking-wider">
                              Thesis
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                            {edu.thesis}
                          </p>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black" />
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
