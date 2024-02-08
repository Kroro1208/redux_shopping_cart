import React from 'react'
import { MinusIcon, PlusIcon, DeleteIcon } from '../HeroIcons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/CartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt='' />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>{price}円</h4>
                <button className='amount-btn' onClick={() => dispatch(removeItem(id))}><DeleteIcon /></button>
            </div>
            <div className='amount-block'>
                <button className='amount-btn' onClick={() => dispatch(increase((id)))}>
                    <PlusIcon />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => dispatch(decrease(id))}>
                    <MinusIcon />
                </button>
            </div>
        </article>
    );
}

export default CartItem;