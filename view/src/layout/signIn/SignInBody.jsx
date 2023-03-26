import React from "react";
import SignInImg from "../../assets/SignInImg";
import "./signInBody.css";
function SignInBody() {
  return (
    <div className="signIn__body">
      <div className="signIn__body__left">
        <div className="signIn__form">
          <h1 className="signIn__form__title">Welcome to your professional community</h1>
          <form action={(event) => event.preventDefault()} className="signIn__formWrapper">
            <div className="signIn__formOption">
              <label for="email-input">Email or phone</label>
              <input type="text" id="email-input" />
            </div>
            <div className="signIn__formOption">
              <label for="password-input">Password</label>
              <input type="text" id="password-input" />
            </div>
            <p className="forgot-password">Forgot password ?</p>
            <div className="signIn__formButtonWrapper">
              <button className="signIn__formSignInBtn">Sign In</button>
              <div>or</div>
              <button className="signIn__formGoogleSignInBtn">Sign in with google</button>
              <button className="signIn__formJoinInBtn">New to linkedIn? Join now </button>
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
