import React, { Component } from 'react';
import {MetaMask} from './MetaMask/MetaMask';
import {Counter} from './Counter';
import {Health} from './Health';
import Contract from './Contract';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      web3: null,
    };
    this.setWeb3 = this.setWeb3.bind(this);
  }

  setWeb3(web3) {
    this.setState({web3});
  }

  render() {
    return (
      <div className="App">
        <MetaMask {...this.state} setWeb3={this.setWeb3}/>
        <Counter {...this.props} />
        <Health {...this.props} />
        <Contract {...this.props} {...this.state} />
        <Button {...this.state}/>
      </div>
    );
  }
}

export default App;
