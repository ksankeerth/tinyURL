import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import AuthLayout from '../layout/AuthLayout';

export default function GlobalRoutes() {
  const routes: RouteObject[] = [
    {
      path: 'app/*',
      element: <AppLayout />,
    },
    {
      path: '/*',
      element: <AuthLayout />,
    },
  ];
  return useRoutes(routes);
}
