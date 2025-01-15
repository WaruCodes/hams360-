import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home/homePage';
import SignUp from './components/SignUp/SignUp';
import Notification from './pages/Notification/Notification';
import NotificationDetails from "./pages/Notification/NotificationDetails";
import { AuthProvider } from './AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/notification/:id" element={<NotificationDetails />} />  {/* Dynamic route */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/report" element={<Report />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
