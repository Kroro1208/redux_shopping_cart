import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from './features/cart/CartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});