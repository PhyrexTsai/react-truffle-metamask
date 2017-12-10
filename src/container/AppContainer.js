import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import {
  healthAction
} from '../actions/healthActions';

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  message: state.message,
  health: state.health
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);