import React from "react";
import { Link, useNavigate } from "react-router-dom";  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user authentication data (example: clearing a JWT token)
    localStorage.removeItem("authToken");  // Example token removal
    alert("You have been logged out.");
    navigate("/login");  // Redirect to the login page
  };
  return (
    <div className="sidebar">
      <div
        className="logo"
        style={{
          backgroundImage: `url('/images/Logo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '150px',
          height: '50px',
        }}
      >
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/resources" >Resources</Link>
        </li>
        <li>
          <Link to="/report" >Report</Link>
        </li>
        <li>
          <Link to="/notifications" >Notification</Link>
        </li>
        <li>
          <Link to="#" onClick={handleLogout} >Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
