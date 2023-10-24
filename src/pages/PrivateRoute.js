import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from './home';

const PrivateRoute = ({ element, authenticated, ...rest }) => {
  return authenticated ? (
    <Route {...rest} element={<Home />} />
  ) : (
    <Navigate to="/login"/> // Redirect to the login page if not authenticated
  );
};

export default PrivateRoute;