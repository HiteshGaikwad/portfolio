'use client'

import { createSlice } from "@reduxjs/toolkit";


export const themeSwitchSlice= createSlice({
    name:'themeSwitcher',
    initialState: false,
    reducers:{
        switchTheme:(state)=>{
            state=!state;
            return state;
        }
    }
})

export const {switchTheme}= themeSwitchSlice.actions;

export default themeSwitchSlice.reducer;