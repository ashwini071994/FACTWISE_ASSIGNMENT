import React from 'react';

const EditUserForm = ({ user, handleChange, handleSave, handleCancel }) => {
  return (
    <div className="edit-user-form">
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleChange}
        disabled={!user.isAdult}
      />
      <select name="gender" value={user.gender} onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
        <option value="Rather not say">Rather not say</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="country"
        value={user.country}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={user.description}
        onChange={handleChange}
      />
      <button onClick={handleSave} disabled={!user.isModified}>
        Save
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditUserForm;
