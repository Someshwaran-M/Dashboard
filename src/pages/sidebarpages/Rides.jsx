import React from "react";
import {
  FaCar,
  FaRoad,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
} from "react-icons/fa";
import "../../styles/dashboard/Rides.css";

const rides = [
  {
    id: "#RID-1001",
    driver: "John Smith",
    passenger: "Emma Wilson",
    fare: "$25",
    status: "Completed",
  },
  {
    id: "#RID-1002",
    driver: "David Miller",
    passenger: "Sophia Lee",
    fare: "$18",
    status: "Ongoing",
  },
  {
    id: "#RID-1003",
    driver: "Michael Brown",
    passenger: "Olivia White",
    fare: "$32",
    status: "Cancelled",
  },
  {
    id: "#RID-1004",
    driver: "James Clark",
    passenger: "William Scott",
    fare: "$15",
    status: "Completed",
  },
  {
    id: "#RID-1005",
    driver: "Daniel Harris",
    passenger: "Lucas King",
    fare: "$21",
    status: "Ongoing",
  },
];

const Rides = () => {
  return (
    <div className="orders-page">

      {/* Header */}
      <div className="orders-header">
        <div>
          <h1>Ride Management</h1>
          <p>Manage and monitor all rides.</p>
        </div>

        <button className="new-order-btn">
          + New Ride
        </button>
      </div>

      {/* Cards */}
      <div className="orders-cards">

        <div className="order-card">
          <FaCar />
          <h3>5</h3>
          <p>Total Rides</p>
        </div>

        <div className="order-card">
          <FaRoad />
          <h3>2</h3>
          <p>Ongoing</p>
        </div>

        <div className="order-card">
          <FaCheckCircle />
          <h3>2</h3>
          <p>Completed</p>
        </div>

        <div className="order-card">
          <FaTimesCircle />
          <h3>1</h3>
          <p>Cancelled</p>
        </div>

      </div>

      {/* Search */}
      <div className="orders-toolbar">

        <div className="search-box-order">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Rides..."
          />
        </div>

        <select>
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

      </div>

      {/* Table */}
      <div className="orders-table">
        <table>

          <thead>
            <tr>
              <th>Ride ID</th>
              <th>Driver</th>
              <th>Passenger</th>
              <th>Fare</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.id}</td>
                <td>{ride.driver}</td>
                <td>{ride.passenger}</td>
                <td>{ride.fare}</td>

                <td>
                  <span
                    className={`status ${ride.status.toLowerCase()}`}
                  >
                    {ride.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Rides;