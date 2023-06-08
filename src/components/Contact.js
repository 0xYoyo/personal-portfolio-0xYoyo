import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxictq6",
        "template_8dti8o6",
        form.current,
        "EpAEcRZbiH7_rvUzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <form ref={form} onSubmit={sendEmail}>
        <h3>Let's get in touch!</h3>
        <ul>
          <li>
            <label>Name</label>
            <input type="text" name="user_name" required />
          </li>
          <li>
            <label>Email</label>
            <input type="email" name="user_email" required />
          </li>
          <li>
            <label>Message</label>
            <div id="area" className="area">
              <textarea name="message" required />
            </div>
          </li>
        </ul>
        <input className="submitter" type="submit" value="Send" />
      </form>
      <footer id="footer">
        <span>
          <a
            href="mailto: yoyoworkpc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            yoyoworkpc@gmail.com
          </a>{" "}
        </span>{" "}
        <span>|</span>
        <a
          href="https://github.com/0xYoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yoavzrihan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </footer>
    </div>
  );
}

export default Contact;
