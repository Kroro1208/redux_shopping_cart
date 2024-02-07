import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart', // このname, initialState,reducersは決まっている
    initialState,
    reducers: {}
});

export default cartSlice.reducer;
// .reducerはcreateSlice()の値を元に生成されるreduce関数のこと。reducers:{}のことではないので注意