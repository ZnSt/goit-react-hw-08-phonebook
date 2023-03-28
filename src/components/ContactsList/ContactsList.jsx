import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDeleteContact,
  fetchAllContacts,
} from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  console.log(contacts);
  const dispacth = useDispatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Number: {contact.phon}</p>
            <button
              type="button"
              onClick={() => dispacth(fetchDeleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
