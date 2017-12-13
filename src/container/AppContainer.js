import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import { healthAction } from '../actions/healthActions';
import { 
  simpleTokenNameAction 
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
    handleSimpleTokenName: (web3) => {
      dispatch(simpleTokenNameAction(web3));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);