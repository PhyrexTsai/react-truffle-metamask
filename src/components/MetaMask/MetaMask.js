import React, {Component} from 'react';
import Web3 from 'web3';

const messages = {
  'LOAD_MATAMASK_WALLET_ERROR': 'Load metamask wallet error, maybe try Metamask later, or upload a wallet json file.',
  'EMPTY_METAMASK_ACCOUNT': 'You can choose one MetaMask wallet by unlocking it',
  'METAMASK_ACCOUNT': 'You have choosen the MetamMask Wallet: ',
  'NETWORK_ERROR': 'Network error, please check it.',
  'METAMASK_NOT_INSTALL': 'You must install MetaMask before start.',
};

export class MetaMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      networkId: null,
      account: null
    };
  }

  fetchWeb3() {
    let web3 = window.web3;
    if (typeof web3 === 'undefined') {
      this.props.setWeb3(null);
      this.setState({message: messages.METAMASK_NOT_INSTALL});
    }
  }

  fetchAccounts() {
    //const { web3 } = window;
    if (this.props.web3 !== null) {
      this.props.web3.eth.getAccounts((err, accounts) => {
        if (err) {
          this.setState({message: messages.LOAD_MATAMASK_WALLET_ERROR});
        } else {
          accounts.length === 0
            ? this.setState({account: null, message: messages.EMPTY_METAMASK_ACCOUNT})
            : this.setState({account: accounts[0], message: ''}); // defaultAccount as same as accounts[0]
        }
      });
    }
  }

  fetchNetwork() {
    //const { web3 } = window;
    if (this.props.web3 !== null) {
      this.props.web3.version.getNetwork((err, netId) => {
        if (err) {
          this.setState({ networkId: null, message: messages.NETWORK_ERROR });
        } else {
          this.setState({ networkId: netId})
        }
      });
    }
  }

  componentDidMount() {
    let self = this;
    window.addEventListener('load', function() {
      let web3 = window.web3;
      if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        self.fetchAccounts();
        self.fetchNetwork();
        self.props.setWeb3(window.web3);
        self.Web3Interval = setInterval(() => self.fetchWeb3(), 1000);
        self.AccountInterval = setInterval(() => self.fetchAccounts(), 1000);
        self.NetworkInterval = setInterval(() => self.fetchNetwork(),  1000);
      } else {
        self.setState({message: messages.METAMASK_NOT_INSTALL});
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.Web3Interval);
    clearInterval(this.AccountInterval);
    clearInterval(this.NetworkInterval);
  }

  // TODO Dialog show popup to detect Metamask

  render() {
    const message = this.state.message &&
      <p>Message: {this.state.message}</p>;

    const currentNetwork = this.state.networkId &&
      <p>Current Network: {this.state.networkId}</p>;

    const accountInfo = this.state.account &&
      <p>Address: {this.state.account}</p>;
    
    return (
      <div className="MetaMask">
        {message}
        {accountInfo}
        {currentNetwork}
      </div>
    );
  }
}
