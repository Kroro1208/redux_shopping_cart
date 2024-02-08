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
        clearCart: (state) => {
            return { cartItems: [], amount: 0, total: 0 };
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
            console.log(action.payload);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item => item.id === action.payload));
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item => item.id === action.payload));
            if (cartItem.amount > 0) {
                cartItem.amount = cartItem.amount - 1;
            }; // 0以下にならないように設定
        },
    }
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
// .reducerはcreateSlice()の値を元に生成されるreduce関数のこと。reducers:{}のことではないので注意