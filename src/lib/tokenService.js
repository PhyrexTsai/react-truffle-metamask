import SimpleToken from '../../build/contracts/SimpleToken.json';

const contract = require('truffle-contract');
const simpleToken = contract(SimpleToken);

export const contractJSON = () => {
  return simpleToken;
}
