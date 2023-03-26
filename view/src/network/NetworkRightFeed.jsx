import React from "react";
import Avatar from "../reusableComponent/Avatar";
import "./networkRightFeed.css";
import NetworkSuggestionCard from "./NetworkSuggestionCard";
function NetworkRightFeed() {
  return (
    <div className="networkRightFeed">
      <div className="networkRightFeed__card">
        <div className="networkRightFeed__card__header">
          <p className="networkRightFeed__card__headerTitle">Invitations</p>
          <p className="networkRightFeed__card__headerOption">See all 72</p>
        </div>
        <div className="networkRightFeed__card__requestWrapper">
          <div className="networkRightFeed__card__requestAvatar">
            <Avatar width={"50"} height={"50"} />
          </div>
          <div className="networkRightFeed__card__requestDetail">
            <p className="networkRightFeed__card__requestName">Mukul Arora</p>
            <p className="networkRightFeed__card__requestIntro"> React JS | Vue JS | Node JS | Typescript | HTML | CSS | Full Stack Developer</p>
          </div>
          <div className="networkRightFeed__card__requestBtn">
            <button className="ignoreBtn">Ignore</button>
            <button className="acceptBtn">Accept</button>
          </div>
        </div>
      </div>
      <div className="networkRightFeed__card">
        <div className="networkRightFeed__card__header">
          <p className="networkRightFeed__card__headerTitle">People you may know from Bharti Soft Tech Pvt. Ltd.</p>
          <p className="networkRightFeed__card__headerOption">See all</p>
        </div>
        <div className="networkRightFeed__suggestionCardWrapper">
          <NetworkSuggestionCard />
        </div>
      </div>
    </div>
  );
}

export default NetworkRightFeed;
