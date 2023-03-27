import React from 'react';
import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <RegistLink to="/register">Register</RegistLink>
      <LogInLink to="/login">Log In</LogInLink>
    </div>
  );
};

const RegistLink = styled(NavLink)`
  color: white;
  margin-right: 20px;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

const LogInLink = styled(NavLink)`
  color: white;

  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;
