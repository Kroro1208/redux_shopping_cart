import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart', // このname, initialState,reducersは決まっている
    initialState,
    reducers: {}
});

export default cartSlice.reducer; // reducersではないので注意