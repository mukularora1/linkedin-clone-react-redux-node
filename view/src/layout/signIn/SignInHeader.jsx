import React from "react";
import ConnectLogo from "../../assets/ConnectLogo";
import DiscoverLogo from "../../assets/DiscoverLogo";
import JobLogo from "../../assets/JobLogo";
import LearningLogo from "../../assets/LearningLogo";
import LinkedInFullLogo from "../../assets/LinkedInFullLogo";
import "./signInHeader.css";
const options = [
  {
    component: <DiscoverLogo height={"25px"} width={"25px"} />,
    title: "Discover",
  },
  {
    component: <ConnectLogo height={"25px"} width={"25px"} />,
    title: "People",
  },
  {
    component: <LearningLogo height={"25px"} width={"25px"} />,
    title: "Learning",
  },
  {
    component: <JobLogo height={"25px"} width={"25px"} />,
    title: "Jobs",
  },
];
function SignInHeader() {
  return (
    <div className="signIn__header">
      <div className="signIn__headerContainer">
        <LinkedInFullLogo width={"auto"} height={"30"} fill={"var(--color-brand)"} />

        <div className="signIn__headerOptions">
          <div className="signIn__headerOptionWrapper">
            {options.map((el) => {
              return (
                <div className="mainWrapper">
                  <div className="signIn__headerOption">{el.component}</div>
                  <p>{el.title}</p>
                </div>
              );
            })}
          </div>
          <div className="verticleLine"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className="joinNowBtn">Join now</button>
            <button className="signInBtn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInHeader;
