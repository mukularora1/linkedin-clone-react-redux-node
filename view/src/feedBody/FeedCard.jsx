import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentLogo from "../assets/CommentLogo";
import RepostLogo from "../assets/RepostLogo";
import Avatar from "../reusableComponent/Avatar";
import "./feedCard.css";

import React from "react";
const likeClicked = (e) => {
  console.log(e);
};
function FeedCard(props) {
  return (
    <div className="feedCard">
      <div className="feedCard__top ">
        <div className="feedCard__top__avatar ">
          <Avatar width={"60px"} height={"60px"} />
        </div>
        <div className="feedCard__top__titleWrapper ">
          <div className="feedCard__top__title">Mukul Arora</div>
          <div className="feedCard__top__subtitle">React | Vue js | Nodejs | Typescript</div>
          <div className="feedCard__top__timing">16min</div>
        </div>
        <div className="feedCard__top__optionBtn ">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="feedCard__middle">
        <div className="feedCard__middle__blog">{props.data}</div>
        <div className="feedCard__middle__img"></div>
        <div className="feedCard__middle__reaction"></div>
      </div>
      <div className="feedCard__bottom">
        <div className="feedCard__bottom__iconWrapper">
          <div className="feedCard__bottom__icon">
            <ThumbUpOutlinedIcon sx={{ width: 30, height: 30 }} onClick={likeClicked} />
            <div className="feedCard__bottom__btnTitle">Like</div>
          </div>
        </div>
        <div className="feedCard__bottom__iconWrapper">
          <div className="feedCard__bottom__icon">
            <CommentLogo width={"30px"} height={"30px"} />
            <div className="feedCard__bottom__btnTitle">Comment</div>
          </div>
        </div>
        <div className="feedCard__bottom__iconWrapper">
          <div className="feedCard__bottom__icon">
            <RepostLogo width={"30px"} height={"30px"} />
            <div className="feedCard__bottom__btnTitle">Repost</div>
          </div>
        </div>
        <div className="feedCard__bottom__iconWrapper">
          <div className="feedCard__bottom__icon">
            <SendIcon width={"30px"} height={"30px"} />
            <div className="feedCard__bottom__btnTitle">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
