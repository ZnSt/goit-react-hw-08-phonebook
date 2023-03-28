import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#000',
      }}
    >
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
