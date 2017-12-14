import { combineReducers } from 'redux';
import count from './counterReducer';
import system from './systemReducer';
import isFetching from './fetchingReducer';
import health from './healthReducer';
import simpleToken from './simpleTokenReducer';
import warning from './warningReducer';

const appReducer = combineReducers({
  count,
  system,
  isFetching,
  health,
  simpleToken,
  warning
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
