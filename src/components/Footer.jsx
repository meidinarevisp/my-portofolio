import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/meidinarevisp" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/meidina-revi/" },
    { icon: <FaInstagram />, url: "https://instagram.com/meidinarevisp" },
  ];

  return (
    <footer
      className="
        relative py-4 md:py-4
        bg-white dark:bg-[#0a0a0a]
        transition-colors duration-700
        font-[Quicksand]
        overflow-hidden
      "
    >
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="
          container mx-auto px-6
          flex flex-col md:flex-row items-center justify-between
          text-center md:text-left gap-4
          md:max-w-6xl
        "
      >
        {/* === LEFT === */}
        <p className="text-xs md:text-sm text-rose-700 dark:text-rose-300 font-sans tracking-wide md:w-1/3">
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* === CENTER: Social Media Icons === */}
        <div className="flex items-center justify-center gap-4 md:w-1/3">
          {socials.map((item, index) => (
            <Motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="
                w-9 h-9 flex items-center justify-center
                rounded-full border border-rose-200 dark:border-rose-800
                bg-transparent
                text-rose-700 dark:text-rose-200
                hover:bg-rose-50 dark:hover:bg-rose-900/10
                hover:text-rose-600 dark:hover:text-rose-100
                transition-all duration-300 text-lg
              "
            >
              {item.icon}
            </Motion.a>
          ))}
        </div>

        {/* === RIGHT === */}
        <div className="text-[10px] md:text-[12px] text-rose-700 dark:text-rose-300 md:w-1/3 md:text-right leading-snug">
          <p>
            Developed by{" "}
            <span className="font-semibold text-rose-900 dark:text-rose-100">
              Meidina Revi
            </span>
          </p>
          <p>
            Built with{" "}
            <span className="text-rose-600 dark:text-rose-200">React</span>,{" "}
            <span className="text-rose-600 dark:text-rose-200">Vite</span>, and{" "}
            <span className="text-rose-600 dark:text-rose-200">
              Tailwind CSS
            </span>
          </p>
        </div>
      </Motion.div>
    </footer>
  );
}
