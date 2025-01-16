import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./R_Table.css";

const RTable = () => {
  const { sectionName } = useParams(); // Get section name from URL
  
  // State to manage table data
  const [tableData, setTableData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", stock: 0, deduction: 0 });

  // Handle Add Asset form submission
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const available = formData.stock - formData.deduction;
    setTableData([...tableData, { ...formData, available }]);
    setFormData({ name: "", stock: 0, deduction: 0 });
    setShowAddForm(false);
    setIsEditing(false); // Ensure the table does not become editable when the form is saved
  };

  // Handle Edit button click
  const handleEdit = () => {
    setIsEditing(!isEditing);
    setShowAddForm(false); // Close the Add Asset form if open
  };

  // Handle Delete button click
  const handleDelete = (index) => {
    setTableData(tableData.filter((_, i) => i !== index));
  };

  return (
    <div className="r-table-container">
      <h1>{sectionName} - Asset Management</h1>
      <h2>Section Name: {sectionName}</h2>
      <h2>Responsible Person: {tableData.length > 0 ? tableData[0].name : "N/A"}</h2>

      <div className="button-group">
        <button onClick={() => setShowAddForm(true)}>Add Asset</button>
        <button onClick={handleEdit}>{isEditing ? "Save Changes" : "Edit Asset"}</button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddSubmit} className="add-form">
          <div className="form-group">
            <label>Asset Name:</label>
            <input
              type="text"
              placeholder="Asset Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Stock Count:</label>
            <input
              type="number"
              placeholder="Stock Count"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
              required
            />
          </div>
          <div className="form-group">
            <label>Deduction:</label>
            <input
              type="number"
              placeholder="Deduction"
              value={formData.deduction}
              onChange={(e) => setFormData({ ...formData, deduction: parseInt(e.target.value) })}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      <table className="asset-table">
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Stock Count</th>
            <th>Deduction</th>
            <th>Available Count</th>
            {isEditing && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {isEditing ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) =>
                        setTableData((prev) =>
                          prev.map((item, i) =>
                            i === index ? { ...item, name: e.target.value } : item
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.stock}
                      onChange={(e) =>
                        setTableData((prev) =>
                          prev.map((item, i) =>
                            i === index ? { ...item, stock: parseInt(e.target.value) } : item
                          )
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.deduction}
                      onChange={(e) =>
                        setTableData((prev) =>
                          prev.map((item, i) =>
                            i === index ? { ...item, deduction: parseInt(e.target.value) } : item
                          )
                        )
                      }
                    />
                  </td>
                  <td>{row.stock - row.deduction}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>🗑️</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{row.name}</td>
                  <td>{row.stock}</td>
                  <td>{row.deduction}</td>
                  <td>{row.available}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RTable;

