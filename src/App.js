import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddCard from "./components/AddCard/AddCard";
import EditCard from "./components/EditCard/EditCard";
import RTable from "./components/R_Table/R_Table"; // Rename to PascalCase
import SignUp from './components/SignUp/SignUp';
import Notification from './pages/Notification/Notification';
import NotificationDetails from "./pages/Notification/NotificationDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reports from "./pages/Reports/Reports";
import Resources from "./pages/Resources/Resources";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/edit-card" element={<EditCard />} />
          <Route path="/view-table/:sectionName" element={<RTable />} /> {/* Use PascalCase */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/notification/:id" element={<NotificationDetails />} />  {/* Dynamic route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;