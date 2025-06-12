import { createSlice } from "@reduxjs/toolkit";

const videosSlice=createSlice({
    name: 'videos',
    initialState: {
        videos: [],
        error: null,
        loading: false
    },
    reducers: {
        setVideos: (state,action) => {
            state.videos=action.payload
            state.loading=false
        },
        setLoading: (state,action) => {
            state.loading=action.payload
        },
        setError: (state,action) => {
            state.error=action.payload
            state.loading=false;
        }
    }
})

export const {setVideos, setLoading, setError} = videosSlice.actions;

export default videosSlice.reducer;