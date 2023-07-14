import * as Actions from "../actions/productAction";
const initialState = {
  productDataLoadingStatus: "notStarted",
  productList: [],
  displayProductList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_PRODUCT_DATA_BEGIN:
      return { ...state, productDataLoadingStatus: "loading" };
    case Actions.FETCH_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        productDataLoadingStatus: "completed",
        productList: action.payload,
        displayProductList: action.payload,
      };
    case Actions.FETCH_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        productDataLoadingStatus: "failure",
        productList: [],
        displayProductList: [],
      };
    case Actions.ASSIGN_UPDATED_PRODUCT_LIST:
      return { ...state, displayProductList: [...action.payload] };

    default:
      return state;
  }
};
export default productReducer;
