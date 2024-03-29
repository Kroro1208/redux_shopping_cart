import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/CartSlice';
import { openModal } from '../features/modal/ModalSlice';

function CartContainer() {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((state) => state.cart)
    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>買い物かご</h2>
                    <h4 className='empty-cart'>買い物かごは空です</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>小計{amount}個の商品 (税込) :<span>{total}円です</span></h4>
                    <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全ての商品の選択解除</button>
                </div>
            </footer>
        </section>
    )
}

export default CartContainer