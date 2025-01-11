import React, { useState } from "react";
import "./AddCard.css";

const SimpleForm = () => {
  const [sectionName, setSectionName] = useState("");
  const [responsiblePerson, setResponsiblePerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log("Section Name:", sectionName);
    console.log("Responsible Person:", responsiblePerson);
    alert(`Section Name: ${sectionName}\nResponsible Person: ${responsiblePerson}`);
    // Clear the form
    setSectionName("");
    setResponsiblePerson("");
  };

  return (
    <div className="form-container">
      <h2>Add Section Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sectionName">Section Name:</label>
          <input
            type="text"
            id="sectionName"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Enter section name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="responsiblePerson">Responsible Person:</label>
          <input
            type="text"
            id="responsiblePerson"
            value={responsiblePerson}
            onChange={(e) => setResponsiblePerson(e.target.value)}
            placeholder="Enter responsible person's name"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
