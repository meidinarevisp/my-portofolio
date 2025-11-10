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
        if (rect.top > screenHeight * 0.7) control.start("exit");
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
                ACADEMIC BACKGROUND
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
            My{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </Motion.h2>
        </div>

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
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/90 dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:to-[#181818] backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-900/30 transition-all duration-500">
                {/* Logo container */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-br from-pink-400/20 to-rose-400/20 dark:from-pink-600/20 dark:to-rose-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white dark:bg-[#2a2a2a] rounded-2xl p-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={umby}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {edu.school}
                  </h3>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 mb-3">
                    <span className="text-sm font-semibold text-pink-700 dark:text-pink-300">
                      {edu.degree}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-pink-600 dark:text-pink-400"
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
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-pink-600 dark:text-pink-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 rounded-xl border border-pink-100 dark:border-pink-800/30">
                    <div className="flex items-start gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <div>
                        <h4 className="text-sm font-bold text-pink-700 dark:text-pink-300 mb-1">
                          Thesis
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                          {edu.thesis}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
