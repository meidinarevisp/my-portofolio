import React, { useState, useEffect, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation(); // <- gunakan untuk dapatkan path saat ini

  const menuItems = useMemo(() => ["Home", "About", "Projects", "Contact"], []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveMenu("Home");
        break;
      case "/about":
        setActiveMenu("About");
        break;
      case "/projects":
        setActiveMenu("Projects");
        break;
      case "/contact":
        setActiveMenu("Contact");
        break;
      default:
        setActiveMenu("Home");
        break;
    }
  }, [location.pathname]);

  // ===== Handle Scroll Show/Hide Header =====
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  // ===== Update Clock =====
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} WIB`;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setMenuOpen(false);
  };

  // ===== Handle Menu Click =====
  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setMenuOpen(false);

    let path = "/"; // default fallback

    switch (item) {
      case "Home":
        path = "/";
        break;
      case "About":
        path = "/about";
        break;
      case "Projects":
        path = "/projects";
        break;
      case "Contact":
        path = "/contact";
        break;
      default:
        path = "/";
        break;
    }

    navigate(path);

    // Scroll langsung ke atas halaman
    window.scrollTo(0, 0);
  };

  return (
    <Motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center"
    >
      <Motion.div
        layout
        className={`relative flex items-center justify-between w-[95%] max-w-6xl px-6 py-3 rounded-full 
          border transition-all duration-500 backdrop-blur-2xl
          ${
            darkMode
              ? "bg-gradient-to-r from-[#1b0f0f]/90 to-[#2b1b1b]/90 border-rose-900/40 text-pink-100 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-r from-white/90 to-rose-50/80 border-rose-200/50 text-rose-900 shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
          }
          ${scrolled ? "scale-[0.985] shadow-lg" : ""}`}
      >
        {/* Logo */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer select-none z-10"
          onClick={() => handleMenuClick("Home")}
        >
          <span
            className={`text-xl font-bold tracking-wide ${
              darkMode ? "text-rose-200" : "text-rose-700"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            MR.
          </span>
        </Motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 z-0">
          {menuItems.map((item) => (
            <Motion.a
              key={item}
              onClick={() => handleMenuClick(item)}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`text-sm relative cursor-pointer ${
                darkMode
                  ? "text-pink-200 hover:text-rose-400"
                  : "text-rose-700 hover:text-rose-500"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item}
              {activeMenu === item && (
                <Motion.span
                  layoutId="underline"
                  className={`absolute -bottom-1 left-0 w-full h-[2px] rounded ${
                    darkMode ? "bg-pink-400" : "bg-rose-700"
                  }`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 z-10">
          <Motion.span
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`hidden md:inline-block text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-rose-300" : "text-rose-700"
            }`}
          >
            {formatTime(time)}
          </Motion.span>

          {/* Dark Mode Toggle */}
          <Motion.button
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.9 }}
            className={`relative w-16 h-8 rounded-full flex items-center transition-all duration-500 ${
              darkMode ? "bg-[#5A1E2D]" : "bg-rose-200"
            }`}
          >
            <Motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center bg-white ${
                darkMode ? "right-1" : "left-1"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <Motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <BsMoon className="text-[#ac496e]" size={16} />
                  </Motion.div>
                ) : (
                  <Motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <BsSun className="text-amber-500" size={16} />
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          </Motion.button>

          {/* Burger */}
          <Motion.button
            className="md:hidden focus:outline-none"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Motion.div
              initial={false}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={darkMode ? "text-rose-300" : "text-rose-700"}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </Motion.div>
          </Motion.button>
        </div>
      </Motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={`absolute top-16 w-[85%] max-w-md mx-auto rounded-2xl shadow-lg p-5 flex flex-col text-center border
        ${
          darkMode
            ? "bg-[#2B1B1B]/95 text-pink-100 border-rose-900/40"
            : "bg-white/95 text-rose-900 border-rose-200/70"
        }`}
          >
            {menuItems.map((item, index, arr) => (
              <Motion.a
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`text-base tracking-wide py-3 relative cursor-pointer
            ${
              index !== arr.length - 1
                ? darkMode
                  ? "border-b border-rose-700/40"
                  : "border-b border-rose-300/50"
                : ""
            } 
            ${
              activeMenu === item
                ? darkMode
                  ? "font-bold text-pink-400"
                  : "font-bold text-rose-700"
                : "font-medium"
            }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item}
              </Motion.a>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
}
