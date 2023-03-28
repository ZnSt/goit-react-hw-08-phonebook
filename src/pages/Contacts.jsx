import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/operations';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts()).unwrap();
  }, [dispatch]);

  return (
    <div>
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
};
