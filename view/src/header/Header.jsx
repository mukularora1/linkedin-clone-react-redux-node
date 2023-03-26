import { Link, useLocation } from "react-router-dom";
import ConnectLogo from "../assets/ConnectLogo";
import HomeLogo from "../assets/HomeLogo";
import JobLogo from "../assets/JobLogo";
import LinkedinLogo from "../assets/LinkedinLogo";
import MessageLogo from "../assets/MessageLogo";
import NotificationLogo from "../assets/NotificationLogo";
import PostAJobLogo from "../assets/PostAJobLogo";
import SearchIcon from "../assets/SearchIcon.svg";
import WorkLogo from "../assets/WorkLogo";
import "./mainHeader.css";

const dimention = {
  height: "24px",
  width: "24px",
};
const options = [
  {
    component: <HomeLogo height={dimention.height} width={dimention.width} />,
    title: "Home",
    pathName: "/",
  },
  {
    component: <ConnectLogo height={dimention.height} width={dimention.width} />,
    title: "My Network",
    pathName: "/network",
  },
  {
    component: <JobLogo height={dimention.height} width={dimention.width} />,
    title: "Jobs",
    pathName: "/jobs",
  },
  {
    component: <MessageLogo height={dimention.height} width={dimention.width} />,
    title: "Messaging",
    pathName: "/message",
  },
  {
    component: <NotificationLogo height={dimention.height} width={dimention.width} />,
    title: "Notifications",
    pathName: "/notifications",
  },
  {
    component: <hr style={{ height: "100%", color: "var(--brand-gray-color)" }} />,
  },
  {
    component: <WorkLogo height={dimention.height} width={dimention.width} />,
    title: "Work",
    pathName: "/work",
  },
  {
    component: <PostAJobLogo height={dimention.height} width={dimention.width} />,
    title: "Post a Job",
    pathName: "/post-a-job",
  },
];
function Header() {
  const location = useLocation();
  return (
    <div className="header xy--center">
      <div className="header__wrapper">
        <div className="header__left">
          <div className="header__linkedLogo">
            <LinkedinLogo width={"40px"} height={"40px"} />
          </div>
          <div className="header__searchBar">
            <img src={SearchIcon} alt="search icon" className="header__searchBar__searchIcon" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <nav className="header__right">
          <div className="header__headerOptions flex-direction-row">
            {options.map((option, index) =>
              option.pathName ? (
                <Link
                  key={index}
                  to={option.pathName}
                  style={location.pathname === option.pathName ? { textDecoration: "none", color: "black", borderBottom: "2px solid black" } : { textDecoration: "none", color: "black" }}>
                  <div className="header__headerOptions__option xy--center flex-direction-column button--hover-cursor" key={index}>
                    {option.component}
                    <h3 className="title">{option.title ? option.title : ""}</h3>
                  </div>
                </Link>
              ) : (
                <div className="header__headerOptions__option xy--center flex-direction-column button--hover-cursor" key={index}>
                  {option.component}
                  <hr style={{ height: "100%", color: "var(--brand-gray-color)" }} />
                  <h3 className="title">{option.title ? option.title : ""}</h3>
                </div>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
