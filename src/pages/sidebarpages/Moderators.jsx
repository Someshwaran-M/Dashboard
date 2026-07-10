import React, { useState } from "react";
import {
  FaSearch,
  FaUserShield,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
} from "react-icons/fa";
import "../../styles/dashboard/Moderators.css";

const initialModerators = [
  {
    id: "#MOD-1001",
    name: "John Smith",
    role: "Senior Moderator",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: "#MOD-1002",
    name: "Emma Wilson",
    role: "Content Moderator",
    email: "emma@example.com",
    status: "Pending",
  },
  {
    id: "#MOD-1003",
    name: "David Miller",
    role: "Community Moderator",
    email: "david@example.com",
    status: "Inactive",
  },
  {
    id: "#MOD-1004",
    name: "Sophia Lee",
    role: "Support Moderator",
    email: "sophia@example.com",
    status: "Active",
  },
];

const Moderators = () => {
  const [moderators, setModerators] = useState(initialModerators);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const handleNewModerator = () => {
    const newModerator = {
      id: `#MOD-${1000 + moderators.length + 1}`,
      name: "New Moderator",
      role: "Support Moderator",
      email: "new@example.com",
      status: "Pending",
    };

    setModerators([...moderators, newModerator]);
  };

  const filteredModerators = moderators.filter((mod) => {
    const matchSearch =
      mod.id.toLowerCase().includes(search.toLowerCase()) ||
      mod.name.toLowerCase().includes(search.toLowerCase()) ||
      mod.role.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All Status" || mod.status === status;

    return matchSearch && matchStatus;
  });

  const total = moderators.length;
  const active = moderators.filter((m) => m.status === "Active").length;
  const pending = moderators.filter((m) => m.status === "Pending").length;
  const inactive = moderators.filter((m) => m.status === "Inactive").length;

  return (
    <div className="moderator-page">

      <div className="moderator-header">
        <div>
          <h1>Moderator Management</h1>
          <p>Manage all moderators.</p>
        </div>

        <button
          className="new-moderator-btn"
          onClick={handleNewModerator}
        >
          + New Moderator
        </button>
      </div>

      <div className="moderator-cards">

        <div className="moderator-card">
          <FaUserShield />
          <h3>{total}</h3>
          <p>Total Moderators</p>
        </div>

        <div className="moderator-card">
          <FaUserCheck />
          <h3>{active}</h3>
          <p>Active</p>
        </div>

        <div className="moderator-card">
          <FaUserClock />
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>

        <div className="moderator-card">
          <FaUserTimes />
          <h3>{inactive}</h3>
          <p>Inactive</p>
        </div>

      </div>

      <div className="moderator-toolbar">

        <div className="search-box-moderator">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Moderators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Inactive</option>
        </select>

      </div>

      <div className="moderator-table">
        <table>

          <thead>
            <tr>
              <th>Moderator ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredModerators.length > 0 ? (
              filteredModerators.map((mod) => (
                <tr key={mod.id}>
                  <td>{mod.id}</td>
                  <td>{mod.name}</td>
                  <td>{mod.role}</td>
                  <td>{mod.email}</td>
                  <td>
                    <span className={`status ${mod.status.toLowerCase()}`}>
                      {mod.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No Moderators Found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Moderators;