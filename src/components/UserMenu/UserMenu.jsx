import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>Welcome, {user}</Text>
      <Stick></Stick>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
const Text = styled.p`
  color: white;
  font-weight: bold;
`;

const Stick = styled.span`
  border-left: 2px solid white;
`;

const Btn = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  font-size: 20px;
  width: 100px;
  height: 45px;
`;
