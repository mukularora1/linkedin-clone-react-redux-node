import React from "react";
import "./feed.css";
function FeedSort() {
  return (
    <div className="FeedSort">
      <div className="feedSort__hr">
        <hr />
      </div>
      <div className="feedSort__option">
        <div className="feedSort__option__left">Sort by:</div>
        <div className="feedSort__option__right">
          <div>Top</div>
          <button className="feedSort__option__rightBtn">^</button>
        </div>
      </div>
    </div>
  );
}

export default FeedSort;
