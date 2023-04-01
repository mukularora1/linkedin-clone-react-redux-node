import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInImg from '../../assets/SignInImg';
import { contactRegex, emailRegex, passwordRegex } from '../../regex';
import './signInBody.css';

function SignInBody() {
  const [password, setPassword] = useState('');
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

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

  const signIn = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const credentials = {
        password,
        [emailRegex.test(emailOrNumber) ? 'email' : 'number']: emailOrNumber,
      };
      console.log(credentials); // Replace with actual sign in logic
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((e) => !e);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onEmailOrNumberChange = (e) => {
    setEmailOrNumber(e.target.value);
  };
  return (
    <div className="signIn__body">
      <div className="signIn__body__left">
        <div className="signIn__form">
          <h1 className="signIn__form__title">
            Welcome to your professional community
          </h1>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="signIn__formWrapper"
          >
            <div className="signIn__formOption">
              <label htmlFor="email-input">Email or phone</label>
              <input
                type="text"
                id="email-input"
                value={emailOrNumber}
                onChange={onEmailOrNumberChange}
              />
            </div>
            {error.email !== '' ? (
              <div>
                <p className="error">{error.email}</p>
              </div>
            ) : (
              ''
            )}
            <div className="signIn__formOption">
              <label htmlFor="password-input">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password-input"
                value={password}
                onChange={onPasswordChange}
              />
              <div>
                <button className="showBtn" onClick={toggleShowPassword}>
                  SHOW
                </button>
              </div>
              {error.password !== '' ? (
                <div>
                  <p className="error">{error.password}</p>
                </div>
              ) : (
                ''
              )}
            </div>
            <p className="forgot-password">Forgot password ?</p>
            <div className="signIn__formButtonWrapper">
              <button className="signIn__formSignInBtn" onClick={signIn}>
                Sign In
              </button>
              <div>or</div>
              <button className="signIn__formGoogleSignInBtn">
                Sign in with google
              </button>
              <Link
                to="/signup"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  width: '100%',
                }}
              >
                <button className="signIn__formJoinInBtn">
                  New to linkedIn? Join now
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="signIn__body__right">
        <SignInImg />
      </div>
    </div>
  );
}

export default SignInBody;
