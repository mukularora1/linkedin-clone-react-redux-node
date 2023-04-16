import { Avatar } from '@mui/material';
import React from 'react';
// import AvatarImage from '../assets/avatar.jpeg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import './avatar.css';
function AvatarImg({ width, height }) {
  const user = useSelector(selectUser);
  const displayPicture = `${user.baseURL}${user.userData?.display_picture_url}`;
  return (
    <div className="avatar xy--center" style={{ width: width, height: height }}>
      <Avatar
        src={displayPicture}
        sx={{ width: width, height: height }}
        alt="avatar"
        className="avatar__img"
      />
    </div>
  );
}

export default AvatarImg;
