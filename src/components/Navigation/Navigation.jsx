import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <HomeLink to="/">Home</HomeLink>
      <ContactsLink to="/contacts">Contacts</ContactsLink>
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
`;
