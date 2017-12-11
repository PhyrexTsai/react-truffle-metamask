import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getHealthResult } from '../apis/api';

export function* getHealthResultSaga() {
  try {
    const healthResult = yield call(getHealthResult, null);
    
    yield put({ type: types.HEALTH_STATUS, result: healthResult.status });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
