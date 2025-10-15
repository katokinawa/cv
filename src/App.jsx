import React from "react";
import { ContentProvider } from "./contexts/ContentContext";
import TypographyProvider from "./components/TypographyProvider/TypographyProvider";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import "./App.css";

const App = () => {
  return (
    <TypographyProvider>
      <ContentProvider>
        <div className="app">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <ScrollToTopButton />
        </div>
      </ContentProvider>
    </TypographyProvider>
  );
};

export default App;
