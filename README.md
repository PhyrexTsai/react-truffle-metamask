# React-truffle-metamask

This project is design to connect to Ethereum blockchain and interact with MetaMask to send transaction on smart contract.  

### Technical stack

#### Frontend
- React
- Redux
- Saga
- Web3(MetaMask)

#### UI
- Sass
- Material-UI

#### Smart contract/Solidity
- Truffle

### Install flow

#### Clone repo

```
git clone https://github.com/PhyrexTsai/react-truffle-metamask
cd react-truffle-metamask
```

#### Install testrpc

```
npm install -g ethereumjs-testrpc
```

#### Install truffle

```
npm install -g truffle
```

#### Build repo

```
yarn install
truffle compile
```

#### Start repo

Open a new console
```
testrpc
```

```
truffle migrate
yarn start
```
