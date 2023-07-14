export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DEL_PRODUCT_FROM_CART = "DEL_PRODUCT_FROM_CART";

export const addProductToCart = (cartProduct) => {
  return { type: ADD_PRODUCT_TO_CART, payload: cartProduct };
};

export const delProductFromCart=(cartIndex)=>{
  return { type: DEL_PRODUCT_FROM_CART, payload: cartIndex};
};