import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { setFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  console.log(filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="find contact"
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
  width: 335px;
  height: 30px;
`;
