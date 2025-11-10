import React from "react";
import { motion as Motion } from "framer-motion";
import profile from "../assets/images/profile.png";

export default function AboutHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeOut", delay: 0.2 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] transition-colors duration-300">
      {/* Enhanced gradient orbs - lebih subtle dan modern */}
      <Motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20 dark:from-pink-600/10 dark:to-rose-700/10 rounded-full blur-3xl"
      />
      <Motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 -right-20 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-700/10 rounded-full blur-3xl"
      />

      <Motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-rose-400/15 to-pink-500/15 dark:from-rose-600/8 dark:to-pink-700/8 rounded-full blur-2xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Badge dengan glassmorphism */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <Motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border border-pink-200/50 dark:border-pink-800/50 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/10 backdrop-blur-md"
          >
            <Motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400"
            />
            <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent tracking-wider">
              GET TO KNOW ME
            </span>
          </Motion.div>
        </Motion.div>

        {/* Modern Title dengan gradient animation */}
        <Motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          More About{" "}
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
            Me
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
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 dark:from-pink-400 dark:via-rose-400 dark:to-purple-400 rounded-full"
            />
          </Motion.span>
        </Motion.h2>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center gap-16 mt-16 md:mt-20">
          {/* Modern Profile Image Container */}
          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative flex-shrink-0 group"
          >
            {/* Animated gradient ring */}
            <Motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-xl transition-opacity duration-500"
            />

            {/* Outer decorative ring */}
            <Motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-4 rounded-full border border-dashed border-pink-300/30 dark:border-pink-700/30"
            />

            {/* Main image container */}
            <Motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-[6px] border-white dark:border-gray-900 shadow-2xl shadow-pink-500/10 dark:shadow-pink-900/20 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-500/5 dark:to-pink-900/10 z-10" />

              {/* Shimmer effect */}
              <Motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 skew-x-12"
              />

              {/* Profile Image */}
              <img
                src={profile}
                alt="Meidina Revi Sandra Pertiwi"
                className="w-full h-full object-cover mt-10 scale-125 group-hover:scale-[1.28] transition-transform duration-700"
                style={{ objectPosition: "center 55%" }}
              />
            </Motion.div>

            {/* Floating particles */}
            <Motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-rose-500/30 dark:from-pink-600/20 dark:to-rose-700/20 rounded-full blur-2xl"
            />
            <Motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-purple-400/30 to-pink-500/30 dark:from-purple-600/20 dark:to-pink-700/20 rounded-full blur-2xl"
            />

            {/* Modern corner accents */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-pink-300/40 dark:border-pink-700/40 rounded-tl-3xl" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-rose-300/40 dark:border-rose-700/40 rounded-br-3xl" />
          </Motion.div>

          {/* Modern Text Content */}
          <Motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left space-y-6"
          >
            {/* Name with modern styling */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Motion.h3
                whileHover={{ x: 5 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-3"
              >
                Meidina Revi Sandra Pertiwi
              </Motion.h3>

              {/* Role badge with glassmorphism */}
              <Motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 border border-pink-200/60 dark:border-pink-800/60 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/10 backdrop-blur-sm"
              >
                <Motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400"
                />
                <span className="text-sm font-bold bg-gradient-to-r from-pink-700 to-rose-700 dark:from-pink-300 dark:to-rose-300 bg-clip-text text-transparent">
                  Front-End Web Developer
                </span>
              </Motion.div>
            </Motion.div>

            {/* Description with modern card design */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-5"
            >
              <Motion.div
                whileHover={{ x: 5 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-pink-100/50 dark:border-pink-900/30 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/5"
              >
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm an enthusiastic Web and Mobile Developer who enjoys
                  transforming ideas into functional, user-friendly
                  applications. Skilled in{" "}
                  <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                    HTML, CSS, JavaScript, PHP, MySQL, and Flutter
                  </span>
                  , I've developed projects ranging from interactive websites to
                  mobile apps with speech-to-text features.
                </p>
              </Motion.div>

              <Motion.div
                whileHover={{ x: 5 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-pink-100/50 dark:border-pink-900/30 shadow-lg shadow-pink-500/5 dark:shadow-pink-900/5"
              >
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I value{" "}
                  <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                    collaboration, adaptability, and attention to detail
                  </span>{" "}
                  in every project. Whether developing responsive interfaces or
                  experimenting with new technologies, I'm driven by a desire to
                  create solutions that are both efficient and meaningful.
                </p>
              </Motion.div>
            </Motion.div>

            {/* Modern skill pills */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {[
                { name: "Web Development", icon: "🌐" },
                { name: "Mobile Apps", icon: "📱" },
                { name: "UI/UX", icon: "🎨" },
                { name: "Problem Solver", icon: "💡" },
              ].map((skill, index) => (
                <Motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-white to-pink-50/50 dark:from-gray-800 dark:to-pink-900/20 border border-pink-200/60 dark:border-pink-800/60 shadow-md shadow-pink-500/5 dark:shadow-pink-900/5 backdrop-blur-sm cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-rose-500/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <span className="relative flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-200">
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
