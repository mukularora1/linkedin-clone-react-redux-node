import React from "react";
import { useSelector } from "react-redux";
import { selectPost } from "../features/post/postSlice";
import "./feed.css";
import FeedCard from "./FeedCard";
import FeedSort from "./FeedSort";
import PostEditor from "./PostEditor";
function Feed() {
  const post = useSelector(selectPost);
  return (
    <div className="feedBody">
      <div className="feedBody__top">
        <PostEditor />
      </div>
      <div className="feedBody__middle">
        <FeedSort />
      </div>
      <div className="feedBody__bottom">
        {post.value.length > 0
          ? post.value.map((e, index) => {
              return <FeedCard data={e} key={index} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Feed;
