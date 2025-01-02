import React from "react";
import "../styles/FooterBottom.css"; // Import the CSS file
import logeir from "../logos/Logo wrap.png";

const FooterBottom = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img
          src={logeir}// Replace with your logo URL
          alt="Logo"
          className="footer-logo"
        />
        
      </div>
      <div className="footer-right">
        © 2077 Untitled UI. All rights reserved.
      </div>
    </div>
  );
};

export default FooterBottom;
