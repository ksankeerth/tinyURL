import React from 'react';
import AuthRoutes from '../routes/AuthRoutes';

function AuthLayout() {
  return (
    <div className="fit-container flex-row">
      <div className="flex-grow-2 bg-green" />
      <div className="bg-grey flex-grow-1 fit-height flex-row flex-center-content-hor flex-center-content-ver">
        <AuthRoutes />
      </div>
    </div>
  );
}

export default AuthLayout;
