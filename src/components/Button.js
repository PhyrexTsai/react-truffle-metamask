import React, { Component } from 'react';
import { 
  getCurrentAddress,
  getCurrentNetwork,
} from '../lib/web3Service';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let self = this;
    this.props.web3.eth.sendTransaction({
      from: this.props.web3.eth.accounts[0], 
      to: this.props.web3.eth.accounts[0],
      value: this.props.web3.toWei(1, 'ether'),
      data: 'dead' }, function(err, result) {
        if (err) {
          self.props.handleWarningOpen(err.message);
        } else {
          self.props.handleWarningOpen(result);
        }
      });
  }

  render() {
    const address = getCurrentAddress(this.props.web3);
    const network = getCurrentNetwork(this.props.web3);
    return (
      <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
        <h1>Send Transaction</h1>
        <div>To: {address}</div>
        <div>Network: {network}</div>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Button;