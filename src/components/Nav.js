import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Nav.css";

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("burger-nav");
  };

  return (
    <header>
      <h3 id="name-logo">Yoav Zrihan</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Skills</a>
        <a href="/#">Projects</a>
        <a href="/#">Contact</a>
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
