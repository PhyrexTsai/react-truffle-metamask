import React, { Component } from 'react';
import { getCurrentAddress } from '../lib/web3Service';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.web3.eth.sendTransaction({
      from: this.props.web3.eth.accounts[0], 
      to: this.props.web3.eth.accounts[0],
      value: this.props.web3.toWei(1, 'ether') }, function(err, result) {
        console.log('err:', err);
        console.log('result:', result);
      });
  }

  render() {
    const address = getCurrentAddress(this.props.web3);
    return (
      <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
        <h1>Send Transaction</h1>
        <div>To: {address}</div>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Button;