import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResultSaga } from './healthSaga';
import {
  getSimpleTokenNameResultSaga,
  getSimpleTokenSymbolResultSaga,
  getSimpleTokenDecimalsResultSaga,
} from './simpleTokenSaga';

export function* watchHealth() {
  yield takeLatest(types.HEALTH, getHealthResultSaga);
}

export function* watchSimpleTokenName() {
  yield takeLatest(types.SIMPLE_TOKEN_NAME, getSimpleTokenNameResultSaga);
}

export function* watchSimpleTokenSymbol() {
  yield takeLatest(types.SIMPLE_TOKEN_SYMBOL, getSimpleTokenSymbolResultSaga);
}

export function* watchSimpleTokenDecimals() {
  yield takeLatest(types.SIMPLE_TOKEN_DECIMALS, getSimpleTokenDecimalsResultSaga);
}
