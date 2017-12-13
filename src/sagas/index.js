import { fork, all } from 'redux-saga/effects';
import { 
  watchHealth,
  watchSimpleTokenName,
  watchSimpleTokenSymbol,
  watchSimpleTokenDecimals,
} from './watcher';

export default function* startForman() {
  yield all([
    fork(watchHealth),
    fork(watchSimpleTokenName),
    fork(watchSimpleTokenSymbol),
    fork(watchSimpleTokenDecimals)
  ]);
};
