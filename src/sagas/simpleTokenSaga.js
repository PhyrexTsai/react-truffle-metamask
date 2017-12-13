import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getName } from '../lib/tokenService';

export function* getSimpleTokenNameResultSaga() {
  try {
    console.log('getSimpleTokenNameResultSaga');
    const simpleTokenNameResult = yield call(getName, null);
    console.log(simpleTokenNameResult);
    
    yield put({ type: types.SIMPLE_TOKEN_NAME_SUCCESS, result: simpleTokenNameResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
