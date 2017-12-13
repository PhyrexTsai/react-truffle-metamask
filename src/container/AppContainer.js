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

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  message: state.message,
  health: state.health,
  simpleToken: state.simpleToken,
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);