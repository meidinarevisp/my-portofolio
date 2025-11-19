import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");
  const aboutTextControls = useAnimation();
  const titleControls = useAnimation();
  const statsControls = useAnimation();
  const para1Controls = useAnimation();
  const para2Controls = useAnimation();
  const btnControls = useAnimation();

  const aboutTextRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const newDirection = currentY > lastScrollY.current ? "down" : "up";

      if (scrollDirection.current !== newDirection) {
        scrollDirection.current = newDirection;

        if (newDirection === "down" && inView) {
          aboutTextControls.start("visible");
          titleControls.start("visible");
          statsControls.start("visible");
          para1Controls.start("visible");
          para2Controls.start("visible");
          btnControls.start("visible");
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    inView,
    aboutTextControls,
    titleControls,
    statsControls,
    para1Controls,
    para2Controls,
    btnControls,
  ]);

  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      aboutTextControls.start("visible");
      setTimeout(() => titleControls.start("visible"), 150);
      setTimeout(() => statsControls.start("visible"), 300);
      setTimeout(() => para1Controls.start("visible"), 450);
      setTimeout(() => para2Controls.start("visible"), 600);
      setTimeout(() => btnControls.start("visible"), 750);
    }
  }, [
    inView,
    aboutTextControls,
    titleControls,
    statsControls,
    para1Controls,
    para2Controls,
    btnControls,
  ]);

  useEffect(() => {
    const handleExit = () => {
      if (scrollDirection.current !== "up") return;
      const screenHeight = window.innerHeight;

      const checkExit = (ref, control) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const { top, bottom } = rect;
        if (top > screenHeight * 0.7 && bottom > 0) control.start("exit");
      };

      checkExit(btnRef, btnControls);
      checkExit(para2Ref, para2Controls);
      checkExit(para1Ref, para1Controls);
      checkExit(statsRef, statsControls);
      checkExit(titleRef, titleControls);
      checkExit(aboutTextRef, aboutTextControls);
    };

    window.addEventListener("scroll", handleExit, { passive: true });
    return () => window.removeEventListener("scroll", handleExit);
  }, [
    btnControls,
    para2Controls,
    para1Controls,
    statsControls,
    titleControls,
    aboutTextControls,
  ]);

  useEffect(() => {
    const handleReEnter = () => {
      if (scrollDirection.current !== "down" || !inView) return;
      const screenHeight = window.innerHeight;
      const btnTop = btnRef.current?.getBoundingClientRect().top;
      if (btnTop < screenHeight * 0.9) {
        aboutTextControls.start("visible");
        titleControls.start("visible");
        statsControls.start("visible");
        para1Controls.start("visible");
        para2Controls.start("visible");
        btnControls.start("visible");
      }
    };
    window.addEventListener("scroll", handleReEnter, { passive: true });
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [
    inView,
    aboutTextControls,
    titleControls,
    statsControls,
    para1Controls,
    para2Controls,
    btnControls,
  ]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dist = isMobile ? 20 : 40;
  const dur = isMobile ? 0.45 : 0.65;

  const fadeLeft = {
    hidden: { opacity: 0, x: dist },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -dist, transition: { duration: dur * 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -dist },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: dist, transition: { duration: dur * 0.8 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: isMobile ? 20 : 30,
      transition: { duration: dur * 0.8 },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: isMobile ? -20 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: isMobile ? -20 : -30,
      transition: { duration: dur * 0.7 },
    },
  };

  const handleAboutMeClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden transition-colors duration-300 bg-white"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Retro Geometric Shapes - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-24 lg:w-32 h-24 lg:h-32 border-4 border-black opacity-5" />
      <div className="hidden md:block absolute bottom-32 left-16 w-20 lg:w-24 h-20 lg:h-24 border-4 border-black opacity-5 rotate-45" />

      {/* Konten utama */}
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          {/* LEFT - TITLE */}
          <div>
            <Motion.div
              ref={aboutTextRef}
              variants={fadeDown}
              initial="hidden"
              animate={aboutTextControls}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white mb-3 sm:mb-4"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
                About Me
              </span>
            </Motion.div>

            <Motion.h2
              ref={titleRef}
              variants={fadeLeft}
              initial="hidden"
              animate={titleControls}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight uppercase"
            >
              <span className="block">Get to Know</span>
              <span className="block">About Me</span>
              <div className="mt-2 sm:mt-3 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-black" />
            </Motion.h2>
          </div>

          {/* RIGHT - STATISTIK */}
          <Motion.div
            ref={statsRef}
            variants={fadeRight}
            initial="hidden"
            animate={statsControls}
            className="flex items-center justify-start md:justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {/* Projects */}
            <div className="relative group">
              <div className="relative flex flex-col items-center text-center bg-white backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-0.5 sm:mb-1">
                  15+
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-black font-bold uppercase tracking-wider">
                  Projects
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-12 sm:h-16 md:h-20 w-[2px] sm:w-[3px] bg-black" />

            {/* Experience */}
            <div className="relative group">
              <div className="relative flex flex-col items-center text-center bg-white backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-0.5 sm:mb-1">
                  3+
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-black font-bold uppercase tracking-wider">
                  Years
                </p>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* PARAGRAF KIRI */}
          <Motion.div
            ref={para1Ref}
            variants={fadeLeft}
            initial="hidden"
            animate={para1Controls}
            className="relative"
          >
            <div className="absolute -left-1 sm:-left-2 top-0 w-0.5 sm:w-1 h-full bg-black" />
            <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg text-justify pl-1 sm:pl-0">
              My name is{" "}
              <span className="font-black text-black">
                Meidina Revi Sandra Pertiwi
              </span>
              , a{" "}
              <span className="font-bold text-black border-b-2 border-black">
                Front-End Web Developer
              </span>{" "}
              who loves crafting clean and interactive user interfaces. I enjoy
              combining aesthetics with functionality to create engaging web
              experiences that feel intuitive, polished, and user-focused.
            </p>
          </Motion.div>

          {/* PARAGRAF KANAN + BUTTONS */}
          <div className="space-y-4 sm:space-y-6">
            <Motion.div
              ref={para2Ref}
              variants={fadeRight}
              initial="hidden"
              animate={para2Controls}
              className="relative"
            >
              <div className="absolute -right-1 sm:-right-2 top-0 w-0.5 sm:w-1 h-full bg-black" />
              <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg text-justify pr-1 sm:pr-0">
                I continuously learn new technologies to enhance performance and
                user satisfaction. If you're looking for a dedicated developer
                with an eye for detail and a genuine passion for building
                modern, user-friendly websites, feel free to get in touch.
              </p>
            </Motion.div>

            {/* BUTTONS */}
            <Motion.div
              ref={btnRef}
              variants={fadeUp}
              initial="hidden"
              animate={btnControls}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4"
            >
              <Motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                href="https://drive.google.com/file/d/1IAEXZ7E9A45bBxFj9r_tGwTdhOfoNsaK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-black text-white font-bold text-xs sm:text-sm md:text-base border-2 border-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>Download CV</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </Motion.a>

              <Motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={handleAboutMeClick}
                className="group flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-2 border-black text-black font-bold text-xs sm:text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>About Me</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Motion.button>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
