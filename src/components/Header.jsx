import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const menuItems = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Projects", path: "/projects" },
      { label: "Contact", path: "/contact" },
    ],
    []
  );

  // Update active menu based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = menuItems.find((item) => item.path === currentPath);
    if (currentItem) {
      setActiveMenu(currentItem.label);
    } else {
      setActiveMenu("Home");
    }
  }, [location.pathname, menuItems]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowHeader(!(y > lastScrollY && y > 80));
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleMenuClick = (item) => {
    setActiveMenu(item.label);
    setMenuOpen(false);
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatTime = (date) => {
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    return `${h}:${m} WIB`;
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -25, transition: { duration: 0.4 } },
  };

  return (
    <Motion.header
      variants={fadeDown}
      initial="hidden"
      animate={showHeader ? "visible" : "exit"}
      className="fixed top-4 left-0 w-full z-50 flex justify-center"
    >
      <Motion.div
        layout
        className={`relative flex items-center justify-between w-[95%] max-w-6xl px-6 py-3
          bg-white border-4 border-black backdrop-blur-2xl transition-all duration-500
          shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          ${
            scrolled
              ? "scale-[0.985] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              : ""
          }
        `}
      >
        {/* === Logo === */}
        <Motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => handleMenuClick(menuItems[0])}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <span className="text-xl font-black tracking-wider uppercase">
            <span className="text-black">MR</span>
            <span className="text-black">.</span>
          </span>
        </Motion.div>

        {/* === Navigation (Desktop) === */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
          {menuItems.map((item) => (
            <Motion.a
              key={item.label}
              onClick={() => handleMenuClick(item)}
              className="text-sm relative cursor-pointer transition-colors duration-300 font-bold uppercase tracking-widest text-black hover:text-gray-600"
            >
              {item.label}
              {activeMenu === item.label && (
                <Motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[3px] bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              )}
            </Motion.a>
          ))}
        </nav>

        {/* === Right Controls === */}
        <div className="flex items-center gap-3">
          <Motion.span
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:inline-block text-[13px] tracking-[0.25em] font-bold text-black border-2 border-black px-3 py-1"
          >
            {formatTime(time)}
          </Motion.span>

          {/* Burger */}
          <Motion.button
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Motion.div
              initial={false}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-black"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Motion.div>
          </Motion.button>
        </div>
      </Motion.div>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="absolute top-16 w-[85%] max-w-md mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 flex flex-col text-center border-4 border-black bg-white"
          >
            {menuItems.map((item, i, arr) => (
              <Motion.a
                key={item.label}
                onClick={() => handleMenuClick(item)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-base tracking-widest py-3 cursor-pointer font-bold uppercase transition-all duration-300
                  ${i !== arr.length - 1 ? "border-b-2 border-black" : ""} 
                  ${
                    activeMenu === item.label
                      ? "bg-black text-white"
                      : "text-black hover:bg-gray-100"
                  }`}
              >
                {item.label}
              </Motion.a>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
}
