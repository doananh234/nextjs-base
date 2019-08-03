import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/redux';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  isAuth: false,
  drawerVisible: false,
});

const setAuth = (state, { status }) =>
  state.merge({
    isAuth: status,
  });

/**
 * Email Sign Reducers
 * @param {*} state
 */
const signInSuccess = state => state.merge({ isAuth: true });

/**
 * Facebook Sign Reducers
 * @param {*} state
 */
const fbSignInSuccess = state => state.merge({ isAuth: true });

/**
 * Google Sign Reducers
 * @param {*} state
 */
const googleSignInSuccess = state => state.merge({ isAuth: true });

const signOut = state => state.merge({ isAuth: false });

const showAuthDrawer = (state, { status }) =>
  state.merge({ drawerVisible: status });

const getUserInfoSuccess = (state, { email, firstName, lastName }) =>
  state.merge({ email, firstName, lastName });

const ACTION_HANDLERS = {
  [Types.SET_AUTH]: setAuth,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.FB_SIGN_IN_SUCCESS]: fbSignInSuccess,
  [Types.GOOGLE_SIGN_IN_SUCCESS]: googleSignInSuccess,
  [Types.SIGN_OUT]: signOut,
  [Types.SHOW_AUTH_DRAWER]: showAuthDrawer,
  [Types.GET_ACCOUNT_INFO_SUCCESS]: getUserInfoSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
