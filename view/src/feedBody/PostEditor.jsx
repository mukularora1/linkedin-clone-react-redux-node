import React, { useState } from "react";
import { useDispatch } from "react-redux";
import JobLogo from "../assets/JobLogo";
import PhotoLogo from "../assets/PhotoLogo";
import VideoLogo from "../assets/VideoLogo";
import WriteArticleLogo from "../assets/WriteArticleLogo";
import { setPostArr } from "../features/post/postSlice";
import Avatar from "../reusableComponent/Avatar";
import "./posteditor.css";

const options = [
  {
    component: <PhotoLogo height="24px" width="24px" />,
    title: "Photo",
  },
  {
    component: <VideoLogo height="24px" width="24px" />,
    title: "Video",
  },
  {
    component: <JobLogo height="24px" width="24px" fillColor="var(--color-brand)" />,
    title: "Jobs",
  },
  {
    component: <WriteArticleLogo height="24px" width="24px" />,
    title: "Write article",
  },
];

function PostEditor() {
  const dispatch = useDispatch();
  const [inputString, setInputString] = useState(() => "");

  const handleEnter = (e) => {
    if (e.which === 13) {
      dispatch(setPostArr(inputString));
      setInputString("");
    }
  };

  const handlePostChange = (e) => {
    setInputString(e.target.value);
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    // handle the file input change event
  };

  const fileInputRef = React.useRef(null);
  console.log(fileInputRef);
  return (
    <div className="postEditor xy--center flex-direction-column">
      <div className="postEditor__upper">
        <div className="postEditor__upper__avatar">
          <Avatar width={"50px"} height={"50px"} />
        </div>
        <div className="postEditor__upper__inputBoxContainer">
          <input value={inputString} type="text" className="postEditor__upper__inputBox" placeholder="Start a post" onKeyPress={handleEnter} onChange={handlePostChange} />
        </div>
      </div>
      <div className="postEditor__lower">
        {options.map((el, index) => {
          if (el.title === "Photo") {
            return (
              <div className="postEditor__lower__item button--hover-cursor" key={index} onClick={handlePhotoClick}>
                <div>{el.component}</div>
                <h3>{el.title}</h3>
                <input type="file" ref={fileInputRef} onChange={handleFileInputChange} style={{ display: "none" }} />
              </div>
            );
          } else {
            return (
              <div className="postEditor__lower__item button--hover-cursor" key={index}>
                <div>{el.component}</div>
                <h3>{el.title}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PostEditor;
