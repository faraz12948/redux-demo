import { combineReducers } from "redux";
import { productReducers } from "./productReducer";

const reducer = combineReducers({
    allProducts : productReducers,
});
export default reducer;
