import React from "react";
import {
  FaMapMarkedAlt,
  FaCar,
  FaLocationArrow,
  FaSyncAlt,
} from "react-icons/fa";
import "../../styles/dashboard/LiveMap.css";

const drivers = [
  {
    id: "DRV-1001",
    name: "John Smith",
    location: "New York",
    status: "Online",
  },
  {
    id: "DRV-1002",
    name: "Emma Wilson",
    location: "Los Angeles",
    status: "On Ride",
  },
  {
    id: "DRV-1003",
    name: "David Miller",
    location: "Chicago",
    status: "Offline",
  },
];

const LiveMap = () => {
  return (
    <div className="livemap-page">

      {/* Header */}
      <div className="livemap-header">
        <div>
          <h1>Live Map</h1>
          <p>Track all drivers in real time.</p>
        </div>

        <button
          className="refresh-btn"
          onClick={() => window.location.reload()}
        >
          <FaSyncAlt /> Refresh
        </button>
      </div>

      <div className="livemap-cards">

        <div className="livemap-card">
          <FaCar />
          <h3>25</h3>
          <p>Total Drivers</p>
        </div>

        <div className="livemap-card">
          <FaLocationArrow />
          <h3>18</h3>
          <p>Online</p>
        </div>

        <div className="livemap-card">
          <FaMapMarkedAlt />
          <h3>7</h3>
          <p>On Ride</p>
        </div>

      </div>

      <div className="livemap-table">
        <table>
          <thead>
            <tr>
              <th>Driver ID</th>
              <th>Name</th>
              <th>Current Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.location}</td>
                <td>
                  <span
                    className={`status ${driver.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {driver.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Chennai&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

  
      

    </div>
  );
};

export default LiveMap;