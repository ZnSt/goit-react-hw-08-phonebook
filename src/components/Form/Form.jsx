import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { fetchAddContact } from 'redux/contacts/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNubmer] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || number === '') {
      return toast.warning('Please, enter all fields');
    }
    dispatch(fetchAddContact({ name, number }));
    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNubmer(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNubmer('');
  };

  return (
    <FormSt onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="number"
        placeholder="Number"
        value={number}
        onChange={handleChange}
      />
      <Btn type="submit">Add Contact</Btn>
    </FormSt>
  );
};
const FormSt = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 30px;
  padding-left: 40px;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  border-bottom: 3px solid black;
  outline: none;
  font-size: 25px;
`;

const Btn = styled.button`
  width: 180px;
  height: 50px;
  background-color: transparent;
  border-radius: 4px;
  font-size: 20px;
  padding: 10px;
  border: 3px solid black;

  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: white;

    background-color: black;
  }
`;
