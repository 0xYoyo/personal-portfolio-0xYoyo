import React from "react";
import "../../Styles/Projects.css";
import waldoShowcase from "../../assets/waldo-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project1({ refProp }) {
  return (
    <div className="project odd" ref={refProp}>
      <div className="description">
        <h2>Where's Waldo?</h2>
        <p>
          Derived from the children's puzzle book and made into an online game.
          Find the hiding characters on each level as fast as you can to put
          your name up on the leaderboard!
        </p>
        <span>ReactJS & Router, Vanilla CSS, Firebase</span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/where-is-waldo-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Github
        </a>
        <a
          href="https://where-is-waldo-92b65.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare /> Demo
        </a>
      </div>
      <img className="showcase" src={waldoShowcase} alt="waldo showcase" />
    </div>
  );
}

export default Project1;
