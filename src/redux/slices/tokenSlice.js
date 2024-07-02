import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
    name: null,
    email: null,
  },
  reducers: {
    setToken: (state, action) => {
      const { token, name, email } = action.payload;
      state.value = token;
      state.token = token;
      state.name = name;
      state.email = email;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export const selectToken = (state) => state.token.token;
export const selectUserName = (state) => state.token.name;
export const selectEmail = (state) => state.token.email;

export default tokenSlice.reducer;
