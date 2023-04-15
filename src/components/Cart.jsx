import { useContext, useEffect } from "react";
import { useState } from "react";
import { ACTIONS } from "../reducer/productReducer";
import numToCurrency from "../helper/numToCurrency";
import { productContext } from "../App";

const Cart = () => {
  const { dispatch, state } = useContext(productContext);

  const { cart } = state;
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) =>
    dispatch({
      type: ACTIONS.CHANGE_QTY,
      payload: {
        id: id,
        qty: qty,
      },
    });

  return (
    <div className="cart__container">
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div className="cart" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div className="qty">
              <button
                onClick={() => changeQty(prod.id, prod.qty - 1)}
                className="btn sucess"
              >
                -
              </button>
              <span>{prod.qty}</span>
              <button
                onClick={() => changeQty(prod.id, prod.qty + 1)}
                className="btn sucess"
              >
                +
              </button>
            </div>
            <div className="cart__details">
              <p>{prod.title}</p>
              <p className="price">{numToCurrency(prod.price)}</p>
              <button
                onClick={() => {
                  dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: prod });
                }}
                className="btn danger cart-btn"
              >
                X
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="empty">
          <span>Cart is Empty</span>
        </div>
      )}
      {cart.length > 0 ? (
        <div className="cart__total">
          Total:
          {numToCurrency(total)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Cart;
