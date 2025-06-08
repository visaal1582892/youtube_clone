import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import videosReducer from './slices/videosSlice.js';

// Configuring the store
const store=configureStore({
    reducer: {
        auth: authReducer,
        videos: videosReducer
    },
});

export default store;