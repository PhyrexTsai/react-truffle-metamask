import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';

class Contract extends Component {
  // 將 read contract method 透過 redux 儲存與 saga 非同步呼叫，將 web3 當成 API 使用
  render() {
    const name = this.props.simpleToken && <p>{this.props.simpleToken.name}</p>;
    const symbol = this.props.simpleToken && <p>{this.props.simpleToken.symbol}</p>;
    const decimals = this.props.simpleToken && <p>{this.props.simpleToken.decimals}</p>;
    const progress = this.props.isFetching && <LinearProgress />
    return (
      <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
        <h1>Contract</h1>
        <div>{progress}</div>
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