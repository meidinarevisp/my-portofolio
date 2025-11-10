import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const navigate = useNavigate();
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

  // Handler untuk navigasi ke halaman About menggunakan React Router
  const handleAboutMeClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]"
    >
      {/* Background dekoratif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-20 right-10 md:right-24 w-64 md:w-72 h-64 md:h-72 bg-pink-400/20 dark:bg-pink-600/15 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 left-10 md:left-16 w-56 md:w-64 h-56 md:h-64 bg-rose-400/15 dark:bg-rose-600/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Konten utama */}
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-10 md:mb-12">
          {/* LEFT - TITLE */}
          <div>
            <Motion.div
              ref={aboutTextRef}
              variants={fadeDown}
              initial="hidden"
              animate={aboutTextControls}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200 dark:border-pink-800/50 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-pink-600 dark:bg-pink-400 animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-pink-900 dark:text-pink-300 tracking-wide uppercase">
                About Me
              </span>
            </Motion.div>

            <Motion.h2
              ref={titleRef}
              variants={fadeLeft}
              initial="hidden"
              animate={titleControls}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              <span className="block">Get to Know</span>
              <span className="block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </Motion.h2>
          </div>

          {/* RIGHT - STATISTIK */}
          <Motion.div
            ref={statsRef}
            variants={fadeRight}
            initial="hidden"
            animate={statsControls}
            className="flex items-center justify-start md:justify-end gap-6 md:gap-8 lg:gap-10"
          >
            {/* Projects */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative flex flex-col items-center text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-5 md:px-8 md:py-6 border border-pink-200/50 dark:border-pink-800/30 shadow-lg">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent mb-1">
                  15+
                </h3>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">
                  Projects
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-16 md:h-20 w-[2px] bg-gradient-to-b from-pink-400/40 via-rose-400/60 to-pink-400/40 dark:from-pink-600/30 dark:via-rose-600/50 dark:to-pink-600/30 rounded-full" />

            {/* Experience */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-purple-500/20 dark:from-rose-600/10 dark:to-purple-700/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative flex flex-col items-center text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-5 md:px-8 md:py-6 border border-rose-200/50 dark:border-rose-800/30 shadow-lg">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-rose-600 to-purple-600 dark:from-rose-400 dark:to-purple-400 bg-clip-text text-transparent mb-1">
                  3+
                </h3>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">
                  Years
                </p>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* PARAGRAF KIRI */}
          <Motion.div
            ref={para1Ref}
            variants={fadeLeft}
            initial="hidden"
            animate={para1Controls}
            className="relative"
          >
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-rose-500 to-transparent rounded-full opacity-50" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              My name is{" "}
              <span className="font-bold text-pink-900 dark:text-pink-100">
                Meidina Revi Sandra Pertiwi
              </span>
              , a{" "}
              <span className="font-semibold text-pink-700 dark:text-rose-400">
                Front-End Web Developer
              </span>{" "}
              who loves crafting clean and interactive user interfaces. I enjoy
              combining aesthetics with functionality to create engaging web
              experiences that feel intuitive, polished, and user-focused.
            </p>
          </Motion.div>

          {/* PARAGRAF KANAN + BUTTONS */}
          <div className="space-y-6">
            <Motion.div
              ref={para2Ref}
              variants={fadeRight}
              initial="hidden"
              animate={para2Controls}
              className="relative"
            >
              <div className="absolute -right-2 top-0 w-1 h-full bg-gradient-to-b from-rose-500 via-purple-500 to-transparent rounded-full opacity-50" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
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
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                href="https://drive.google.com/file/d/1IAEXZ7E9A45bBxFj9r_tGwTdhOfoNsaK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold text-sm md:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform"
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
                className="group flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-pink-600 dark:hover:border-pink-500 text-gray-900 dark:text-white font-semibold text-sm md:text-base transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-900/10"
              >
                <span>About Me</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
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
