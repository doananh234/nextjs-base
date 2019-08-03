import { combineReducers } from 'redux';
import placeholder from './placeholder/reducers';
import auth from './Auth/reducers';

export default combineReducers({
  placeholder,
  auth,
});
