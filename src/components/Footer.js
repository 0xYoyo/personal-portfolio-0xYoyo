import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
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
  );
}

export default Footer;
