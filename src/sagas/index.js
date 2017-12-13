import { fork, all } from 'redux-saga/effects';
import { 
  watchHealth,
  watchSimpleTokenName
} from './watcher';

export default function* startForman() {
  yield all([
    fork(watchHealth),
    fork(watchSimpleTokenName)
  ]);
};
