import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserData, selectUser } from '../features/user/userSlice';
import Feed from '../feedBody/Feed';
import RightSideWidget from '../rightSidewidget/RightSideWidget';
import SideBar from '../sideBar/SideBar';
function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('called');
    if (user.userId) {
      (async () => {
        const res = await dispatch(getAllUserData({ userId: user.userId }));
        console.log(res);
      })();
    } else {
      console.log('else');
    }
  }, [user.userId, dispatch]);
  return (
    <div className="app__body">
      <SideBar />
      <Feed />
      <RightSideWidget />
    </div>
  );
}

export default Home;
