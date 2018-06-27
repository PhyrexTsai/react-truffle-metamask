import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import { healthAction } from '../actions/healthActions';
import { 
  simpleTokenNameAction, 
  simpleTokenSymbolAction,
  simpleTokenDecimalsAction,
} from '../actions/simpleTokenActions';
import { 
  warningOpenAction,
  warningCloseAction
} from '../actions/warningActions';
import {
  metaMaskAccountAction,
  metaMaskNetworkAction
} from '../actions/metaMaskActions';
import { 
  bluzelleCreateAction, 
  bluzelleUpdateAction, 
  bluzelleRemoveAction, 
  bluzelleReadAction, 
  bluzelleKeysAction, 
  bluzelleHasActions
} from '../actions/bluzelleActions';

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  error: state.error,
  health: state.health,
  simpleToken: state.simpleToken,
  warning: state.warning,
  metaMask: state.metaMask
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (num) => {
      dispatch(addAction(num));
    },
    handleSub: (num) => {
      dispatch(subAction(num));
    },
    handleHealth: () => {
      dispatch(healthAction());
    },
    handleSimpleTokenName: (networkId) => {
      dispatch(simpleTokenNameAction(networkId));
    },
    handleSimpleTokenSymbol: (networkId) => {
      dispatch(simpleTokenSymbolAction(networkId));
    },
    handleSimpleTokenDecimals: (networkId) => {
      dispatch(simpleTokenDecimalsAction(networkId));
    },
    handleWarningOpen: (message) => {
      dispatch(warningOpenAction(message));
    },
    handleWarningClose: () => {
      dispatch(warningCloseAction());
    },
    handleMetaMaskAccount: (account) => {
      dispatch(metaMaskAccountAction(account));
    },
    handleMetaMaskNetwork: (network) => {
      dispatch(metaMaskNetworkAction(network));
    },
    handleBluzelleCreate: (key, value) => {
      dispatch(bluzelleCreateAction(key, value));
    },
    handleBluzelleUpdate: (key, value) => {
      dispatch(bluzelleUpdateAction(key, value));
    },
    handleBluzelleRemove: (key) => {
      dispatch(bluzelleRemoveAction(key));
    },
    handleBluzelleRead: (key) => {
      dispatch(bluzelleReadAction(key));
    },
    handleBluzelleKeys: () => {
      dispatch(bluzelleKeysAction());
    },
    handleBluzelleHas: (key) => {
      dispatch(bluzelleHasActions(key));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);