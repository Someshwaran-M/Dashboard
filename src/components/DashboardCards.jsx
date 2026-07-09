import React from "react";
import {
  FaShoppingBag,
  FaDollarSign,
  FaChartLine,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/dashboard/DashboardCards.css";

const cards = [
  {
    id: 1,
    title: "Total Orders",
    value: "435",
    change: "+12.5%",
    icon: <FaShoppingBag />,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    id: 2,
    title: "Revenue",
    value: "$16,240",
    change: "+8.3%",
    icon: <FaDollarSign />,
    color: "#16A34A",
    bg: "#ECFDF5",
  },
  {
    id: 3,
    title: "Profit",
    value: "$8,530",
    change: "+4.8%",
    icon: <FaChartLine />,
    color: "#F59E0B",
    bg: "#FFF7ED",
  },
  {
    id: 4,
    title: "Completed",
    value: "326",
    change: "+18.2%",
    icon: <FaCheckCircle />,
    color: "#EF4444",
    bg: "#FEF2F2",
  },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="stat-card fade-up"
          style={{
            animationDelay: `${index * 0.15}s`,
          }}
        >
          <div
            className="stat-icon"
            style={{
              backgroundColor: card.bg,
              color: card.color,
            }}
          >
            {card.icon}
          </div>

          <div className="stat-content">
            <span className="stat-title">{card.title}</span>

            <h2 className="stat-value">{card.value}</h2>

            <small
              className="stat-change"
              style={{ color: card.color }}
            >
              <FaArrowUp />
              <span>{card.change} this month</span>
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;