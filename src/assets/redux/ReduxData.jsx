import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";

export const loginOrNotSlice = createSlice({
  name: "loginData",
  initialState: {
    isLogin: false,
  },
  reducers: {
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const store = configureStore({
  reducer: {
    [loginOrNotSlice.name]: loginOrNotSlice.reducer,
  },
});
