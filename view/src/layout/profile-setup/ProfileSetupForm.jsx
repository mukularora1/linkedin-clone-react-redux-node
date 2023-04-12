import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  setIsNextClicked,
  uploadUserName,
} from '../../features/user/userSlice';
import './profileSetup.css';
function ProfileSetupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
  });
  const user = useSelector(selectUser);
  // useEffect(() => {
  //   (async() => {
  //     console.log("here");
  //   })();
  // }, []);
  const handleClickNext = () => {
    if (firstName.trim().length > 0 && lastName.trim().length > 0) {
      dispatch(setIsNextClicked());
      dispatch(
        uploadUserName({
          name: firstName + ' ' + lastName,
          userId: user.userId,
        })
      );
    } else {
      if (firstName.trim().length === 0) {
        setError((pre) => {
          return { ...pre, firstName: "First name can't be empty" };
        });
        return;
      }
      if (lastName.trim().length === 0) {
        setError((pre) => {
          return { firstName: '', lastName: "Last name can't be empty" };
        });
        return;
      }
    }
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
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
      {error.firstName ? <p className="error">{error.firstName}</p> : ''}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleLastName}
        value={lastName}
      />
      {error.lastName ? <p className="error">{error.lastName}</p> : ''}
      <Button onClick={handleClickNext}>Save and next</Button>
    </div>
  );
}

export default ProfileSetupForm;
