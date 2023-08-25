import React from "react";
import "../../Styles/Projects.css";
import shopShowcase from "../../assets/shop-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project3() {
  return (
    <div className="project odd">
      <div className="description">
        <h2>Lumière</h2>
        <p>
          A Boutique French clothing brand Lumière which stands for "Light". The
          app consists of the core functionalities of an E-Commerce store,
          including real time payment integration!
        </p>
        <span>
          <strong>Frontend:</strong> Javascript, ReactJS, HTML, CSS{" "}
        </span>
        <span>
          <strong>Other:</strong> Stripe API, Jest{" "}
        </span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/shopping-cart-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://lumiereshop.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare /> Demo
        </a>
      </div>
      <img className="showcase" src={shopShowcase} alt="shop showcase" />
    </div>
  );
}

export default Project3;
