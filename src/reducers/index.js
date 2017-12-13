import { combineReducers } from 'redux';
import count from './counterReducer';
import message from './messageReducer';
import isFetching from './fetchingReducer';
import health from './healthReducer';
import simpleToken from './simpleTokenReducer';

const appReducer = combineReducers({
  count,
  message,
  isFetching,
  health,
  simpleToken
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
