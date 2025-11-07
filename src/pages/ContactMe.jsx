import React from "react";
import { motion as Motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactMe() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact-page"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 bg-[#fef6f8] dark:bg-[#0a0a0a] text-pink-900 dark:text-pink-100 overflow-hidden transition-colors duration-700"
    >
      {/* TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* FLOATING BLURS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 dark:bg-pink-900/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-500/15 dark:bg-rose-900/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* CONTENT */}
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-2xl flex flex-col items-center gap-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">Contact Me</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just say hi, feel free to reach out.
        </p>
        <a
          href="mailto:revimeidina72@gmail.com"
          className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full bg-pink-700 dark:bg-pink-900 text-white font-medium hover:bg-pink-600 dark:hover:bg-pink-800 shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <HiOutlineMail size={24} />
          Send Email
        </a>
      </Motion.div>
    </section>
  );
}
