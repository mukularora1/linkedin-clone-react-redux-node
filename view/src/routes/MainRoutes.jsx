import React from 'react';
import ProfileSetup from '../layout/profile-setup/ProfileSetup';
import SignInPage from '../layout/signIn/SignInPage';
import SignUpPage from '../layout/signUp/SignUpPage';
import Network from '../network/Network';
import Error from '../pages/Error';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoutes';
const MainRoutes = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/network',
    element: (
      <ProtectedRoute>
        <Network />
      </ProtectedRoute>
    ),
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
    path: '/profile-setup',
    element: (
      <ProtectedRoute>
        <ProfileSetup />
      </ProtectedRoute>
    ),
  },

  {
    path: '*',
    element: (
      <ProtectedRoute>
        <Error />
      </ProtectedRoute>
    ),
  },
];

export default MainRoutes;
