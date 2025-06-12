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
        },
        deleteVideoById: (state,action) => {
            const updatedVideos=state.videos.filter((video) => video._id != action.payload);
            state.videos=updatedVideos;
        }
    }
})

export const {setVideos, setLoading, setError, deleteVideoById} = videosSlice.actions;

export default videosSlice.reducer;