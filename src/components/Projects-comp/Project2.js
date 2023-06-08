import React from "react";
import "../../Styles/Projects.css";
import shopShowcase from "../../assets/shop-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project2() {
  return (
    <div className="project even">
      <div className="description">
        <h2>Lumière</h2>
        <p>
          A Boutique French clothing brand Lumière which stands for "Light",
          shines its way through with an elegant feel and very limited number of
          handmade exclusive designs that changes seasonally.
        </p>
        <span>ReactJS & Router, Vanilla CSS, Stripe API</span>
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
          href="https://0xyoyo.github.io/shopping-cart-0xYoyo/"
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

export default Project2;
