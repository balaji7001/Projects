import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectDetails from "./components/ProjectDetails";

function MainSite() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>

      <div id="pricing">
        <Pricing />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="Connect US">
        <CTA />
      </div>
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">

        {/* IMPORTANT FIX: background should not block clicks */}
        <div className="hero-bg pointer-events-none"></div>

      <AnimatePresence mode="wait">
  {loading && (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999 }}
    >
      <Loader />
    </motion.div>
  )}
</AnimatePresence>

        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Routes>
              <Route path="/" element={<MainSite />} />
              <Route path="/projects" element={<ProjectShowcase />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </motion.div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
