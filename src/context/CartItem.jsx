import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function CartItem({item}) {
    const { dispatch } = useContext(CartContext);
    console.log("item",item);
    
    return (
        <li className='cart-item'>

            <span>
                {item.name} - ₹{item.price} x {item.qty}
            </span>

            <button onClick={() => dispatch({
                type: "INCREASE", payload: item.id
            })}>
                ➕
            </button>
            <button onClick={() => dispatch({
                type: "DECREASE", payload: item.id
            })}>
                ➖
            </button>
            <button onClick={() => dispatch({
                type: "REMOVE_ITEM", payload: item.id
            })}>
                ❌
            </button>
            

        </li>
    );
}

export default CartItem
