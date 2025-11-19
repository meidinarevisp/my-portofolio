import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../assets/images/profile.png";

export default function AboutHero() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");
  const hasAnimatedOnce = useRef(false);

  // Controls
  const badgeControls = useAnimation();
  const titleControls = useAnimation();
  const imageControls = useAnimation();
  const contentControls = useAnimation();

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Initial animation on mount - LANGSUNG MUNCUL
  useEffect(() => {
    if (!hasAnimatedOnce.current) {
      hasAnimatedOnce.current = true;
      // Trigger animasi langsung saat komponen pertama kali dimuat
      badgeControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 150);
      setTimeout(() => imageControls.start("visible"), 300);
      setTimeout(() => contentControls.start("visible"), 450);
    }
  }, [badgeControls, titleControls, imageControls, contentControls]);

  // Scroll direction tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sequential entrance on scroll down (untuk re-enter setelah exit)
  useEffect(() => {
    if (
      inView &&
      scrollDirection.current === "down" &&
      hasAnimatedOnce.current
    ) {
      badgeControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 150);
      setTimeout(() => imageControls.start("visible"), 300);
      setTimeout(() => contentControls.start("visible"), 450);
    }
  }, [inView, badgeControls, titleControls, imageControls, contentControls]);

  // Exit animation on scroll up
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
      checkExit(imageRef, imageControls);
      checkExit(titleRef, titleControls);
      checkExit(badgeRef, badgeControls);
    };
    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [badgeControls, titleControls, imageControls, contentControls]);

  // Re-enter on scroll down
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
      setTimeout(() => checkReEnter(imageRef, imageControls), 300);
      setTimeout(() => checkReEnter(contentRef, contentControls), 450);
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [badgeControls, titleControls, imageControls, contentControls]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dur = isMobile ? 0.45 : 0.65;
  const dist = isMobile ? 20 : 30;

  // Animation variants - UBAH INITIAL STATE
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

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: dur * 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30, transition: { duration: dur * 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="relative pt-24 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-white transition-colors duration-300"
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
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-16 lg:top-20 left-8 lg:left-10 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5"
      />
      <Motion.div
        animate={{
          rotate: [0, -90, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden md:block absolute bottom-16 lg:bottom-20 right-8 lg:right-10 w-28 lg:w-32 h-28 lg:h-32 border-4 border-black opacity-5 rotate-45"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <Motion.div
          ref={badgeRef}
          variants={fadeDown}
          initial="visible"
          animate={badgeControls}
          className="flex justify-center mb-4 sm:mb-5 md:mb-6"
        >
          <Motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black"
            />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
              Get to Know Me
            </span>
          </Motion.div>
        </Motion.div>

        {/* Title */}
        <Motion.h2
          ref={titleRef}
          variants={fadeDown}
          initial="visible"
          animate={titleControls}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase mb-8 sm:mb-10 md:mb-12"
        >
          More About Me
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

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Profile Image Container */}
          <Motion.div
            ref={imageRef}
            variants={isMobile ? fadeUp : fadeLeft}
            initial="visible"
            animate={imageControls}
            className="relative flex-shrink-0 group"
          >
            {/* Animated Outer Ring */}
            <Motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 sm:-inset-3 border-2 border-dashed border-black opacity-20 rounded-full"
            />

            {/* Main Image Container */}
            <Motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden border-4 sm:border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-full"
            >
              {/* Grid Overlay */}
              <div
                className="absolute inset-0 z-10 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Scan Line Effect */}
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
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent z-20 h-16 sm:h-20"
              />

              {/* Placeholder for Profile Image */}
              <img
                src={profile}
                alt="Meidina Revi Sandra Pertiwi"
                className="w-full h-full object-cover mt-8 sm:mt-10 scale-125 group-hover:scale-[1.28] transition-transform duration-700"
                style={{ objectPosition: "center 55%" }}
              />
            </Motion.div>

            {/* Corner Accents */}
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 sm:w-12 h-10 sm:h-12 border-t-3 border-l-3 sm:border-t-4 sm:border-l-4 border-black" />
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-10 sm:w-12 h-10 sm:h-12 border-b-3 border-r-3 sm:border-b-4 sm:border-r-4 border-black" />
          </Motion.div>

          {/* Text Content */}
          <Motion.div
            ref={contentRef}
            variants={isMobile ? fadeUp : fadeRight}
            initial="visible"
            animate={contentControls}
            className="flex-1 text-center md:text-left space-y-4 sm:space-y-5"
          >
            {/* Name & Role */}
            <div>
              <Motion.h3
                whileHover={{ x: isMobile ? 0 : 5 }}
                className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2 sm:mb-3 uppercase tracking-tight"
              >
                Meidina Revi Sandra Pertiwi
              </Motion.h3>

              {/* Role Badge */}
              <Motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white"
                />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Front-End Web Developer
                </span>
              </Motion.div>
            </div>

            {/* Description Cards */}
            <div className="space-y-3 sm:space-y-4">
              <Motion.div
                whileHover={{ x: isMobile ? 0 : 5 }}
                className="p-3 sm:p-4 md:p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <p className="text-xs sm:text-sm text-black leading-relaxed text-justify">
                  I'm an enthusiastic Web and Mobile Developer who enjoys
                  transforming ideas into functional, user-friendly
                  applications. Skilled in{" "}
                  <span className="font-black text-black border-b-2 border-black">
                    HTML, CSS, JavaScript, PHP, MySQL, and Flutter
                  </span>
                  , I've developed projects ranging from interactive websites to
                  mobile apps with speech-to-text features.
                </p>
              </Motion.div>

              <Motion.div
                whileHover={{ x: isMobile ? 0 : 5 }}
                className="p-3 sm:p-4 md:p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <p className="text-xs sm:text-sm text-black leading-relaxed text-justify">
                  I value{" "}
                  <span className="font-black text-black border-b-2 border-black">
                    collaboration, adaptability, and attention to detail
                  </span>{" "}
                  in every project. Whether developing responsive interfaces or
                  experimenting with new technologies, I'm driven by a desire to
                  create solutions that are both efficient and meaningful.
                </p>
              </Motion.div>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
              {[
                { name: "Web Development", icon: "🌐" },
                { name: "Mobile Apps", icon: "📱" },
                { name: "UI/UX", icon: "🎨" },
                { name: "Problem Solver", icon: "💡" },
              ].map((skill, index) => (
                <Motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group relative px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer overflow-hidden transition-all duration-300"
                >
                  <Motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
                  />

                  <span className="relative flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-black uppercase tracking-wide">
                    <span className="text-xs sm:text-sm">{skill.icon}</span>
                    {skill.name}
                  </span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
