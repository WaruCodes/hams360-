import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import AddCard from "./components/AddCard/AddCard"; // Correct path
import EditCard from "./components/EditCard/EditCard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} /> 
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/edit-card" element={<EditCard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;



// return (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Resources />} />
//       <Route path="/add-card" element={<AddCard />} />
//       <Route path="/edit-card" element={<EditCard />} />
//     </Routes>
//   </BrowserRouter>
// );