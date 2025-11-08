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
        relative py-6
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
          flex flex-col md:flex-row items-center justify-between
          gap-6 text-center md:text-left relative
          md:max-w-6xl
        "
      >
        {/* ===== Left: Copyright ===== */}
        <p className="text-sm text-rose-700 dark:text-rose-300 font-sans tracking-wide order-3 md:order-1 w-full md:w-1/3">
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* ===== Center: Social Icons (tengah simetris) ===== */}
        <div
          className="
            flex items-center justify-center gap-4
            order-1 md:order-2 w-full md:w-1/3
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

        {/* ===== Right: Built With Text (2 baris, seimbang) ===== */}
        <div
          className="
            text-xs text-rose-700 dark:text-rose-300 leading-relaxed 
            font-[Poppins] font-normal tracking-wide 
            order-2 md:order-3 w-full md:w-1/3 
            text-center md:text-right
          "
        >
          <p>
            <span className="text-rose-900 dark:text-rose-50">
              Developed by{" "}
              <span className="font-semibold text-rose-900 dark:text-rose-100">
                Meidina Revi
              </span>
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
