import React, {Component} from 'react';
import Web3 from 'web3';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const messages = {
  'LOAD_MATAMASK_WALLET_ERROR': 'Load metamask wallet error, maybe try Metamask later, or upload a wallet json file.',
  'EMPTY_METAMASK_ACCOUNT': 'You can choose one MetaMask wallet by unlocking it',
  'METAMASK_ACCOUNT': 'You have choosen the MetamMask Wallet: ',
  'NETWORK_ERROR': 'Network error, please check it.',
  'METAMASK_NOT_INSTALL': 'You must install MetaMask before start.',
};

const MetaMaskInstallDialog = (props) => (
  <Dialog
    className="MetaMaskDialog"
    open={props.metaMaskInstallDialogOpen}
    transition={Slide}>
    <IconButton
      color="primary"
      onClick={props.handleMetaMaskInstallDialogClose}
      aria-label="Close">
      <CloseIcon/>
    </IconButton>
    <DialogTitle>{"Oops, you haven't install MetaMask"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {"You’ll need a safe place to store all of your adorable THIS PROJECT! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed)."}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleMetaMaskInstallDialogClose} color="primary">
        Install MetaMask
      </Button>
      <Button onClick={props.handleMetaMaskInstallDialogClose} color="primary">
        I understand, continue
      </Button>
    </DialogActions>
  </Dialog>
);

const MetaMaskLockDialog = (props) => (
  <Dialog
    className="MetaMaskDialog"
    open={props.metaMaskLockDialogOpen}
    transition={Slide}>
    <IconButton
      color="primary"
      onClick={props.handleMetaMaskLockDialogClose}
      aria-label="Close">
      <CloseIcon/>
    </IconButton>
    <DialogTitle>{"Oops, your MetaMask is locked"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {"You should unlock MetaMask to interact with this application."}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleMetaMaskLockDialogClose} color="primary">
        I understand, continue
      </Button>
    </DialogActions>
  </Dialog>
);

export class MetaMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      networkId: null,
      account: null,
      metaMaskInstallDialogOpen: false,
      metaMaskLockDialogOpen: false,
      disableDialog: false
    };
    this.handleMetaMaskInstallDialogClose = this.handleMetaMaskInstallDialogClose.bind(this);
    this.handleMetaMaskLockDialogClose = this.handleMetaMaskLockDialogClose.bind(this);
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
          if (accounts.length === 0) {
            this.props.handleMetaMaskAccount(null);
            this.setState({metaMaskLockDialogOpen: true, account: null, message: messages.EMPTY_METAMASK_ACCOUNT})
          } else {
            // if account changed then change redux state
            if (accounts[0] !== this.props.metaMask.account) {
              this.props.handleMetaMaskAccount(accounts[0]);
            }
            this.setState({account: accounts[0], message: ''}); // defaultAccount as same as accounts[0]
          }
        }
      });
    }
  }

  fetchNetwork() {
    //const { web3 } = window;
    if (this.props.web3 !== null) {
      this.props.web3.version.getNetwork((err, netId) => {
        if (err) {
          this.props.handleMetaMaskNetwork(null);
          this.setState({metaMaskLockDialogOpen: true, networkId: null, message: messages.NETWORK_ERROR });
        } else {
          // if network changed then change redux state
          if (netId !== this.props.metaMask.network) {
            this.props.handleMetaMaskNetwork(netId);
          }
          this.setState({networkId: netId});
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
        self.props.setWeb3(window.web3);
        self.fetchAccounts();
        self.fetchNetwork();
        self.Web3Interval = setInterval(() => self.fetchWeb3(), 1000);
        self.AccountInterval = setInterval(() => self.fetchAccounts(), 1000);
        self.NetworkInterval = setInterval(() => self.fetchNetwork(),  1000);
      } else {
        self.setState({metaMaskInstallDialogOpen: true, message: messages.METAMASK_NOT_INSTALL});
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.Web3Interval);
    clearInterval(this.AccountInterval);
    clearInterval(this.NetworkInterval);
  }

  handleMetaMaskInstallDialogClose() {
    this.setState({metaMaskInstallDialogOpen: false, disableDialog: true});
  }

  handleMetaMaskLockDialogClose() {
    this.setState({metaMaskLockDialogOpen: false, disableDialog: true});
  }

  render() {
    const message = this.state.message &&
      <p>Message: {this.state.message}</p>;

    const currentNetwork = this.props.metaMask.network &&
      <p>Current Network: {this.props.metaMask.network}</p>;

    const accountInfo = this.props.metaMask.account &&
      <p>Address: {this.props.metaMask.account}</p>;

    const metaMaskInstall = this.state.disableDialog === false &&
      <MetaMaskInstallDialog 
        {...this.state}
        handleMetaMaskInstallDialogClose={this.handleMetaMaskInstallDialogClose}
      />;

    const metaMaskLock = this.state.disableDialog === false && 
      <MetaMaskLockDialog 
        {...this.state}
        handleMetaMaskLockDialogClose={this.handleMetaMaskLockDialogClose}
      />

    return (
      <div className="MetaMask">
        {accountInfo}
        {currentNetwork}
        {metaMaskInstall}
        {metaMaskLock}
      </div>
    );
  }
}
