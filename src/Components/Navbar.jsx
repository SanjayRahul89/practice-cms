import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/courses">COURSES</Link>
        </li>
        <li>
          <Link to="/newbatches">NEW BATCHES</Link>
        </li>
        <li>
          <Link to="/contactus">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
