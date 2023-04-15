export const ACTIONS = {
  ADD_PRODUCTS: "add_products",
  ADD_TO_CART: "add_to_cart",
  REMOVE_FROM_CART: "remove_from_cart",
  CHANGE_QTY: "change_qty",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case ACTIONS.ADD_TO_CART:
      return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case ACTIONS.CHANGE_QTY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
