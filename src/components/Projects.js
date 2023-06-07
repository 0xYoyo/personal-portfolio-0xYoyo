import React from "react";
import Project1 from "./Projects-comp/Project1";
import "../Styles/Projects.css";
import Project2 from "./Projects-comp/Project2";
import Project3 from "./Projects-comp/Project3";

function Projects() {
  return (
    <div className="Projects">
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
}

export default Projects;
