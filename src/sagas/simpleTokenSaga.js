import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  getName, 
  getSymbol,
  getDecimals 
} from '../lib/tokenService';

export function* getSimpleTokenNameResultSaga({networkId}) {
  try {
    const simpleTokenNameResult = yield call(getName, networkId);
    
    yield put({ type: types.SIMPLE_TOKEN_NAME_SUCCESS, result: simpleTokenNameResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* getSimpleTokenSymbolResultSaga({networkId}) {
  try {
    const simpleTokenSymbolResult = yield call(getSymbol, networkId);
    
    yield put({ type: types.SIMPLE_TOKEN_NAME_SUCCESS, result: simpleTokenSymbolResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* getSimpleTokenDecimalsResultSaga({networkId}) {
  try {
    const simpleTokenDecimalsResult = yield call(getDecimals, networkId);
    const decimal = simpleTokenDecimalsResult.toNumber();
    console.log('decimal', decimal);
    yield put({ type: types.SIMPLE_TOKEN_NAME_SUCCESS, result: decimal });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
