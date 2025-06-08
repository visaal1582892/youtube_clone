import { createSlice } from "@reduxjs/toolkit";

const videosSlice=createSlice({
    name: 'videos',
    initialState: {
        data: [],
        error: null,
        loading: false
    },
    reducers: {
        setData: (state,action) => {
            state.data=action.payload
        },
        setLoading: (state,action) => {
            state.loading=action.payload
        },
        setError: (state,action) => {
            state.error=action.payload
        }
    }
})

export const {setData, setLoading, setError} = videosSlice.actions;

export default videosSlice.reducer;