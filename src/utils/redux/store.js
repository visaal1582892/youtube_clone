import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import videosReducer from './slices/videosSlice.js';
import searchReducer from './slices/searchSlice.js'
import showAuthReducer from './slices/showAuthSlice.js'

// Configuring the store
const store=configureStore({
    reducer: {
        auth: authReducer,
        videos: videosReducer,
        search: searchReducer,
        showAuth: showAuthReducer
    },
});

export default store;