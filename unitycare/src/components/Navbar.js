import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        
        {/* Logo */}
        <h2 className="logo">UnityCare</h2>

        {/* Desktop Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/healthcare" onClick={() => setMenuOpen(false)}>Healthcare</Link>
          <Link to="/mental-health" onClick={() => setMenuOpen(false)}>Mental Health</Link>
          <Link to="/information" onClick={() => setMenuOpen(false)}>Information</Link>
          <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
