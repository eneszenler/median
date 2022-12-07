import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    reduxSignIn: (state, action) => {
      state.userInfo = action.payload;
    },
    reduxSignOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { reduxSignIn, reduxSignOut } = UserSlice.actions;

export default UserSlice.reducer;