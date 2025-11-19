import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutMe from "./pages/AboutMe";
import Projects from "./components/Projects";
import MyProjects from "./pages/MyProjects";
import Contact from "./components/Contact";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
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
