import React from "react";
import "../../Styles/Projects.css";
import yoyonetShowcase from "../../assets/yoyonet-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project1() {
  return (
    <div className="project odd">
      <div className="description">
        <h2>Yoyo Network</h2>
        <p>
          A full stack, fully responsive, social networking app that provides
          users end to end experience of a complete social media platform.
          <br /> For more information please visit the docs on the github link.
        </p>
        <span>
          <strong>Backend:</strong> Express, NodeJS, MongoDB, Cloudinary{" "}
        </span>
        <span>
          <strong>Frontend:</strong> Javascript, ReactJS, HTML, CSS{" "}
        </span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/yoyo-network-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://yoyo-network.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare />
          Demo
        </a>
      </div>
      <img className="showcase" src={yoyonetShowcase} alt="Yoyonet showcase" />
    </div>
  );
}

export default Project1;
