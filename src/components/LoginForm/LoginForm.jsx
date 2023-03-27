import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import { logIn } from 'redux/auth/operations';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder=" email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder=" password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <Btn type="submit">Log in</Btn>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 20px;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  font-size: 20px;
  border-bottom: 3px solid black;
  border-radius: 2px;
  outline: none;
`;

const Btn = styled.button`
  background-color: transparent;
  width: 200px;
  height: 50px;
  border: 3px solid black;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: white;
    background-color: black;
  }
`;
