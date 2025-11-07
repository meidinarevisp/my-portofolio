import React from "react";
import { motion as Motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineArrowDownTray, HiOutlineArrowUpRight } from "react-icons/hi2";

export default function About() {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Deteksi arah scroll
  const isScrollingUp =
    entry?.boundingClientRect?.top > 0 && entry?.isIntersecting === false;

  // Variants transisi masuk dan keluar
  const fadeFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 60, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -60, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const fadeFromBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 40, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden transition-colors duration-200 bg-[#fef6f8] dark:bg-[#0a0a0a]"
    >
      {/* === BACKGROUND EFFECTS === */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-12 right-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-15 left-16 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl animate-pulse" />

      {/* === CONTENT === */}
      <Motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : isScrollingUp ? "exit" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          exit: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
        }}
        className="relative container mx-auto px-8 max-w-6xl grid md:grid-cols-2 gap-14 items-center z-10"
      >
        {/* === LEFT SIDE === */}
        <div>
          {/* 1️⃣ About (geser kiri→kanan) */}
          <Motion.h4
            variants={fadeFromLeft}
            className="text-sm text-pink-600 dark:text-pink-400 tracking-widest uppercase font-semibold mb-2"
          >
            About
          </Motion.h4>

          {/* 2️⃣ Get to Know... (geser kiri→kanan) */}
          <Motion.h2
            variants={fadeFromLeft}
            className="text-5xl font-extrabold text-pink-900 dark:text-rose-200 leading-tight"
          >
            Get to Know <br /> About Me . . .
          </Motion.h2>
        </div>

        {/* === RIGHT SIDE === */}
        <div className="max-w-xl space-y-6">
          {/* 3️⃣ Paragraf pertama (geser kanan→kiri) */}
          <Motion.p
            variants={fadeFromRight}
            className="text-pink-800 dark:text-pink-200 leading-relaxed text-base"
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
            experiences that feel intuitive and polished.
          </Motion.p>

          {/* 4️⃣ Paragraf kedua (geser kanan→kiri) */}
          <Motion.p
            variants={fadeFromRight}
            className="text-pink-800 dark:text-pink-200 leading-relaxed text-base"
          >
            If you are looking for someone with a strong work ethic and a
            passion for creating impressive websites, please don't hesitate to
            reach out.
          </Motion.p>

          {/* 5️⃣ BUTTONS (geser bawah→atas untuk masuk, dan ke bawah saat keluar) */}
          <Motion.div
            variants={fadeFromBottom}
            className="pt-4 flex gap-4 flex-wrap"
          >
            {/* Download CV */}
            <Motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,182,193,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1IAEXZ7E9A45bBxFj9r_tGwTdhOfoNsaK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full 
              bg-pink-700 dark:bg-pink-900 text-white font-sans font-normal
              hover:bg-pink-600 dark:hover:bg-pink-800 transition-colors duration-300"
            >
              Download CV <HiOutlineArrowDownTray className="text-lg" />
            </Motion.a>

            {/* About Me */}
            <Motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,182,193,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 
              border-pink-800 dark:border-pink-400 text-pink-800 dark:text-pink-300 
              font-sans font-normal hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors duration-300"
            >
              About Me <HiOutlineArrowUpRight className="text-lg" />
            </Motion.button>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
}
