import React from "react";
import "./network.css";
import NetworkLeftOptions from "./NetworkLeftOptions";
import NetworkRightFeed from "./NetworkRightFeed";
function Network() {
  return (
    <>
      <div className="network">
        <div className="network__left">
          <NetworkLeftOptions />
        </div>
        <div className="network__right">
          <NetworkRightFeed />
        </div>
      </div>
    </>
  );
}

export default Network;
