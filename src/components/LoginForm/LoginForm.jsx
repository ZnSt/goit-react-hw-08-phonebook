import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

export const LoginForm = () => {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setLogEmail(event.target.value);
        break;
      case 'password':
        setLogPassword(event.target.value);
        break;

      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="User Email"
        name="email"
        value={logEmail}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="User Password"
        name="password"
        value={logPassword}
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
  transition: all 0.3s ease;

  :hover {
    color: white;
    background-color: black;
  }
`;
