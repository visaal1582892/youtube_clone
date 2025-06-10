import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userId: null,
    userDetails: null
  },
  reducers: {
    // Reducer for login
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },

    setUserDetails: (state,action) => {
        state.userDetails=action.payload;
        console.log(action.payload);
    },

    // Reducer for logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId=null;
      state.userDetails = null;
      localStorage.removeItem("userToken");
    }
  }
});

export const { login, logout, setUserDetails } = authSlice.actions;

export default authSlice.reducer;
