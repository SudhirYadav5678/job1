import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null  // getting res after login as api res.
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setUser: (state, action) => {
            state.user = action.payload;
        },

    }
})

export default authSlice.reducer;
export const { setLoading, setUser } = authSlice.actions;