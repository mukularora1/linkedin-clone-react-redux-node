import React from 'react';
import SignInPage from '../layout/signIn/SignInPage';
import SignUpPage from '../layout/signUp/SignUpPage';
import Network from '../network/Network';
import Error from '../pages/Error';
import Home from '../pages/Home';
const MainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/network',
    element: <Network />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },

  {
    path: '*',
    element: <Error />,
  },
];

export default MainRoutes;
