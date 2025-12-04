import React, { useReducer } from 'react'
import shoppingReducer from './shoppingReducer';


export default function ShoppingCart() {
    const [cart, dispatch] = useReducer(shoppingReducer, []);
    return (
        <div>
            <h2 className='title'>Shopping cart</h2>
            <button className='btn' onClick={() => dispatch({ type: "ADD_ITEM", payload: "Apple" })}>
                Add Apple
            </button>

            <button className='btn' onClick={() => dispatch({ type: "ADD_ITEM", payload: "Orange" })}>
                Add Orange
            </button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className='cart-item'>
                        {item.name}(<span className='qty'>X</span>{item.qty})
                        <button className='btn' onClick={() => dispatch({
                            type:
                                "INCREASE", payload: item.id
                        })}>
                            ➕
                        </button>
                        <button className='btn' onClick={() => dispatch({
                            type:
                                "DECREASE", payload: item.id
                        })}>
                            ➖
                        </button>
                        <button className='btn' onClick={() => dispatch({
                            type:
                                "REMOVE_ITEM", payload: item.id
                        })}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

