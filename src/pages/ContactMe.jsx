import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function ContactMe() {
  const [isHovered, setIsHovered] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "revimeidina72@gmail.com",
      href: "mailto:revimeidina72@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+62 818-1829-4515",
      href: "https://wa.me/6281818294515",
    },
  ];

  return (
    <section
      id="contact-page"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white overflow-hidden transition-colors duration-700"
    >
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
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

      {/* Decorative Geometric Shapes */}
      <Motion.div
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute top-20 left-20 w-32 h-32 border-4 border-black opacity-5 rotate-45"
      />
      <Motion.div
        animate={{
          rotate: [0, -180, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute bottom-32 right-16 w-40 h-40 border-4 border-black opacity-5"
      />
      <Motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-1/3 right-1/4 w-28 h-28 border-4 border-black opacity-5 rounded-full"
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl flex flex-col items-center gap-6 sm:gap-8">
        {/* Badge */}
        <Motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center mt-8 sm:mt-12 gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black animate-pulse" />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-black tracking-widest uppercase">
            Let's Connect
          </span>
        </Motion.div>

        {/* Title */}
        <Motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase"
        >
          Get In{" "}
          <Motion.span className="relative inline-block">
            Touch
            {/* Decorative underline */}
            <Motion.div
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-black"
            />
          </Motion.span>
        </Motion.h1>

        {/* Description */}
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed max-w-2xl font-bold px-4"
        >
          I'd love to hear from you! Whether you have a question, want to
          collaborate on a project, or just want to say hello, feel free to
          reach out through any of the channels below.
        </Motion.p>

        {/* Contact Methods Grid */}
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl mt-6 sm:mt-8 px-4"
        >
          {contactMethods.map((method, index) => (
            <Motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-5 sm:p-6 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden"
            >
              {/* Scan line effect */}
              <Motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent h-20 opacity-0 group-hover:opacity-100"
              />

              {/* Icon */}
              <Motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 border-2 border-black bg-white flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300"
              >
                {method.icon}
              </Motion.div>

              {/* Label */}
              <h3 className="text-base sm:text-lg font-black text-black mb-2 uppercase tracking-tight">
                {method.label}
              </h3>

              {/* Value */}
              <p className="text-xs sm:text-sm text-black/70 font-bold uppercase tracking-wide line-clamp-1">
                {method.value}
              </p>

              {/* Arrow icon */}
              <Motion.div
                initial={{ x: 0, opacity: 0 }}
                whileHover={{ x: 5, opacity: 1 }}
                className="absolute bottom-4 right-4 text-black"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Motion.div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Motion.a>
          ))}
        </Motion.div>

        {/* Primary CTA Button */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 sm:mt-8 px-4"
        >
          <Motion.a
            href="mailto:revimeidina72@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold text-base sm:text-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden uppercase tracking-wide"
          >
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden sm:inline">Send Me an Email</span>
              <span className="sm:hidden">Email Me</span>
              <Motion.svg
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </Motion.svg>
            </span>

            {/* Shine effect */}
            <Motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </Motion.a>
        </Motion.div>

        {/* Decorative text */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 mt-4 sm:mt-6 px-3 py-2 border-2 border-black bg-white"
        >
          <div className="w-1 h-1 bg-black" />
          <p className="text-xs sm:text-sm text-black font-bold uppercase tracking-wider">
            I typically respond within 24 hours
          </p>
        </Motion.div>
      </div>

      {/* Decorative floating shapes */}
      <Motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-dashed border-black opacity-10"
      />
      <Motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-32 sm:w-40 h-32 sm:h-40 border-2 border-dashed border-black opacity-10 rounded-full"
      />
    </section>
  );
}
