import React from 'react'

import "./Home.css";
import Layout from "../../components/Layout/Layout";
import Nav from "../../components/Nav/Nav";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Reports from "../../pages/Reports/Reports";
import Notification from "../../pages/Notification/Notification";
import Resources from "../../pages/Resources/Resources";
import R_Table from "../../pages/R_Table/R_Table";
import Landing_Page from "../../pages/Landing_Page/Landing_Page";


function Home() {
  return (
    <div>
        <Layout>
            <Nav />    
            <Landing_Page/>   
            <Dashboard/>  
            <Reports/>  
            <Notification/> 
            <Resources/> 
            <R_Table/>
        </Layout>
    </div>
  )
}

export default Home;
