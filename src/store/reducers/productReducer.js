import * as Actions from "../actions/productAction";
const initialState = {
  productDataLoadingStatus: "notStarted",
  productList: [],
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
      };
    case Actions.FETCH_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        productDataLoadingStatus: "failure",
        productList:[],
      };
      case Actions.ASSIGN_UPDATED_PRODUCT_LIST:
        
      return {...state,
        productList:[...action.payload]}

    default:
      return state;
  }
};
export default productReducer;
