import React from 'react';
import { Outlet } from 'react-router';
import { AppBar } from 'components/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
