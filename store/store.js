import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";

const store = configureStore({
    reducer: {
        //slices
        auth: authSlice
    }
})

export default store;