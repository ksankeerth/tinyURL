import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import LoginComponent from './../components/auth/LoginComponent';
import ResetComponent from './../components/auth/ResetComponent';
import SignupComponent from './../components/auth/SignupComponent';

export default function AuthRoutes() {
  const routes: RouteObject[] = [
    {
      path: 'signup',
      element: <SignupComponent />,
    },
    {
      path: 'reset',
      element: <ResetComponent />,
    },
    {
      path: 'login',
      element: <LoginComponent />,
    },

    {
      path: '/*',
      element: <Navigate replace to="/login" />,
    },
  ];
  return useRoutes(routes);
}
