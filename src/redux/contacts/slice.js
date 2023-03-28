import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';
const NAME = 'contactsList';

const initialState = {
  contacts: [
    { id: 1, name: 'Jacon Verb', number: '325234523432' },
    { id: 1, name: 'Jacon Verb', number: '325234523432' },
    { id: 1, name: 'Jacon Verb', number: '325234523432' },
    { id: 1, name: 'Jacon Verb', number: '325234523432' },
  ],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers: {
    //   fetch
    [fetchAllContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add
    [fetchAddContact.pending](state) {
      state.isLoading = true;
    },
    [fetchAddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [fetchAddContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete
    // [fetchDeleteContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [fetchDeleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.contacts.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contacts.splice(index, 1);
    // },
    // [fetchDeleteContact.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
