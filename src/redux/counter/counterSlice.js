import { createSlice } from '@reduxjs/toolkit';

export const counterSlices = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {

    },
});

export default counterSlices.reducer;