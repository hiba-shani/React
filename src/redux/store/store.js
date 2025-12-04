import { createSlice, configureStore } from "@reduxjs/toolkit";
//slice creation
const counterSlice = createSlice({
    name: 'counter',
    initialState:  0 ,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state- 1,
        reset: () => 0,
    }
})

//action export
export const { increment, decrement, reset } = counterSlice.actions;

//store creation
export const store = configureStore({
    reducer: {counter:counterSlice.reducer},
});