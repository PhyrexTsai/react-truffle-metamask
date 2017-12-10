import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResultSaga } from './healthSaga';

export function* watchHealth() {
  yield takeLatest(types.HEALTH, getHealthResultSaga);
}
