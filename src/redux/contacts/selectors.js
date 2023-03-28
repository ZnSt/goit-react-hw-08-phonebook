export const selectFilter = state => state.filter;
export const getVisibleContacts = state => {
  return state.contacts.contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(state.contacts.filter) ||
      contact.number.toLowerCase().includes(state.contacts.filter)
  );
};
