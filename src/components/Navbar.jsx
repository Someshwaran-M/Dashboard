import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import "../styles/dashboard/Navbar.css";

const Navbar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [showProfile, setShowProfile] = useState(false);

  const [user, setUser] = useState({
    name: "Maharram",
    email: "maharram@example.com",
    phone: "+91 9876543210",
    role: "Administrator",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
    setShowProfile(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="menu-btn">
            <FaBars />
          </button>

          <div className="welcome">
            <h2>Welcome Back, {user.name}</h2>
            <p>{today}</p>
          </div>
        </div>

        <div className="navbar-center">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search orders, drivers..."
            />
          </div>
        </div>

        <div className="navbar-right">
          <button className="icon-btn">
            <FaEnvelope />
            <span className="badge">2</span>
          </button>

          <button className="icon-btn">
            <FaBell />
            <span className="badge">5</span>
          </button>

          <div
            className="user-box"
            onClick={() => setShowProfile(true)}
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
            />

            <div className="user-info">
              <h4>{user.name}</h4>
              <span>{user.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Popup */}

      {showProfile && (
        <div
          className="profile-overlay"
          onClick={() => setShowProfile(false)}
        >
          <div
            className="profile-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowProfile(false)}
            >
              <FaTimes />
            </button>

            <img
              src="https://i.pravatar.cc/150?img=12"
              className="profile-img"
              alt="Profile"
            />

            <h2>Edit Profile</h2>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />

            <button
              className="save-profile-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;