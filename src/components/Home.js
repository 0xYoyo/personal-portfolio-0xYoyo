import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer-animation.json";
import wave from "../assets/wave-animation.json";

function Home({ aboutRef }) {
  const ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      ref?.current?.play();
    }, 1500);
  }, []);

  return (
    <div className="Home">
      <div className="intro">
        <div>
          <h3 className="hello">
            <p>Hi There!</p>{" "}
            <Lottie
              lottieRef={ref}
              autoplay={false}
              className="wave"
              animationData={wave}
            />
          </h3>
          <p>
            I'm <span>Yoav Zrihan</span>
          </p>
        </div>
        <p className="typewriter">A Fullstack Developer </p>
        <button
          className="more"
          onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Discover more!
        </button>
      </div>
      <Lottie className="developer" animationData={animationData} />
    </div>
  );
}

export default Home;
