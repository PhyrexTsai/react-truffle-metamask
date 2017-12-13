import initialState from './initialState';
import * as types from '../constants/actionTypes';

const fetchName = (state, action) => {
  return {name: action.result};
}

const fetchSymbol = (state, action) => {
  return {symbol: action.result};
}

const fetchDecimals = (state, action) => {
  return {decimals: action.result};
}

export default function (simpleToken = initialState.simpleToken, action) {
  switch (action.type) {
    case types.SIMPLE_TOKEN_NAME_SUCCESS:
      return fetchName(simpleToken, action);
    case types.SIMPLE_TOKEN_SYMBOL_SUCCESS:
      return fetchSymbol(simpleToken, action);
    case types.SIMPLE_TOKEN_DECIMALS_SUCCESS:
      return fetchDecimals(simpleToken, action);
    default:
      return simpleToken;
  }
}


