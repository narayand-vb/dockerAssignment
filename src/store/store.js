import { createStore } from "redux";
import Cart from "../components/Cart";
import Data from "../Data";

const data = {
  inCart: 0,
  cart: [],
  products: Data,
};

console.log(data);

const incReducer = (state = data, action) => {
  switch (action.type) {
    case "cartInc": //Increment the number of cart and add the items in cart
      return {
        inCart: state.inCart + 1,
        products: Data,
        cart: [...state.cart, action.id],
      };
    case "cartDel": //Decrement the number of cart and delete the items from cart
      return {
        inCart: state.inCart - 1,
        products: Data,
        cart: state.cart.filter((arrElem, index) => index !== action.index),
      };
    default:
      return state;
  }
};

const store = createStore(incReducer);
export default store;
