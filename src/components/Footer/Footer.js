import React from "react";
import './Footer.css'

/** Footer component */

const Footer = () => (
  <footer>
    <div className="Footer-content">
      <div className="Footer-header">Excepteur sint occaecat</div>
      <div className="Footer-text">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum.
      </div>
    </div>
    <div className="Footer-md">
      <button className="btn btn-primary footer-btn">Lorem ipsum</button>
    </div>
    <div className="Footer-sm">
     <button className="btn btn-primary footer-btn">Learn more</button>
    </div>
  </footer>
);

export default Footer;
