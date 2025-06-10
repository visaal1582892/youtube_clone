import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name: 'search',
    initialState: {
        category: 'All',
        query: ''
    },
    reducers: {
        setCategory: (state,action) => {
            state.category=action.payload;
        },
        setQuery: (state,action) => {
            state.query=action.payload;
        }
    }
})

export const {setCategory,setQuery} = searchSlice.actions;

export default searchSlice.reducer;