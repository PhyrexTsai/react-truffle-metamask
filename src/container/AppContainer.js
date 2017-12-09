import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';

const  mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (num) => {
      dispatch(addAction(num));
    },
    handleSub: (num) => {
      dispatch(subAction(num));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);