import React, { useState } from "react";
import "../Styles/About.css";
import Personal from "./About-comps/Personal";
import Professional from "./About-comps/Professional";

function About() {
  const [chosen, setChosen] = useState("?");

  const handlePersonal = () => {
    setChosen("Personal");
  };

  const handleProfessional = () => {
    setChosen("Professional");
  };

  return (
    <div className="About">
      <blockquote>
        <q>There are 2 sides to every coin</q>
        <p>- Someone a long time ago</p>
      </blockquote>

      <div className="btn-pick">
        <button onClick={handlePersonal}>Personal</button>
        <button onClick={handleProfessional}>Professional</button>
      </div>
      <div className="filler">
        {(() => {
          if (chosen === "?") {
            return <div> ? </div>;
          } else if (chosen === "Personal") {
            return <Personal />;
          } else if (chosen === "Professional") {
            return <Professional />;
          }
        })()}
      </div>
    </div>
  );
}

export default About;
