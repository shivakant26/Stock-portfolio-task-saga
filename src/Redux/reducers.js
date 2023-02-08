import { combineReducers } from "redux";
import stockReducer from "./Stocks/Stocks.reducer";

const rootReducer = combineReducers ({
    stock: stockReducer
});
export default rootReducer;
