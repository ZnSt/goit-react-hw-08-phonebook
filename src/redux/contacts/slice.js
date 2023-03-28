import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';
const NAME = 'contactsList';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
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
    [fetchDeleteContact.pending](state) {
      state.isLoading = true;
    },
    [fetchDeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    [fetchDeleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logOut.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
