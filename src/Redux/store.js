import { configureStore } from "@reduxjs/toolkit";
import todoRducer from "./slices/todoSlice.js"

export const store = configureStore({
    reducer: {
        todo: todoRducer,
    }
});