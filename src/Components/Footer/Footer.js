import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer__container">
      <p>
        <span>© 2019 Asia Wealth Platform Pte Ltd</span>
      </p>
      <p>
        <span>Licensed by the Monetary Authority of Singapore</span>
      </p>
      <p>
        <a href="https://www.stashaway.sg/legal/privacy-policy" target="blank">
          Privacy
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://www.stashaway.sg/legal/platform-agreement"
          target="blank"
        >
          Platform Agreement
        </a>
        &nbsp;|&nbsp;
        <span>Support</span>
      </p>
    </div>
  );
};
