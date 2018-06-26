import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResultSaga } from './healthSaga';
import {
  getSimpleTokenNameResultSaga,
  getSimpleTokenSymbolResultSaga,
  getSimpleTokenDecimalsResultSaga,
} from './simpleTokenSaga';
import { 
  bluzelleCreateSaga, 
  bluzelleUpdateSaga, 
  bluzelleRemoveSaga, 
  bluzelleReadSaga, 
  bluzelleKeysSaga 
} from './bluzelleSaga';

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

export function* watchBluzelleCreate() {
  yield takeLatest(types.BLUZELLE_CREATE, bluzelleCreateSaga);
}

export function* watchBluzelleUpdate() {
  yield takeLatest(types.BLUZELLE_UPDATE, bluzelleUpdateSaga);
}

export function* watchBluzelleRemove() {
  yield takeLatest(types.BLUZELLE_REMOVE, bluzelleRemoveSaga);
}

export function* watchBluzelleRead() {
  yield takeLatest(types.BLUZELLE_READ, bluzelleReadSaga);
}

export function* watchBluzelleKeys() {
  yield takeLatest(types.BLUZELLE_KEYS, bluzelleKeysSaga);
}
