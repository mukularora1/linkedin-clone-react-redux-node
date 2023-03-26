import React, { useState } from "react";
import ConnectLogo from "../assets/ConnectLogo";
import ContactsLogo from "../assets/ContactsLogo";
// import FollowersLogo from "../assets/FollowersLogo";
import EventsLogo from "../assets/EventsLogo";
import GroupsLogo from "../assets/GroupsLogo";
import HashtagsLogo from "../assets/HashtagsLogo";
import NewsLetterLogo from "../assets/NewsLetterLogo";
import PagesLogo from "../assets/PagesLogo";
import "./networkOptions.css";

const options = [
  {
    icon: <ConnectLogo height={"25px"} width={"25px"} />,
    title: "Connections",
    totalNumber: 882,
  },
  {
    icon: <ContactsLogo height={"25px"} width={"25px"} />,
    title: "Contacts",
    totalNumber: 92,
  },
  {
    icon: <ConnectLogo height={"25px"} width={"25px"} />,
    title: "Followings and followers",
    totalNumber: 105,
  },
  {
    icon: <GroupsLogo height={"25px"} width={"25px"} />,
    title: "Groups",
    totalNumber: 3,
  },
  {
    icon: <EventsLogo height={"25px"} width={"25px"} />,
    title: "Events",
    totalNumber: 23,
  },
  {
    icon: <PagesLogo height={"25px"} width={"25px"} />,
    title: "Pages",
    totalNumber: 56,
  },
  {
    icon: <NewsLetterLogo height={"25px"} width={"25px"} />,
    title: "NewsLetter",
    totalNumber: 6,
  },
  {
    icon: <HashtagsLogo height={"25px"} width={"25px"} />,
    title: "Hashtags",
    totalNumber: 18,
  },
];

function NetworkLeftOptions() {
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const handleShowMore = () => {
    setIsShowMoreClicked((prevState) => !prevState);
  };

  const buttonName = isShowMoreClicked ? "Show less" : "Show more";

  return (
    <div className="networkOptions">
      <div className="networkOptions__container">
        <div className="networkOptions__title">Manage my network</div>
        {options.slice(0, isShowMoreClicked ? 1 : options.length).map(({ icon, title, totalNumber }, index) => (
          <div className="networkOptions__row" key={index}>
            <div className="networkOptions__left">
              <div className="networkOptions__row__icon">{icon}</div>
              <div className="networkOptions__row__title">{title}</div>
            </div>
            <div className="networkOptions__row__number">{totalNumber}</div>
          </div>
        ))}
        <div className="networkOptions__showbtn">
          <button onClick={handleShowMore}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
}

export default NetworkLeftOptions;
