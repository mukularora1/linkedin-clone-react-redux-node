import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './App.css';
import { getAllUserData, selectUser } from './features/user/userSlice';
import Header from './header/Header';
import Routes from './routes/index';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();
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
    <div className="app">
      {location.pathname === '/signin' || location.pathname === '/signup' ? (
        ''
      ) : (
        <Header />
      )}
      <Routes />
    </div>
  );
}

export default App;
