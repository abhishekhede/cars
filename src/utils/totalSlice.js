import { createSlice } from "@reduxjs/toolkit";


const totalSlice = createSlice({
    name: 'total',
    initialState: {
        total: 0
    },
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload;
        },
    },
})

export const { setTotal } = totalSlice.actions;
export default totalSlice.reducer;