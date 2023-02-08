import { call, put, takeEvery } from 'redux-saga/effects';
import instance from '../../Services/apiConfig';
import { GET_STOCK_SUCCESS , ERROR , GET_STOCK } from './Stock.type';

function* stocksData(action){
    try {
        const res = yield call(instance.get,"/mockdata");
        yield put({
            type:GET_STOCK_SUCCESS,
            payload:res
        });
      } catch (error) {
        yield put({ 
            type:ERROR,
            payload:error
        });
      }
}

export default function* stockSaga(){
    yield takeEvery(GET_STOCK,stocksData);
}