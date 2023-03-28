import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { setFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Find me"
        value={filter}
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 450px;
  height: 40px;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 20px;
`;
