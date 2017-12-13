import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchName = (state, action) => {
  return {name: action};
}

export default function (simpleToken = initialState.simpleToken, action) {
  console.log('simpleTokenReducer', action);
  switch (action.type) {
    case types.SIMPLE_TOKEN_NAME_SUCCESS:
      return fetchName(simpleToken, action);
    default:
      return simpleToken;
  }
}
