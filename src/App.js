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
import Footer from "./components/Footer";

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
        <section>
          <Home aboutRef={aboutRef} refProp={homeRef} />
        </section>

        <section>
          <About refProp={aboutRef} />
        </section>

        <section className="desktop-projects">
          <Projects1 refProp={projectsRef} />
        </section>

        <section className="desktop-projects">
          <Projects2 />
        </section>

        <section className="mobile-projects">
          <Project1 refProp={project1Ref} />
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

        <section>
          <Contact refProp={contactRef} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
