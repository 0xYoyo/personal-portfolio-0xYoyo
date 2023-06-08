import React from "react";
import "../../Styles/Projects.css";
import weatherShowcase from "../../assets/weather-showcase.png";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Project4() {
  return (
    <div className="project even">
      <div className="description">
        <h2>Weather App</h2>
        <p>
          Need to know the weather and for some reason the only thing you have
          accessible is this website? Well then fear no more! You can look up
          any city in the world to get its current weather stats.
        </p>
        <span>Javascript, HTML, CSS, OpenWeather API</span>
      </div>
      <div className="links">
        <a
          href="https://github.com/0xYoyo/weather-app-0xyoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://0xyoyo.github.io/weather-app-0xyoyo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareSquare />
          Demo
        </a>
      </div>
      <img className="showcase" src={weatherShowcase} alt="weather showcase" />
    </div>
  );
}

export default Project4;
