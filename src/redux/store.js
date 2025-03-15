import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

// this is store
const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store;