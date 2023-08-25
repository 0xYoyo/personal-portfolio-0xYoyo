import React from "react";
import "../../Styles/Projects.css";
import inventoryShowcase from "../../assets/inventory-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project4() {
  return (
    <div className="project even">
      <div className="description">
        <h2>Inventory Manager</h2>
        <p>
          A dashboard for business owners to help manage their inventory online.
          Very simple design, yet contains all the CRUD methods the admin may
          need.
        </p>
        <span>
          <strong>Backend:</strong> Express, NodeJS, MongoDB{" "}
        </span>
        <span>
          <strong>Frontend:</strong> Javascript, Pug (Jade), CSS, Bootstrap{" "}
        </span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/inventory-application-0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://inventory-manager-0xyoyo.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare />
          Demo
        </a>
      </div>
      <img
        className="showcase"
        src={inventoryShowcase}
        alt="weather showcase"
      />
    </div>
  );
}

export default Project4;
