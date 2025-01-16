import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddCard from "./components/AddCard/AddCard";
import EditCard from "./components/EditCard/EditCard";
import RTable from "./components/R_Table/R_Table"; // Rename to PascalCase

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} /> 
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/edit-card" element={<EditCard />} />
          <Route path="/view-table/:sectionName" element={<RTable />} /> {/* Use PascalCase */}
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