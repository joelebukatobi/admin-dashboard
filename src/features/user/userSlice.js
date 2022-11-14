import { createSlice } from '@reduxjs/toolkit';
import { getUser, registerUser, userLogin, userLogout } from './userActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
      state.success = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = null;
      state.error = payload;
      state.success = false;
    },
    // logout
    [userLogout.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.success = true;
    },

    // get user details
    [getUser.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
      state.success = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
      state.success = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = null;
      state.error = payload;
      state.success = true;
    },
  },
});

export default userSlice.reducer;
