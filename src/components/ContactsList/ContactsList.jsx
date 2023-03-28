import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { fetchDeleteContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  console.log(contacts);
  const dispacth = useDispatch();

  return (
    <Container>
      {contacts.lenght === 0 ? (
        <div>Empty</div>
      ) : (
        <Ul>
          {contacts.map(contact => (
            <Li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Number: {contact.number}</p>
              <Btn
                type="button"
                onClick={() => dispacth(fetchDeleteContact(contact.id))}
              >
                Delete
              </Btn>
            </Li>
          ))}
        </Ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`;
const Li = styled.li`
  border: 2px solid black;
  width: 300px;
  margin-bottom: 20px;
  padding: 20px;
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
`;
