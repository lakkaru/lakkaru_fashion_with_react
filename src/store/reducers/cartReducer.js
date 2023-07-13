import * as Actions from "../actions/cartAction";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_PRODUCT_TO_CART:
      let tempCart = [...state.cart];
      console.log(tempCart);
      tempCart.push(action.payload);
      console.log(tempCart);
      return { ...state, cart: tempCart };

    default:
      return state;
  }
};
export default cartReducer;
