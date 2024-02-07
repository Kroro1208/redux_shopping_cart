import React from 'react'
import { useSelector } from 'react-redux'

function CartContainer() {
    const { amount } = useSelector((state) => state.cart)
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
}

export default CartContainer