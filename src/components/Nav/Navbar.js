import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.jpg'; // Ensure the correct path to the logo image

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user authentication data (example: clearing a JWT token)
    localStorage.removeItem("authToken");  // Example token removal
    alert("You have been logged out.");
    navigate("/login");  // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '100px' }} /> {/* Add the logo */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/notifications">Notification</Link></li>
        <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
