import React from "react";
import "../../Styles/Projects.css";
import waldoShowcase from "../../assets/waldo-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project2() {
  return (
    <div className="project">
      <div className="description">
        <h2>Where's Waldo?</h2>
        <p>
          Using a combination Javascript to pinpoint the findable characters
          dynamically depending on the user's view port. Real time validation of
          the user's click location using fetched data that is stored on
          Firebase's backend servers. And finally, a Pop Up form that will take
          a user's name and score to store them on Firebase in order to sort and
          display the top 10.
        </p>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/where-is-waldo-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
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

export default Project2;
