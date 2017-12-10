import initialState from './initialState';
import * as types from '../constants/actionTypes';

const systemError = (state, action) => {
  return {message: action.error};
}

export default function (message = initialState.message, action) {
  switch (action.type) {
    case types.SYSTEM_ERROR:
      return systemError(message, action);
    default:
      return message;
  }
}