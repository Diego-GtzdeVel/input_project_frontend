import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : null;
}

export default ProtectedRoute;