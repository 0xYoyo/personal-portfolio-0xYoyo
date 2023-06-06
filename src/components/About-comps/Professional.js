import React from "react";
import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import mongo from "../../assets/mongo.svg";
import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import firebase from "../../assets/firebase.svg";

function Professional() {
  return (
    <div className="Professional">
      <div className="frontend">
        <img src={html} alt="html-icon" className="left" />
        <img src={css} alt="css-icon" className="left" />
        <img src={react} alt="react-icon" className="left" />
        <img src={javascript} alt="javascript-icon" className="left" />
      </div>
      <p className="card">
        <span className="W">Who?</span> Yoav, 22. Passionate, hardworking,
        curious, driven, problem solver.
        <br /> A self taught developer.
        <br />
        <span className="W">What?</span> Anything from simple to complex web
        apps. <br />
        I transform ideas into reality. <br />
        From a blank page, to a fully functional, dynamic, responsive app.
        <br /> <span className="W">Which?</span> Frontend: HTML, CSS, JS,
        ReactJS. <br />
        Backend: MongoDB, NodeJS, Express, Firebase.
        <br />
      </p>
      <div className="backend">
        <img src={mongo} alt="mongo-icon" className="right" />
        <img src={nodejs} alt="nodejs-icon" className="right" />
        <img src={express} alt="express-icon" className="right" />
        <img src={firebase} alt="firebase-icon" className="right" />
      </div>
    </div>
  );
}

export default Professional;
