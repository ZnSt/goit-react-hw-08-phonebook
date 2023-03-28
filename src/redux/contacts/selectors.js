export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const getVisibleContacts = state => {
  const filteredContacts = state.contacts.contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(state.contacts.filter) ||
      contact.number.toLowerCase().includes(state.contacts.filter)
  );
  return filteredContacts.sort((a, b) =>
    a.name.charAt(0).localeCompare(b.name.charAt(0))
  );
};
