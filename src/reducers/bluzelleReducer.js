import initialState from './initialState';
import * as types from '../constants/actionTypes';

const create = (state, action) => {
  return {key: action.key, message: action.result.message};
}

const update = (state, action) => {
  return {key: action.key, message: action.result.message};
}

const remove = (state, action) => {
  return {key: action.key, message: action.result.message};
}

const read = (state, action) => {
  return {key: action.key, value: action.result};
}

const keys = (state, action) => {
  return {keys: action.result};
}

const has = (state, action) => {
  return {has: action.result};
}

export default function (bluzelle = initialState.simpleToken, action) {
  switch (action.type) {
    case types.BLUZELLE_CREATE_SUCCESS:
      return create(bluzelle, action);
    case types.BLUZELLE_UPDATE_SUCCESS:
      return update(bluzelle, action);
    case types.BLUZELLE_REMOVE_SUCCESS:
      return remove(bluzelle, action);
    case types.BLUZELLE_READ_SUCCESS:
      return read(bluzelle, action);
    case types.BLUZELLE_KEYS_SUCCESS:
      return keys(bluzelle, action);
    case types.BLUZELLE_HAS_SUCCESS:
      return has(bluzelle, action);
    default:
      return bluzelle;
  }
}