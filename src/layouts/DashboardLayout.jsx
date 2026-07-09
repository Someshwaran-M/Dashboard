import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TopDrivers from "../components/TopDrivers";

import "../styles/DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content-wrapper">

          <div className="page-content">
            <Outlet />
          </div>

          <TopDrivers />

        </div>

      </div>

    </div>
  );
}