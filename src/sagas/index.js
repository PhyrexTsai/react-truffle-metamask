import { fork, all } from 'redux-saga/effects';
import { watchHealth } from './watcher';

export default function* startForman() {
  yield all([
    fork(watchHealth)
  ]);
};
