import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, incrementQty, decrementQty } from "../slices/cartSlice";


function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h4 className="mt-3">🛒 Cart is empty</h4>;
  }

  return (
    <div className="mt-4">
      <h4 className="cartbtn">🛍 Shopping Cart</h4>
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.title}</strong> <br />
              ${item.price} x {item.quantity}
            </div>

            <div className="btn-group">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => dispatch(decrementQty(item.id))}
              >
                -
              </button>

              <button
                className="btn btn-sm btn-secondary"
                onClick={() => dispatch(incrementQty(item.id))}
              >
                +
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>

      <button
        className="btn btn-warning mt-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;