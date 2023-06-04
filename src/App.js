import "./Styles/App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <section>
          <Home />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
