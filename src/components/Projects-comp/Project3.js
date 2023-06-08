import React from "react";
import "../../Styles/Projects.css";
import battleshipShowcase from "../../assets/battleship-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project3() {
  return (
    <div className="project odd">
      <div className="description">
        <h2>Battleship</h2>
        <p>
          The strategy guessing game we all know and love brought to life. You
          no longer need 2 people to play it, try you skills against the
          computer. Successfully Sink all enemy ships to win the game!
        </p>
        <span>Javascript, HTML, CSS, Webpack, Jest </span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/battleship-game-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://0xyoyo.github.io/battleship-game-0xYoyo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare />
          Demo
        </a>
      </div>
      <img
        className="showcase"
        src={battleshipShowcase}
        alt="Battleship showcase"
      />
    </div>
  );
}

export default Project3;
