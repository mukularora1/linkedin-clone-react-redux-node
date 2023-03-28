import React from 'react';
import './signUp.css';
function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__heading">
        <h1>Make the most of your professional life</h1>
      </div>
      <div className="signUp__card">
        <div className="signUp__form">
          <label htmlFor="number">Email or phone number</label>
          <input type="number" id="number" />
          <label htmlFor="password">Password (6 or more characters)</label>
          <input type="password" id="password" />
          <p className="privacy-policy">
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>
          <button className="joinButton">Agree and Join</button>
          <div className="signUp__or">
            <p>or</p>
          </div>
          <hr />

          <button className="googleButton">Continue with Google</button>
        </div>
      </div>
      <div className="signUp__bottom">
        <p>Looking to create a page for a business? Get help</p>
      </div>
    </div>
  );
}

export default SignUp;
