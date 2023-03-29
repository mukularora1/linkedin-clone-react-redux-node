import React from 'react';
import GoogleLogo from '../../assets/GoogleLogo';
import LinkedInFullLogo from '../../assets/LinkedInFullLogo';
import './signUp.css';
function SignUp() {
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
            <input type="number" id="number" />
            <label htmlFor="password">Password (6 or more characters)</label>
            <input type="password" id="password" />
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <button className="showBtn">Show</button>
            </div>
            <p className="privacy-policy">
              By clicking Agree & Join, you agree to the LinkedIn{' '}
              <span className="blue-link">User Agreement</span> ,
              <span className="blue-link">Privacy Policy</span>, and
              <span className="blue-link"> Cookie Policy</span>.
            </p>
            <button className="joinButton">Agree and Join</button>
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
