import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer-animation.json";
//import wave from "../assets/wave-animation.json";

function Home() {
  return (
    <div className="Home">
      <div className="intro">
        <p>
          Hi There! 👋 <br /> I'm <span>Yoav</span>
          <br /> A Fullstack Developer
        </p>
      </div>
      <Lottie className="developer" animationData={animationData} />
    </div>
  );
}

export default Home;
