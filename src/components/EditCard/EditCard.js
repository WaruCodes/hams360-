import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EditCard.css";

const EditCard = () => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleEdit = () => {
    // Redirect to the "Mobile Component"
    navigate('/add-card');
  };

  const handleDelete = () => {
    // Display confirmation popup for delete action
    const confirmDelete = window.confirm("Are you sure you want to delete this Section?");
    if (confirmDelete) {
      // Perform delete operation here (you may want to update the state or call API)
      setIsDeleted(true);
      alert('Section has been deleted successfully!');
      // Optionally, navigate away after deletion (e.g., back to resources)
      navigate('/resources');
    }
  };

  return (
    <div className="edit-card-container">
      {/* Show a message if the card is deleted */}
      {isDeleted && <p>Card has been deleted.</p>}

      {/* Edit and Delete buttons */}
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
