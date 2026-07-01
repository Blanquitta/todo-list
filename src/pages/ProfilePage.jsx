import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function UserProfile() {
  const { user, token } = useAuth();
  const [todoStats, setTodoStats] = useState(null);
  const [fetchState, setFetchState] = useState("loading"); // "loading" | "error" | "ready"

  useEffect(() => {
    if (!token) return;

    const loadTodoStats = async () => {
      try {
        const res = await fetch("/api/todos/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to retrieve todo statistics");

        const statsData = await res.json();
        setTodoStats(statsData);
        setFetchState("ready");
      } catch (err) {
        console.error("Error fetching todo stats:", err);
        setFetchState("error");
      }
    };

    loadTodoStats();
  }, [token]);

  // Render states
  if (fetchState === "loading") {
    return (
      <div className="profile-container">
        <p>Loading your profile data...</p>
      </div>
    );
  }

  if (fetchState === "error") {
    return (
      <div className="profile-container error">
        Unable to load data. Please try again later.
      </div>
    );
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Welcome back, {user?.name || "User"}</h2>
        <p>Here a snapshot of your current todo list progress:</p>
      </header>

      <section className="stats-section">
        <Statistic
          label="Total Todos"
          value={todoStats.total}
          highlight="#4a90e2"
        />
        <Statistic
          label="Completed"
          value={todoStats.completed}
          highlight="#50c878"
        />
        <Statistic
          label="Active"
          value={todoStats.active}
          highlight="#f5a623"
        />
      </section>
    </div>
  );
}

// Reusable statistic display component
function Statistic({ label, value, highlight }) {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${highlight}` }}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
