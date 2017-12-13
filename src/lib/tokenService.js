import SimpleToken from './SimpleToken.json';

const contract = require('truffle-contract');
const simpleToken = contract(SimpleToken);

const setWeb3Provider = (web3) => {
  if (web3 !== null) {
    simpleToken.setProvider(web3.currentProvider);
  }
}

export const contractJSON = (web3) => {
  if (web3 === null) return;
  setWeb3Provider(web3);
  /*var simpleTokenInstance;
  simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a').then(function(instance) {
    simpleTokenInstance = instance;
    return simpleTokenInstance.decimals.call();
  }).then(function(result) {
    console.log('result: ', result.toNumber());
    return simpleTokenInstance.name.call();
  }).then(function(result) {
    console.log('result: ', result);
  })*/
  const _name = name();
  console.log(_name);
}

export const getName = (web3) => {
  setWeb3Provider(web3);
  return 'text';
}

const name = async (web3) => {
  try {
    const instance = await simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a');
    const name = await instance.name.call();
    return name;
  } catch(e) {
    console.log(e);
  }
}

const decimals = async () => {
  try {
    const instance = await simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a');
    const decimals = await instance.decimals.call();
    return decimals.toNumber();
  } catch(e) {
    console.log(e);
  }
}

const symbol = async () => {
  try {
    const instance = await simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a');
    const symbol = await instance.symbol.call();
    return symbol.toNumber();
  } catch(e) {
    console.log(e);
  }
}