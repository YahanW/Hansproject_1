import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false
    },
    reducers: {
        change: (state) => {
            state.value = !state.value;
            // console.log(state.value);
        }
    }
})

// Action creators are generated for each case reducer function
export const { change } = counterSlice.actions

export default counterSlice.reducer