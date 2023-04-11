import React, { useState } from 'react';
import './profileSetup.css';
function ProfileSetupForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
  });
  const handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  };
  return (
    <div className="profileSetup__form">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleFirstName}
        value={firstName}
      />
      {error.firstName ? <p className="error">error.firstName</p> : ''}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleLastName}
        value={lastName}
      />
    </div>
  );
}

export default ProfileSetupForm;
