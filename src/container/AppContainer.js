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

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  error: state.error,
  health: state.health,
  simpleToken: state.simpleToken,
  warning: state.warning
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);