// utils/redux/slices/showAuthSlice.js
import { createSlice } from '@reduxjs/toolkit';

const showAuthSlice = createSlice({
  name: 'showAuth',
  initialState: {
    showModal: false,
    authType: 'login', // or 'register'
  },
  reducers: {
    toggleAuthModal: (state) => {
      state.showModal = !state.showModal;
    },
    setAuthType: (state, action) => {
      state.authType = action.payload; // 'login' or 'register'
      state.showModal = true;
    },
    closeAuthModal: (state) => {
      state.showModal = false;
    }
  },
});

export const { toggleAuthModal, setAuthType, closeAuthModal } = showAuthSlice.actions;
export default showAuthSlice.reducer;
