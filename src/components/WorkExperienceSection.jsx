import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import workExperience from "../data/workExperience";

export default function WorkExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
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
        if (rect.top > screenHeight * 0.75) control.start("exit");
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

  const getItemDelay = (index) => index * 0.15;

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: getItemDelay(i), duration: 0.4, ease: "easeOut" },
    }),
    exit: (i = 0) => ({
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        delay: getItemDelay(i) * 0.2,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
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
        className="hidden md:block absolute top-16 lg:top-20 left-16 lg:left-20 w-28 lg:w-36 h-28 lg:h-36 border-4 border-black opacity-5 rotate-45"
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
        className="hidden md:block absolute bottom-16 lg:bottom-20 right-16 lg:right-20 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5 rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Professional Journey
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
            Work Experience
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

        {/* Work Experience Grid */}
        <Motion.div
          ref={gridRef}
          variants={scaleIn}
          initial="hidden"
          animate={gridControls}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          {workExperience.map((job, idx) => (
            <Motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              className="group relative"
            >
              <div className="relative bg-white p-5 sm:p-6 border-2 sm:border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[240px] sm:min-h-[260px] flex flex-col">
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

                {/* Type badge */}
                {job.type && (
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-5 text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-2.5 sm:py-1 bg-black text-white border-2 border-black uppercase tracking-wider">
                    {job.type}
                  </div>
                )}

                {/* Company header */}
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black bg-white text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {job.icon || job.company.charAt(0)}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h5 className="font-black text-sm sm:text-base text-black uppercase tracking-tight group-hover:tracking-wide transition-all duration-300">
                      {job.company}
                    </h5>
                    <p className="text-[10px] sm:text-xs text-black/70 font-bold uppercase tracking-wider">
                      {job.period}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <h6 className="text-base sm:text-lg font-black text-black mb-2 uppercase tracking-tight">
                  {job.role}
                </h6>

                {/* Description */}
                {job.description && (
                  <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-4 flex-1">
                    {job.description}
                  </p>
                )}

                {/* Details overlay on hover */}
                {job.details && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white border-2 sm:border-3 border-black overflow-hidden">
                    <div className="h-full overflow-y-auto p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black" />
                        <h6 className="font-black text-xs sm:text-sm text-black uppercase tracking-wider">
                          Key Responsibilities
                        </h6>
                      </div>
                      <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-black">
                        {job.details.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-black mt-0.5 font-black">
                              •
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
