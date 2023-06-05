import { useRef } from "react";
import "./Styles/App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="App">
        <section ref={homeRef}>
          <Home aboutRef={aboutRef} />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
