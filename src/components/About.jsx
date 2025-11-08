import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineArrowDownTray, HiOutlineArrowUpRight } from "react-icons/hi2";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef("down");
  const aboutTextControls = useAnimation();
  const titleControls = useAnimation();
  const para1Controls = useAnimation();
  const para2Controls = useAnimation();
  const btnControls = useAnimation();
  const aboutTextRef = useRef(null);
  const titleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- MASUK ---
  useEffect(() => {
    if (inView && scrollDirection.current === "down") {
      aboutTextControls.start("visible");
      para1Controls.start("visible");
      titleControls.start("visible");
      para2Controls.start("visible");
      btnControls.start("visible");
    }
  }, [
    inView,
    aboutTextControls,
    para1Controls,
    titleControls,
    para2Controls,
    btnControls,
  ]);

  // --- KELUAR (saat mendekati batas bawah layar) ---
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
      checkExit(titleRef, titleControls);
      checkExit(para1Ref, para1Controls);
      checkExit(aboutTextRef, aboutTextControls);
    };

    window.addEventListener("scroll", handleExit);
    return () => window.removeEventListener("scroll", handleExit);
  }, [
    btnControls,
    para2Controls,
    titleControls,
    para1Controls,
    aboutTextControls,
  ]);

  // --- MASUK LAGI (re-enter) ---
  useEffect(() => {
    const handleReEnter = () => {
      if (scrollDirection.current !== "down" || !inView) return;
      const screenHeight = window.innerHeight;
      const btnTop = btnRef.current?.getBoundingClientRect().top;
      if (btnTop < screenHeight * 0.9) {
        aboutTextControls.start("visible");
        para1Controls.start("visible");
        titleControls.start("visible");
        para2Controls.start("visible");
        btnControls.start("visible");
      }
    };
    window.addEventListener("scroll", handleReEnter);
    return () => window.removeEventListener("scroll", handleReEnter);
  }, [
    inView,
    aboutTextControls,
    para1Controls,
    titleControls,
    para2Controls,
    btnControls,
  ]);

  // Responsif
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const dist = isMobile ? 20 : 40;
  const dur = isMobile ? 0.45 : 0.65;

  // --- VARIANTS ---
  const fadeLeft = {
    hidden: { opacity: 0, x: dist },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -dist, transition: { duration: dur * 0.8 } }, // keluar ke kiri
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -dist },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: dur, ease: "easeOut" },
    },
    exit: { opacity: 0, x: dist, transition: { duration: dur * 0.8 } }, // keluar ke kanan
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

  const handleAboutMeClick = () => window.scrollTo(0, 0);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden transition-colors duration-200 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      {/* Background dekoratif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-12 right-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-15 left-16 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl animate-pulse" />

      {/* Konten utama */}
      <div className="relative container mx-auto px-6 sm:px-10 md:px-16 max-w-6xl grid md:grid-cols-2 gap-12 items-start z-10">
        {/* LEFT & RIGHT SECTION UNTUK TITLE DAN STATISTIK */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT - TITLE */}
          <div>
            <Motion.h4
              ref={aboutTextRef}
              variants={fadeDown}
              initial="hidden"
              animate={aboutTextControls}
              className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold mb-1"
            >
              About
            </Motion.h4>

            <Motion.h2
              ref={titleRef}
              variants={fadeLeft}
              initial="hidden"
              animate={titleControls}
              className="text-5xl font-extrabold text-pink-900 dark:text-rose-200 leading-tight"
            >
              <span className="block">Get to Know</span>
              <span className="block">About Me . . .</span>
            </Motion.h2>
          </div>

          {/* RIGHT - STATISTIK DENGAN PEMBATAS GARIS DI TENGAH */}
          <Motion.div
            variants={fadeRight}
            initial="hidden"
            animate={titleControls}
            className="flex items-center justify-start md:justify-end gap-8"
          >
            {/* Project */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-pink-900 dark:text-rose-200">
                15+
              </h3>
              <p className="text-pink-700 dark:text-rose-300 text-sm">
                Projects Completed
              </p>
            </div>

            {/* Garis pembatas antar statistik */}
            <div className="h-12 w-[2px] bg-pink-400/40 rounded-full"></div>

            {/* Experience */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-pink-900 dark:text-rose-200">
                3+
              </h3>
              <p className="text-pink-700 dark:text-rose-300 text-sm">
                Years Experience
              </p>
            </div>
          </Motion.div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 w-full max-w-5xl grid md:grid-cols-2 gap-10">
          {/* PARAGRAF KIRI */}
          <Motion.p
            ref={para1Ref}
            variants={fadeLeft}
            initial="hidden"
            animate={para1Controls}
            className="text-pink-800 dark:text-pink-200 leading-relaxed text-base text-justify"
          >
            My name is{" "}
            <span className="font-semibold text-pink-900 dark:text-rose-100">
              Meidina Revi Sandra Pertiwi
            </span>
            , a{" "}
            <span className="font-semibold text-pink-700 dark:text-rose-400">
              Front-End Web Developer
            </span>{" "}
            who loves crafting clean and interactive user interfaces. I enjoy
            combining aesthetics with functionality to create engaging web
            experiences that feel intuitive, polished, and user-focused while
            continuously learning new technologies to enhance performance and
            satisfaction.
          </Motion.p>

          {/* PARAGRAF KANAN */}
          <div>
            <Motion.p
              ref={para2Ref}
              variants={fadeRight}
              initial="hidden"
              animate={para2Controls}
              className="text-pink-800 dark:text-pink-200 leading-relaxed text-base text-justify"
            >
              If you're looking for a dedicated developer with an eye for detail
              and a genuine passion for building modern, user-friendly websites,
              feel free to get in touch.
            </Motion.p>

            {/* BUTTONS */}
            <Motion.div
              ref={btnRef}
              variants={fadeUp}
              initial="hidden"
              animate={btnControls}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full"
            >
              <Motion.a
                whileHover={{ boxShadow: "0 0 15px rgba(255,182,193,0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1IAEXZ7E9A45bBxFj9r_tGwTdhOfoNsaK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 h-12 
      w-full sm:w-auto rounded-full
      bg-pink-700 dark:bg-pink-900 text-white font-sans font-normal
      hover:bg-pink-600 dark:hover:bg-pink-800 transition-colors duration-300"
              >
                Download CV <HiOutlineArrowDownTray className="text-lg" />
              </Motion.a>

              <Motion.button
                whileHover={{ boxShadow: "0 0 15px rgba(255,182,193,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAboutMeClick}
                className="flex items-center justify-center gap-2 px-6 h-12 
      w-full sm:w-auto rounded-full border-2
      border-pink-800 dark:border-pink-400 text-pink-800 dark:text-pink-300
      font-sans font-normal hover:bg-pink-100 dark:hover:bg-pink-900/40 
      transition-colors duration-300"
              >
                About Me <HiOutlineArrowUpRight className="text-lg" />
              </Motion.button>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
