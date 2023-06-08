import { useRef } from "react";
import "./Styles/App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects1 from "./components/Projects1";
import About from "./components/About";
import Project1 from "./components/Projects-comp/Project1";
import Project2 from "./components/Projects-comp/Project2";
import Project3 from "./components/Projects-comp/Project3";
import Projects2 from "./components/Projects2";
import Project4 from "./components/Projects-comp/Project4";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const project1Ref = useRef(null);

  return (
    <>
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        project1Ref={project1Ref}
      />
      <div className="App">
        <section ref={homeRef}>
          <Home aboutRef={aboutRef} />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section className="desktop-projects" ref={projectsRef}>
          <Projects1 />
        </section>

        <section className="desktop-projects">
          <Projects2 />
        </section>

        <section className="mobile-projects" ref={project1Ref}>
          <Project1 />
        </section>
        <section className="mobile-projects">
          <Project2 />
        </section>
        <section className="mobile-projects">
          <Project3 />
        </section>
        <section className="mobile-projects">
          <Project4 />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
