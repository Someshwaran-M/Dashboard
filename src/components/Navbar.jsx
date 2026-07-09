import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

import "../styles/dashboard/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="navbar">

      {/* Left Section */}
      <div className="navbar-left">

        <button
          className="menu-btn"
          type="button"
          aria-label="Open Menu"
        >
          <FaBars />
        </button>

        <div className="welcome">
          <h2>Welcome Back, Maharram</h2>
          <p>{today}</p>
        </div>

      </div>

      {/* Center Section */}
      <div className="navbar-center">

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search orders, drivers..."
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="navbar-right">

        <button
          className="icon-btn"
          type="button"
          aria-label="Messages"
        >
          <FaEnvelope />
          <span className="badge">2</span>
        </button>

        <button
          className="icon-btn"
          type="button"
          aria-label="Notifications"
        >
          <FaBell />
          <span className="badge">5</span>
        </button>

        <div
          className="user-box"
          onClick={() => navigate("/profile")}
          role="button"
          tabIndex={0}
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Maharram"
          />

          <div className="user-info">
            <h4>Maharram</h4>
            <span>Administrator</span>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;