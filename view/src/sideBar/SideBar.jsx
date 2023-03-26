import React from "react";
import bgimage from "../assets/codecode.jpg";
import Avatar from "../reusableComponent/Avatar";
import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__bgImg">
          <img className="sidebar__top__img" src={bgimage} alt="bg-coder" />
        </div>
        <div className="sidebar__top__avatar">
          <Avatar width={"60px"} height={"60px"} />
        </div>
        <div className="sidebar__top__detail">
          <div className="sidebar__top__userName">Mukul Arora</div>
          <div className="sidebar__top__about">
            React JS | Vue JS | Node JS | Typescript | HTML | CSS | Full Stack
            Developer
          </div>
        </div>
      </div>
      <div className="sidebar__middle">
        <div className="sidebar__stat__wrapper">
          <div className="sidebar__stat">
            <div className="sidebar__stat__heading">
              Who's viewed your profile
            </div>
            <div className="sidebar__stat__number">5656</div>
          </div>
          <div className="sidebar__stat">
            <div className="sidebar__stat__heading">
              Impressions of your post
            </div>
            <div className="sidebar__stat__number">554</div>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default SideBar;
