import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <div>
      <HomeLink to="/">Home</HomeLink>
      <ContactsLink to="/contacts">Contacts</ContactsLink>
      {isLoggedIn && <AboutLink to="/about">About</AboutLink>}
    </div>
  );
};

const HomeLink = styled(NavLink)`
  color: white;
  margin-right: 20px;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

const ContactsLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  margin-right: 20px;
`;

const AboutLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;
