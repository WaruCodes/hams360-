import React from 'react';
import Navbar from "../../components/Nav/Navbar"; // Ensure the correct path to the Navbar component
import LoginForm from '../../components/LoginForm/LoginForm';

import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content-container">
        <div
          style={{
            backgroundImage: `url('/images/Hospital_old.jpg')`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            color: "white",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <h1>Hospital Asset Management<br></br> System</h1>
          <h2 style={{ color: 'white' }}>Pambahinna Divisional Hospital Belihuloya</h2>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
