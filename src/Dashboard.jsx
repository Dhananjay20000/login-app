import React from "react";
import "./Dashboard.css";

function Dashboard({ username, setUser }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <h1>👋 Hello {username}</h1>

        <p>
          Welcome back! You have successfully logged in.
        </p>

        <div className="stats-container">

          <div className="stat-box">
            <h3>📦 Items</h3>
            <p>12</p>
          </div>

          <div className="stat-box">
            <h3>💰 Revenue</h3>
            <p>₹45,000</p>
          </div>

          <div className="stat-box">
            <h3>⚡ Status</h3>
            <p>Active</p>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={() => setUser(null)}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;