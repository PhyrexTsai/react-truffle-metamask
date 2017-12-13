import * as types from '../constants/actionTypes';

export const simpleTokenNameAction = (web3) => ({
  type: types.SIMPLE_TOKEN_NAME,
  web3
});

export const simpleTokenSymbolAction = (web3) => ({
  type: types.SIMPLE_TOKEN_SYMBOL,
  web3
});
