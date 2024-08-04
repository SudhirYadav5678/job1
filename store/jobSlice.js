import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJob: [],
    signleJob: null
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setAllJob: ((state, action) => {
            state.allJob = action.payload
        }),
        setSingleJob: ((state, action) => {
            state.signleJob = action.payload
        })


    }
})

export const { setAllJob, setSingleJob } = jobSlice.reducer
export default jobSlice;