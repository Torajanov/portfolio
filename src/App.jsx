import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  // Bu yerda default import bo'lishi kerak
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />  {/* Hero komponenti shu yerda chaqiriladi */}
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#27ae60",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "15px",
          marginRight: "-30px"
        }}
      />
    </div>
  );
};

export default App;  // Bu yerda App komponentini eksport qilinadi
