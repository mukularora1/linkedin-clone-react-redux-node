import React from 'react';
import { useSelector } from 'react-redux';
import FollowersLogo from '../assets/FollowersLogo';
import bgImg from '../assets/codecode.jpg';
import { selectUser } from '../features/user/userSlice';
import Avatar from '../reusableComponent/Avatar';
import './networkSuggestionCard.css';
function NetworkSuggestionCard() {
  const user = useSelector(selectUser);
  return (
    <div className="networkSuggestionCard">
      <div className="networkSuggestionCard__bgImg">
        <img src={bgImg} alt="" />
      </div>
      <div className="networkSuggestionCard__avatar">
        <Avatar width={'50 !important'} height={'50 !important'} />
      </div>
      <div className="networkSuggestionCard__intro">
        <p className="networkSuggestionCard__name">
          {user.userData ? user.userData.name : ''}
        </p>
        <p className="networkSuggestionCard__bio"></p>
        React JS | Vue JS | Node JS
      </div>
      <div className="networkSuggestionCard__connectBtn">
        <button>
          <FollowersLogo
            width={'20'}
            height={'20'}
            bgColor={'var(--color-brand)'}
          />{' '}
          Connect
        </button>
      </div>
    </div>
  );
}

export default NetworkSuggestionCard;
