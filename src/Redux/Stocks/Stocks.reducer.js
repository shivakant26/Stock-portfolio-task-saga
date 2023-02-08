import { GET_STOCK_SUCCESS } from "./Stock.type";


const initialState = {
    stockData: []
}


const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STOCK_SUCCESS:
            return {
                ...state,
                stockData: action.payload
            }
        default:
            return state
    }
}

export default stockReducer;