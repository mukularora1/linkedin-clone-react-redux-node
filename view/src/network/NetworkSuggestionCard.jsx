import React from "react";
import bgImg from "../assets/codecode.jpg";
import FollowersLogo from "../assets/FollowersLogo";
import Avatar from "../reusableComponent/Avatar";
import "./networkSuggestionCard.css";
function NetworkSuggestionCard() {
  return (
    <div className="networkSuggestionCard">
      <div className="networkSuggestionCard__bgImg">
        <img src={bgImg} alt="" />
      </div>
      <div className="networkSuggestionCard__avatar">
        <Avatar width={"50 !important"} height={"50 !important"} />
      </div>
      <div className="networkSuggestionCard__intro">
        <p className="networkSuggestionCard__name">Mukul Arora</p>
        <p className="networkSuggestionCard__bio"></p>
        React JS | Vue JS | Node JS
      </div>
      <div className="networkSuggestionCard__connectBtn">
        <button>
          <FollowersLogo width={"20"} height={"20"} bgColor={"var(--color-brand)"} /> Connect
        </button>
      </div>
    </div>
  );
}

export default NetworkSuggestionCard;
