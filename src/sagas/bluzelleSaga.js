import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  create,
  update,
  remove,
  read,
  keys,
  has
} from '../lib/bluzelle';

export function* bluzelleCreateSaga({key, value}) {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleCreateResult = yield call(create, key, value);
    yield put({ type: types.FETCH_COMPLETE});
    
    yield put({ type: types.BLUZELLE_CREATE_SUCCESS, result: bluzelleCreateResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* bluzelleUpdateSaga({key, value}) {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleUpdateResult = yield call(update, key, value);
    yield put({ type: types.FETCH_COMPLETE});
    
    yield put({ type: types.BLUZELLE_UPDATE_SUCCESS, result: bluzelleUpdateResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* bluzelleRemoveSaga({key}) {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleRemoveResult = yield call(remove, key);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.BLUZELLE_REMOVE_SUCCESS, result: bluzelleRemoveResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* bluzelleReadSaga({key}) {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleReadResult = yield call(read, key);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.BLUZELLE_READ_SUCCESS, result: bluzelleReadResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* bluzelleKeysSaga() {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleKeysResult = yield call(keys);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.BLUZELLE_KEYS_SUCCESS, result: bluzelleKeysResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};

export function* bluzelleHasSaga({key}) {
  try {
    yield put({ type: types.FETCHING}); 
    const bluzelleHasResult = yield call(has, key);
    yield put({ type: types.FETCH_COMPLETE});

    yield put({ type: types.BLUZELLE_HAS_SUCCESS, result: bluzelleHasResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
}
