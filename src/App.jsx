import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ACTIONS, productReducer } from "./reducer/productReducer";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const productContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
  });

  const fetchdata = async (url) => {
    const { data } = await axios.get(url);
    dispatch({
      type: ACTIONS.ADD_PRODUCTS,
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchdata("https://dummyjson.com/products");
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <productContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </productContext.Provider>
  );
};
export default App;
