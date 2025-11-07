import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutMe from "./pages/AboutMe";
import Projects from "./components/Projects";
import MyProjects from "./pages/MyProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // Tambahkan basename sesuai nama repo GitHub Pages
    <Router basename="/my-portofolio">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
