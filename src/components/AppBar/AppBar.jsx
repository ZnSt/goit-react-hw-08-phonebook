import React from 'react';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
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
      <AuthNav />
    </div>
  );
};
