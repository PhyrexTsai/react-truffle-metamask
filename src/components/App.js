import React, { Component } from 'react';
import {MetaMask} from './MetaMask/MetaMask';
import {Counter} from './Counter';
import {Health} from './Health';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  // TODO Dialog show popup to detect Metamask

  render() {
    return (
      <div className="App">
        <MetaMask/>
        <Counter {...this.props} />
        <Health {...this.props} />
      </div>
    );
  }
}

export default App;
