import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

export const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setUserName(value);
        break;
      case 'email':
        setUserEmail(value);
        break;
      case 'password':
        setUserPassword(value);
        break;

      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="User Name"
        name="name"
        value={userName}
        onChange={handleChange}
      />
      <Input
        type="email"
        placeholder="User Email"
        name="email"
        value={userEmail}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="User Password"
        name="password"
        value={userPassword}
        onChange={handleChange}
      />
      <Btn type="submit">Registration</Btn>
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
