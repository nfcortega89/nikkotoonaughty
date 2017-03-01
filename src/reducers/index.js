import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import GetApi from './reducer_getapi';

const rootReducer = combineReducers({
  login: LoginReducer,
  data: GetApi
});

export default rootReducer;
