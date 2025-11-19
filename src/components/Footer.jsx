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
    <footer className="relative py-6 sm:py-7 md:py-8 bg-black transition-colors duration-300 overflow-hidden border-t-4 border-white">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
        }}
      />

      <Motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 sm:px-6 md:max-w-6xl z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8">
          {/* LEFT - Copyright */}
          <div className="flex items-center gap-2 md:w-1/3 order-2 md:order-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white" />
            <p className="text-[10px] sm:text-xs md:text-sm text-white font-bold tracking-wider uppercase">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* CENTER - Social Media */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:w-1/3 order-1 md:order-2">
            {socials.map((item, index) => (
              <Motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center border-2 border-white bg-black hover:bg-white text-white hover:text-black transition-all duration-300 text-base sm:text-lg shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                {item.icon}
              </Motion.a>
            ))}
          </div>

          {/* RIGHT - Credits */}
          <div className="text-center md:text-right md:w-1/3 order-3">
            <div className="flex flex-col gap-1">
              <p className="text-[9px] sm:text-[10px] md:text-xs text-white font-bold tracking-wider uppercase">
                Developed by{" "}
                <span className="border-b-2 border-white">Meidina Revi</span>
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
                Built with <span className="text-white font-bold">React</span>,{" "}
                <span className="text-white font-bold">Vite</span> &{" "}
                <span className="text-white font-bold">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </Motion.div>
    </footer>
  );
}
