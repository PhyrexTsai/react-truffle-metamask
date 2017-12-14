import React, { Component } from 'react';
import SimpleToken from '../lib/SimpleToken.json';

const contract = require('truffle-contract');
const simpleToken = contract(SimpleToken);

class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      symbol: '',
      decimals: 0
    };
    this.handleName = this.handleName.bind(this);
    this.handleDecimals = this.handleDecimals.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
  }

  handleName() {
    let self = this;
    simpleToken.setProvider(this.props.web3.currentProvider);
    var simpleTokenInstance;
    simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a').then(function(instance) {
      simpleTokenInstance = instance;
      return simpleTokenInstance.name.call();
    }).then(function(result) {
      self.setState({name: result});
    }).catch(function(err) {
      console.log('err: ', err);
    })
  }

  handleDecimals() {
    let self = this;
    simpleToken.setProvider(this.props.web3.currentProvider);
    var simpleTokenInstance;
    simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a').then(function(instance) {
      simpleTokenInstance = instance;
      return simpleTokenInstance.decimals.call();
    }).then(function(result) {
      self.setState({decimals: result.toNumber()});
    }).catch(function(err) {
      console.log('err: ', err);
    })
  }

  handleSymbol() {
    let self = this;
    simpleToken.setProvider(this.props.web3.currentProvider);
    var simpleTokenInstance;
    simpleToken.at('0x131855dda0aaff096f6854854c55a4debf61077a').then(function(instance) {
      simpleTokenInstance = instance;
      return simpleTokenInstance.symbol.call();
    }).then(function(result) {
      self.setState({symbol: result});
    }).catch(function(err) {
      console.log('err: ', err);
    })
  }

  // 將 read contract method 透過 redux 儲存與 saga 非同步呼叫，將 web3 當成 API 使用
  render() {
    const name = this.props.simpleToken && <p>{this.props.simpleToken.name}</p>;
    const symbol = this.props.simpleToken && <p>{this.props.simpleToken.symbol}</p>;
    const decimals = this.props.simpleToken && <p>{this.props.simpleToken.decimals}</p>;
    return (
      <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
        <h1>Contract</h1>
        <button onClick={() => this.props.handleSimpleTokenName(this.props.web3.version.network)}>Name</button>
        <button onClick={() => this.props.handleSimpleTokenSymbol(this.props.web3.version.network)}>Symbol</button>
        <button onClick={() => this.props.handleSimpleTokenDecimals(this.props.web3.version.network)}>Decimals</button>
        <div>
          {name}
          {symbol}
          {decimals}
        </div>
      </div>
    );
  }
}

export default Contract;