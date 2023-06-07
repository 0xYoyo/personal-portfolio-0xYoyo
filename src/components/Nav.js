import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import "../Styles/Nav.css";

function Nav({ homeRef, aboutRef, projectsRef, contactRef, project1Ref }) {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("burger-nav");
  };

  const closeNav = () => {
    if (navRef.current.classList.contains("burger-nav"))
      navRef.current.classList.toggle("burger-nav");
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <h3 id="name-logo">Yoav Zrihan</h3>
      <nav ref={navRef}>
        <button
          className="scroller"
          onClick={() => {
            closeNav();
            scrollTo(homeRef);
          }}
        >
          <span>
            <AiOutlineHome />
          </span>{" "}
          Home
        </button>
        <button
          className="scroller"
          onClick={() => {
            closeNav();
            scrollTo(aboutRef);
          }}
        >
          <span>
            <AiOutlineUser />
          </span>{" "}
          About
        </button>
        <button
          className="scroller all-proj"
          onClick={() => {
            closeNav();
            scrollTo(projectsRef);
          }}
        >
          <span>
            <AiOutlineFundProjectionScreen />
          </span>{" "}
          Projects
        </button>

        <button
          className="scroller single-proj"
          onClick={() => {
            closeNav();
            scrollTo(project1Ref);
          }}
        >
          <span>
            <AiOutlineFundProjectionScreen />
          </span>{" "}
          Projects
        </button>

        <button
          className="scroller"
          onClick={() => {
            closeNav();
            scrollTo(contactRef);
          }}
        >
          <span>
            <AiOutlineMail />
          </span>{" "}
          Contact
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
