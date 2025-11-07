import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        relative py-5
        bg-[#ffe4e8] dark:bg-[#121010]
        transition-colors duration-700
        font-[Quicksand]
      "
    >
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          container mx-auto px-8 
          relative flex flex-col md:flex-row items-center justify-between 
          gap-4 text-center md:text-left
        "
      >
        {/* ===== Left: Copyright ===== */}
        <p className="text-sm text-rose-700 dark:text-rose-300 font-sans tracking-wide md:order-1 order-2">
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* ===== Center: Social Icons ===== */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            flex items-center justify-center gap-4
            order-1 md:order-2
          "
        >
          {socials.map((item, index) => (
            <Motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full shadow-sm 
                bg-white/60 dark:bg-white/10
                text-rose-700 dark:text-rose-200
                hover:bg-white dark:hover:bg-white/20
                hover:text-rose-600 dark:hover:text-rose-100
                transition-all duration-300
                text-2xl
              "
            >
              {item.icon}
            </Motion.a>
          ))}
        </div>

        {/* ===== Right: Built With Text ===== */}
        <p className="text-xs text-rose-700 dark:text-rose-300 leading-snug font-[Poppins] font-normal tracking-wide md:order-3 order-3">
          <span className="text-rose-900 dark:text-rose-50 tracking-wide">
            Developed by Meidina Revi — Built with{" "}
            <span className="text-rose-600 dark:text-rose-200">React</span>,{" "}
            <span className="text-rose-600 dark:text-rose-200">Vite</span>, and{" "}
            <span className="text-rose-600 dark:text-rose-200">
              Tailwind CSS
            </span>
          </span>
        </p>
      </Motion.div>

      {/* ===== Subtle Texture Noise ===== */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.05]
          bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
        "
      />
    </footer>
  );
}
