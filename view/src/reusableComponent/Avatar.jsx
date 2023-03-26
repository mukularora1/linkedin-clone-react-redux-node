import { Avatar } from "@mui/material";
import React from "react";
import AvatarImage from "../assets/avatar.jpeg";
import "./avatar.css";
function AvatarImg({ width, height }) {
  return (
    <div className="avatar xy--center" style={{ width: width, height: height }}>
      <Avatar src={AvatarImage} sx={{ width: width, height: height }} alt="avatar" className="avatar__img" />
    </div>
  );
}

export default AvatarImg;
