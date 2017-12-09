import { combineReducers } from 'redux';
import count from './counterReducer';

const rootReducer = combineReducers({
  count
});
export default rootReducer;