import React, { useState } from 'react';
import { MdAdd, MdRemove, MdEdit, MdDelete } from 'react-icons/md';
import EditUserForm from './EditUserForm';

const UserCard = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Save functionality
  };

  const handleCancel = () => {
    // Cancel functionality
  };

  const handleDelete = () => {
    // Delete functionality
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  // Calculate age based on DOB
  const calculateAge = dob => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <div className="user-card">
      <div className="user-header" onClick={toggleAccordion}>
        <h2>{user.first} {user.last}</h2>
        {isExpanded ? <MdRemove /> : <MdAdd />}
      </div>
      {isExpanded  && (
        
        <div className="user-details">
          <p>Age: {calculateAge(user.dob)}</p>
          <p>Gender: {user.gender}</p>
          <p>Country: {user.country}</p>
          <p>Description: {user.description}</p>
          {!isEditing ? (
            <div className="user-actions">
              <button onClick={toggleEditMode}>
                <MdEdit /> Edit
              </button>
              <button onClick={handleDelete}>
                <MdDelete /> Delete
              </button>
            </div>
          ) : (
            <EditUserForm
              user={editedUser}
              handleChange={handleChange}
              handleSave={handleSave}
              handleCancel={handleCancel}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserCard;
