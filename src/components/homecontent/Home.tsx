import React from "react";
import HomeHero from "./HomeHero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function MainContent() {
  return (
    <>
      <HomeHero />
      <About />
      <Experience />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
