import * as types from '../constants/actionTypes';

export const bluzelleCreateAction = (key, value) => ({
  type: types.BLUZELLE_CREATE,
  key, 
  value
});

export const bluzelleUpdateAction = (key, value) => ({
  type: types.BLUZELLE_UPDATE,
  key,
  value
});

export const bluzelleRemoveAction = (key) => ({
  type: types.BLUZELLE_REMOVE,
  key
});

export const bluzelleReadAction = (key) => ({
  type: types.BLUZELLE_READ,
  key
});

export const bluzelleKeysAction = () => ({
  type: types.BLUZELLE_REMOVE
});

export const bluzelleHasActions = (key) => ({
  type: types.BLUZELLE_HAS,
  key
})