// ProjectCard.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <Motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 250, damping: 18 },
      }}
      className="bg-pink-50 dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md border border-pink-100 dark:border-[#2a2a2a] transition-all h-full flex flex-col"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <Motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-50 object-cover transition-transform duration-700"
          whileHover={{ scale: 1.12, rotate: 1 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-pink-800 bg-pink-100 dark:bg-[#292929] dark:text-pink-200 px-3 py-[4px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-pink-950 dark:text-pink-50 mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-pink-800 dark:text-pink-200 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Button */}
        <div className="mt-auto flex justify-end">
          <Motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-900 dark:text-pink-200 group"
          >
            <span className="relative inline-flex items-center gap-2">
              <span>See Details</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
              <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-pink-900 dark:bg-pink-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Motion.a>
        </div>
      </div>
    </Motion.div>
  );
}
