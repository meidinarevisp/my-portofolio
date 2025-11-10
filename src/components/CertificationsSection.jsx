import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import certifications from "../data/certifications";

export default function CertificationsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");

  const badgeControls = useAnimation();
  const titleControls = useAnimation();
  const gridControls = useAnimation();

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

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
      setTimeout(() => gridControls.start("visible"), 200);
    }
  }, [inView, badgeControls, titleControls, gridControls]);

  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;
      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        if (rect.top > screenHeight * 0.7) control.start("exit");
      };
      checkExit(gridRef, gridControls);
      checkExit(titleRef, titleControls);
      checkExit(badgeRef, badgeControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [badgeControls, titleControls, gridControls]);

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
      setTimeout(() => checkReEnter(gridRef, gridControls), 200);
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [badgeControls, titleControls, gridControls]);

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: dur * 0.7 } },
  };

  const getItemDelay = (index, itemsPerRow = 2) => {
    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;
    return row * 0.1 + col * 0.05;
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: getItemDelay(i), duration: 0.5, ease: "easeOut" },
    }),
    exit: (i = 0) => ({
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        delay: getItemDelay(i) * 0.3,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 -right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <Motion.div
            ref={badgeRef}
            variants={fadeDown}
            initial="hidden"
            animate={badgeControls}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50">
              <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide">
                CONTINUOUS LEARNING
              </span>
            </div>
          </Motion.div>

          <Motion.h2
            ref={titleRef}
            variants={fadeDown}
            initial="hidden"
            animate={titleControls}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Certifications &{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
              Courses
            </span>
          </Motion.h2>
        </div>

        <Motion.div
          ref={gridRef}
          variants={scaleIn}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {certifications.map((cert, idx) => (
            <Motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

              <div className="relative flex items-start gap-4 bg-white/90 dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:to-[#181818] backdrop-blur-sm p-5 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-900/30 transition-all duration-500 hover:-translate-y-2">
                {/* Logo */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-pink-400/20 to-rose-400/20 dark:from-pink-600/20 dark:to-rose-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-50 dark:to-rose-50 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.institution}
                        className="w-9 h-9 object-contain"
                      />
                    ) : (
                      <span className="text-pink-700 dark:text-pink-300 font-bold text-xl">
                        {cert.institution.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {cert.title}
                  </h5>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="truncate">{cert.institution}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </div>

                {/* Link badge */}
                {cert.credential && cert.credential !== "#" && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border-2 border-pink-600 dark:border-pink-400 text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-400 dark:hover:text-pink-900 transition-all duration-300 group/link"
                    title="View Certificate"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                )}

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
