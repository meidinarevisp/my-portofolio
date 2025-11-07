import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // animasi bisa diulang saat scroll
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // ===== VARIANTS =====
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.7, ease: "easeIn" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 transition-colors duration-700 bg-[#fef6f8] dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* === BACKGROUND EFFECTS === */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      <div className="absolute top-22 right-24 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-16 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* === CONTENT WRAPPER === */}
      <Motion.div
        className="relative container mx-auto px-8 max-w-4xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        {/* === HEADER === */}
        <Motion.div className="text-center mb-12" variants={containerVariants}>
          <p className="text-sm tracking-widest text-pink-600 uppercase dark:text-pink-400 font-semibold">
            Contact
          </p>
          <h2 className="text-5xl font-extrabold text-pink-900 dark:text-rose-200 mt-2">
            Get In Touch
          </h2>
          <p className="mt-4 text-pink-800 dark:text-pink-200 max-w-xl mx-auto">
            Have a question, a project idea, or just want to say hi? Feel free
            to leave a message below, and I’ll get back to you shortly!
          </p>
        </Motion.div>

        {/* === CONTACT BUTTONS === */}
        <Motion.div
          className="flex flex-col gap-6 items-center"
          variants={buttonVariants}
        >
          {/* Email */}
          <Motion.div
            variants={buttonVariants}
            className="text-center flex flex-col items-center"
          >
            <p className="text-xs uppercase tracking-wide text-pink-600 dark:text-pink-400 font-semibold mb-2">
              Email Me
            </p>
            <Motion.a
              href="mailto:revimeidina72@gmail.com"
              className="flex items-center justify-center w-72 md:w-80 h-12 rounded-full border border-pink-400/40 dark:border-pink-700/40 bg-transparent text-pink-800 dark:text-pink-200 font-sans font-semibold shadow-sm backdrop-blur-sm hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:border-pink-500 dark:hover:border-pink-600 hover:text-pink-700 dark:hover:text-pink-300 transition-all duration-300 text-center leading-none"
              whileHover={{
                boxShadow: "0px 6px 15px rgba(255,0,120,0.2)",
              }}
            >
              revimeidina72@gmail.com
            </Motion.a>
          </Motion.div>

          {/* WhatsApp */}
          <Motion.div
            variants={buttonVariants}
            className="text-center flex flex-col items-center"
          >
            <p className="text-xs uppercase tracking-wide text-pink-600 dark:text-pink-400 font-semibold mb-2">
              WhatsApp Me
            </p>
            <Motion.a
              href="https://wa.me/6281818294515"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-72 md:w-80 h-12 rounded-full border border-pink-400/40 dark:border-pink-700/40 bg-transparent text-pink-800 dark:text-pink-200 font-sans font-semibold shadow-sm backdrop-blur-sm hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:border-pink-500 dark:hover:border-pink-600 hover:text-pink-700 dark:hover:text-pink-300 transition-all duration-300 text-center leading-none"
              whileHover={{
                boxShadow: "0px 6px 15px rgba(255,0,120,0.2)",
              }}
            >
              +62 818 1829 4515
            </Motion.a>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
