import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// ProtectedRoute:: Protected routes area accessible to logged in users only.
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!localStorage.getItem('user')) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
