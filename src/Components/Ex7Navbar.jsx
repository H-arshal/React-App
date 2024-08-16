import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../images/Space.jpg";

function Ex7Navbar() {
  const location = useLocation(); // Get the current location

  return (
    <div className="ex7">
      <div className="main-bar">
        <div className="logo-bar">
          <img src={img} alt="Logo" />
        </div>
        <div className="contents-bar">
          <div className={`content ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="link" to="/">Home</Link>
          </div>
          <div className={`content ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link className="link" to="/about">About</Link>
          </div>
          {/* <div className={`content ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div className={`content ${location.pathname === '/services' ? 'active' : ''}`}>
            <Link className="link" to="/services">Services</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Ex7Navbar;
