import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { registration } from 'redux/auth/operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      return toast.error('Please, enter all fields');
    }
    dispatch(registration({ name, email, password }));
    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder=" name"
        name="name"
        value={name}
        onChange={handleChange}
      />
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
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: white;
    background-color: black;
  }
`;
