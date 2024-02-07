import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons';

const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <article className='cart-item'>
            <img src={img} alt='' className='' />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>{price}円</h4>
                <button className='remove-btn'>削除</button>
            </div>
            <div>
                <button className='amount-btn'>
                    <PlusIcon />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn'>
                    <MinusIcon />
                </button>
            </div>
        </article>
    );
}

export default CartItem;