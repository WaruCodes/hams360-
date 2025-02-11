import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./EditCard.css";

const EditCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDeleted, setIsDeleted] = useState(false);

  // Extract section name from location state
  const sectionName = location.state?.section || '';

  // Handle the View button click
  const handleView = () => {
    // Redirect to the "R_Table" component (resource table page) with section name
    navigate(`/view-table/${sectionName}`);
  };

  //Handle the Edit button click
  const handleEdit = () => {
    // Redirect to the "Mobile Component"
    navigate('/add-card');
  };

  //Handle the delete button click
  const handleDelete = () => {
    // Display confirmation popup for delete action
    const confirmDelete = window.confirm("Are you sure you want to delete this Section?");
    if (confirmDelete) {
     
      setIsDeleted(true);
      alert('Section has been deleted successfully!');
    
      navigate('/resources');
    }
  };

  return (
    <div className="edit-card-container">
      {/* Show a message if the card is deleted */}
      {isDeleted && <p>Card has been deleted.</p>}

      {/* View, Edit, and Delete buttons */}
      <button className="view-button" onClick={handleView}>
        View
      </button>
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default EditCard;
