import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResultSaga } from './healthSaga';
import {
  getSimpleTokenNameResultSaga
} from './simpleTokenSaga';

export function* watchHealth() {
  yield takeLatest(types.HEALTH, getHealthResultSaga);
}

export function* watchSimpleTokenName() {
  console.log('watchSimpleTokenName');
  yield takeLatest(types.SIMPLE_TOKEN_NAME, getSimpleTokenNameResultSaga);
}
