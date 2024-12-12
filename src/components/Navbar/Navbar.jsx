import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#007bff",
        color: "white",
      }}
    >
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        Profile
      </Link>
      <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
        Settings
      </Link>
      <button
        onClick={logout}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;