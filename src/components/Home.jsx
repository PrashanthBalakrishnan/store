import { ACTIONS } from "../reducer/productReducer";
import numToCurrency from "../helper/numToCurrency";
import { useContext } from "react";
import { productContext } from "../App";

const Home = () => {
  const { dispatch, state } = useContext(productContext);

  const { products, cart } = state;
  return (
    <div className="product__container">
      {products.map((prod) => (
        <div className="product" key={prod.id}>
          <img src={prod.thumbnail} alt={prod.title} />
          <div className="product__info">
            <span>{prod.title}</span>
            <span>{numToCurrency(prod.price)}</span>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: prod });
              }}
              className="btn danger"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD_TO_CART,
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    price: prod.price,
                    qty: prod.qty,
                    thumbnail: prod.thumbnail,
                  },
                })
              }
              className="btn sucess"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
export default Home;
