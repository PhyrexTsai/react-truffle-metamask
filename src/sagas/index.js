import { fork, all } from 'redux-saga/effects';
import { 
  watchHealth,
  watchSimpleTokenName,
  watchSimpleTokenSymbol,
  watchSimpleTokenDecimals,
  watchBluzelleCreate,
  watchBluzelleUpdate,
  watchBluzelleRemove,
  watchBluzelleRead,
  watchBluzelleKeys,
  watchBluzelleHas,
} from './watcher';

export default function* startForman() {
  yield all([
    fork(watchHealth),
    fork(watchSimpleTokenName),
    fork(watchSimpleTokenSymbol),
    fork(watchSimpleTokenDecimals),
    fork(watchBluzelleCreate),
    fork(watchBluzelleUpdate),
    fork(watchBluzelleRemove),
    fork(watchBluzelleRead),
    fork(watchBluzelleKeys),
    fork(watchBluzelleHas)
  ]);
};
