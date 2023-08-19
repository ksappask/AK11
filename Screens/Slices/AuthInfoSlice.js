import { createSlice } from "@reduxjs/toolkit";

export const AuthInfoSlice = createSlice({
  name: "authInfo",
  initialState: {
    authInfo: {
      authToken: "null",
      isLoading: "true",
    },
  },

  reducers: {
    addAuthInfo: (state, action) => {
      state.authInfo = action.payload;
      console.log(state.authInfo);
    },
    removeAuthInfo: (state, action) => {
      state.authInfo = [];
    },
  },
});
export const { addAuthInfo, removeAuthInfo } = AuthInfoSlice.actions;
export default AuthInfoSlice.reducer;
