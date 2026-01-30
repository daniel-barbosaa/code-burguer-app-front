import React from 'react';
import { Navigate } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';

function PrivateRoute({ children, isadmin }) {
  const user = localStorage.getItem('codeburguer:userData');

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  // const formatedUser = JSON.parse(user).admin;

  // if (isadmin && !formatedUser) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <SidebarProvider>{children}</SidebarProvider>
    </>
  );
}

export default PrivateRoute;
