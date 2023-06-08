import React from "react";
import Lottie from "lottie-react";
import run from "../../assets/run-animation.json";
import swim from "../../assets/swim-animation.json";
import pushUp from "../../assets/pushUp-animation.json";
import read from "../../assets/read-animation.json";
import game from "../../assets/game-animation.json";
import dog from "../../assets/dog-animation.json";

function Personal() {
  return (
    <div className="Personal">
      <div className="sports">
        <Lottie className="left" animationData={run} />
        <Lottie className="left swim" animationData={swim} />
        <Lottie className="left" animationData={pushUp} />
      </div>
      <p className="card">
        <span className="W">Who?</span> Yoav, 22. Passionate, Creative, friendly
        and <br /> funny (at least that's what my mom says).
        <br />
        <span className="W">Where?</span> Tel Aviv, Israel <br />
        <span className="W">What?</span> I love outdoor sports, I do some form
        of it every single day. <br /> But as a dev, of course I'm also a bit of
        a nerd so yes, I dabble in reading and gaming. <br />
        Finally and most importantly- dogs. Love 'em.
      </p>
      <div className="non-sports">
        <Lottie className="right" animationData={read} />
        <Lottie className="right" animationData={game} />
        <Lottie className="right" animationData={dog} />
      </div>
    </div>
  );
}

export default Personal;
