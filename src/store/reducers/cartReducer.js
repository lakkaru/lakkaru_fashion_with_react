import * as Actions from "../actions/cartAction";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_PRODUCT_TO_CART:
      let tempCart = [...state.cart];
      // console.log(tempCart);
      tempCart.push(action.payload);
      return { ...state, cart: tempCart };
    case Actions.DEL_PRODUCT_FROM_CART:
       let tempCart2 = [...state.cart];
      //  console.log(action.payload);
       const newCart=tempCart2.slice(0, action.payload).concat(tempCart2.slice(action.payload+1))
      // tempCart.push(action.payload);
      return { ...state, cart: newCart };

    default:
      return state;
  }
};
export default cartReducer;
