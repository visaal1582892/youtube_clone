import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: localStorage.getItem("isLoggedIn")==="true",
        user: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers: {
        // Reducer for login
        login: (state,action) => {
            state.isLoggedIn=true;
            state.user=action.payload;
            localStorage.setItem("isLoggedIn")="true";
            localStorage.setItem("user")=JSON.stringify(action.payload);
        },

        // Reducer for logout
        logout: (state) => {
            state.isLoggedIn=false;
            state.user=null;
            localStorage.setItem("isLoggedIn")="false";
            localStorage.removeItem("user");
        }

    }
})

export const {login, logout}=authSlice.actions;

export default authSlice.reducer;