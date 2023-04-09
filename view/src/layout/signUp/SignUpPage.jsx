import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/GoogleLogo';
import LinkedInFullLogo from '../../assets/LinkedInFullLogo';
import { contactRegex, emailRegex, passwordRegex } from '../../regex';
import './signUp.css';
function SignUp() {
  const [emailOrNumber, setEmailorNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((e) => !e);
  };
  const validateForm = () => {
    if (emailOrNumber === '') {
      setError((prevState) => ({
        ...prevState,
        email: 'Please enter email or number',
      }));
      return false;
    }
    if (!emailRegex.test(emailOrNumber) && !contactRegex.test(emailOrNumber)) {
      setError((prevState) => ({
        ...prevState,
        email: 'Please enter correct email or phone number',
      }));
      return false;
    }
    if (password === '') {
      setError(() => ({
        email: '',
        password: 'Please enter password',
      }));
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError(() => ({
        email: '',
        password:
          'Please enter a password with at least 1 capital letter, 1 small letter, 1 number, and a special character',
      }));
      return false;
    }
    return true;
  };
  const signUp = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const credentials = {
        password,
        [emailRegex.test(emailOrNumber) ? 'email' : 'phone_number']:
          emailOrNumber,
      };
      const response = await axios.post('create-user-account', credentials);
      if (response.statusText === 'OK' && response.data) {
        navigate('/profile-setup');
      }
    }
  };
  return (
    <>
      <div className="signUp__header">
        <LinkedInFullLogo height={40} fill={'var(--color-brand)'} />
      </div>
      <div className="signUp">
        <div className="signUp__heading">
          <h1>Make the most of your professional life</h1>
        </div>
        <div className="signUp__card">
          <div className="signUp__form">
            <label htmlFor="number">Email or phone number</label>
            <input
              type="text"
              id="number"
              onChange={(e) => setEmailorNumber(e.target.value)}
            />
            {error.email !== '' ? (
              <div>
                <p className="error">{error.email}</p>
              </div>
            ) : (
              ''
            )}
            <label htmlFor="password">Password (6 or more characters)</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <button className="showBtn" onClick={toggleShowPassword}>
                Show
              </button>
            </div>
            {error.password !== '' ? (
              <div>
                <p className="error">{error.password}</p>
              </div>
            ) : (
              ''
            )}
            <p className="privacy-policy">
              By clicking Agree & Join, you agree to the LinkedIn
              <span className="blue-link">User Agreement</span> ,
              <span className="blue-link">Privacy Policy</span>, and
              <span className="blue-link"> Cookie Policy</span>.
            </p>
            <button className="joinButton" onClick={signUp}>
              Agree and Join
            </button>
            <div className="signUp__or">
              <p>or</p>
            </div>
            <hr />

            <button className="googleButton">
              <GoogleLogo width={25} height={25} /> Continue with Google
            </button>
          </div>
        </div>
        <div className="signUp__bottom">
          <p> Looking to create a page for a business? Get help</p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
