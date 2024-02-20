'use client'
import { configureStore } from "@reduxjs/toolkit";
import themeSwitchSlice from "./features/themeSwitchSlice/themeSwitchSlice";

const Store= configureStore({
    reducer:{
        themeSwitcher: themeSwitchSlice
    }
})

export default Store;