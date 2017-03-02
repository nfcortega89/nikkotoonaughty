import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import FetchApi from './reducer_fetch_api';

const rootReducer = combineReducers({
  login: LoginReducer,
  data: FetchApi
});

export default rootReducer;
