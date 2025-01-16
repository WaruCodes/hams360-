import React from 'react';

import "./Home.css";
import Layout from "../../components/Layout/Layout";
import Nav from "../../components/Nav/Nav";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Reports from "../../pages/Reports/Reports";
import Notification from "../../pages/Notification/Notification";
import Resources from "../../pages/Resources/Resources";
import LandingPage from "../../pages/Landing_Page/Landing_Page"; // Rename to PascalCase

function Home() {
  return (
    <div>
        <Layout>
            <Nav />    
            <LandingPage /> {/* Use PascalCase */}
            <Dashboard />  
            <Reports />  
            <Notification /> 
            <Resources /> 
        </Layout>
    </div>
  )
}

export default Home;
