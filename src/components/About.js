import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="About">
      <h4>Who is this guy?</h4>
      <h5>Lets make it simple.</h5>
      <blockquote>
        <q>There are 2 sides to every coin</q>
        <p>- Someone a long time ago</p>
      </blockquote>

      <div className="btn-pick">
        <button className="personal">Personal</button>
        <button className="professional">Professional</button>
      </div>
    </div>
  );
}

export default About;
