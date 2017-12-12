import SimpleToken from './SimpleToken.json';

const setWeb3Provider = (web3) => {
  const contract = require('truffle-contract');
  const simpleToken = contract(SimpleToken);
  if (web3 !== null) {
    simpleToken.setProvider(web3.currentProvider);
  }
}

export const contractJSON = (web3) => {
  if (web3 === null) return;
  console.log(web3);
  setWeb3Provider(web3);
  return web3.eth.accounts[0];
}
