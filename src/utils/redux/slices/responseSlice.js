import { createSlice } from "@reduxjs/toolkit";

const responseSlice=createSlice({
    name: "response",
    initialState: {status: "ideal", msg: ""},
    reducers: {
        setSuccess: (state,action) => {
            state.status="success";
            state.msg=action.payload;
        },
        setError: (state,action) => {
            state.status="error";
            state.msg=action.payload;
        },
        setIdeal: (state,action) => {
            state.status="ideal";
            state.msg=""
        }
    }
})

export const { setSuccess, setError, setIdeal } = responseSlice.actions;
export default responseSlice.reducer;