import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../HeroIcons';

function NavBar() {
    const { amount } = useSelector((store) => store.cart);

    return (
        <nav className='nav-center'>
            <h3>Shopping Cart</h3>
            <duv className="nav-container">
                <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </duv>
        </nav>
    )
}

export default NavBar