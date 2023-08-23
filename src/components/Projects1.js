import React from "react";
import "../Styles/Projects.css";
import Project1 from "./Projects-comp/Project1";
import Project2 from "./Projects-comp/Project2";

function Projects1({ refProp }) {
  return (
    <div className="Projects" ref={refProp}>
      <Project1 />
      <Project2 />
    </div>
  );
}

export default Projects1;
