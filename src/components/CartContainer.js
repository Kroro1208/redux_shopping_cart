import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartContainer() {
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
                    return <CartItem key={item.id} />;
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>現在の合計は<span>{total}円です</span></h4>
                    <button className='btn clear-btn'>全削除</button>
                </div>
            </footer>
        </section>
    )
}

export default CartContainer