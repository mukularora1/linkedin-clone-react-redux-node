import React from "react";
import SignInBody from "./SignInBody";
import SignInHeader from "./SignInHeader";
function SignInPage() {
  return (
    <div className="signInContainer" style={{ backgroundColor: "var(--bg-card)" }}>
      <SignInHeader />
      <div className="signInBodyWrapper" style={{ display: "flex", justifyContent: "center" }}>
        <SignInBody />
      </div>
    </div>
  );
}

export default SignInPage;
