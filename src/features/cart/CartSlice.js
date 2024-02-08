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
    reducers: { // reducerでどういう処理をしたいかを実装する
        clearCart: (state) => { // immerの不変性により下記のように記載できる
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },

        increase: (state, action) => {
            const cartItem = state.cartItems.find((item => item.id === action.payload));
            if (cartItem) {
                cartItem.amount += 1;
            }
        },

        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item => item.id === action.payload));
            if (cartItem && cartItem.amount > 1) {
                cartItem.amount -= 1;
            } // 0以下にならないように設定
        },

        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
// .reducerはcreateSlice()の値を元に生成されるreduce関数のこと。reducers:{}のことではないので注意