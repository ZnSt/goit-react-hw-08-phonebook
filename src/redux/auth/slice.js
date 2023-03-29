import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser } from './operations';
const NAME = 'auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  inRefreshing: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers: {
    [registration.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.inRefreshing = false;
      state.isLoading = false;
    },
    [refreshUser.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
