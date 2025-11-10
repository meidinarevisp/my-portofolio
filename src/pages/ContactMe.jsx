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
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "revimeidina72@gmail.com",
      href: "mailto:revimeidina72@gmail.com",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "View my code",
      href: "#",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section
      id="contact-page"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 py-20 bg-gradient-to-b from-pink-50/50 via-white to-rose-50/30 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] overflow-hidden transition-colors duration-700"
    >
      {/* Animated Background Elements */}
      <Motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl"
      />
      <Motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl"
      />
      <Motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/15 to-pink-500/15 dark:from-rose-600/8 dark:to-pink-700/8 rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <Motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-pink-400 dark:bg-pink-600 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl flex flex-col items-center gap-8">
        {/* Badge */}
        <Motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center mt-12 gap-2.5 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border border-pink-200/50 dark:border-pink-800/50 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/10 backdrop-blur-md"
        >
          <Motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400"
          />
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </Motion.div>

        {/* Title */}
        <Motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          Get In{" "}
          <Motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
            className="relative inline-block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Touch
            {/* Decorative underline */}
            <Motion.div
              animate={{
                scaleX: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 rounded-full"
            />
          </Motion.span>
        </Motion.h1>

        {/* Description */}
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
        >
          {contactMethods.map((method, index) => (
            <Motion.a
              key={index}
              href={method.href}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-900/30 shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 dark:hover:shadow-pink-900/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <Motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg`}
              >
                {method.icon}
              </Motion.div>

              {/* Label */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {method.label}
              </h3>

              {/* Value */}
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                {method.value}
              </p>

              {/* Arrow icon */}
              <Motion.div
                initial={{ x: 0, opacity: 0 }}
                whileHover={{ x: 5, opacity: 1 }}
                className="absolute bottom-4 right-4 text-pink-600 dark:text-pink-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Motion.div>
            </Motion.a>
          ))}
        </Motion.div>

        {/* Primary CTA Button */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Motion.a
            href="mailto:revimeidina72@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 text-white font-bold text-lg shadow-xl shadow-pink-500/30 dark:shadow-pink-900/30 hover:shadow-2xl hover:shadow-pink-500/50 dark:hover:shadow-pink-900/50 transition-all duration-300 overflow-hidden"
          >
            {/* Animated background */}
            <Motion.div
              animate={{
                x: isHovered ? 0 : -100,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600"
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Me an Email
              <Motion.svg
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-gray-500 dark:text-gray-500 mt-6"
        >
          I typically respond within 24 hours ⚡
        </Motion.p>
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
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-dashed border-pink-300/30 dark:border-pink-700/30 rounded-full"
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
        className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-dashed border-rose-300/30 dark:border-rose-700/30 rounded-full"
      />
    </section>
  );
}
