export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const addProductToCart = (cartProduct) => {
  return { type: ADD_PRODUCT_TO_CART, payload: cartProduct };
};
