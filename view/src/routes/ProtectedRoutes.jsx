import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '../features/user/userSlice';
// ProtectedRoute:: Protected routes area accessible to logged in users only.
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selectUser);
  if (!localStorage.getItem('user')) {
    if (!user.userId && !user.token) {
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
