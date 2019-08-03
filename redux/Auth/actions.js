import { makeConstantCreator, makeActionCreator } from '../../utils/redux';

// TODO: Model name
// export const MODEL = 'todos';

// TODO: Add actions you don't want to use here
export const IGNORE_ACTIONS = [];

// TODO: Create constant types for model
export const Types = {
  // ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
  ...makeConstantCreator(
    'SIGN_IN',
    'SIGN_IN_SUCCESS',
    'SIGN_IN_FAILURE',

    'SIGN_UP',
    'SIGN_UP_SUCCESS',
    'SIGN_UP_FAILURE',

    'GOOGLE_SIGN_IN',
    'GOOGLE_SIGN_IN_SUCCESS',
    'GOOGLE_SIGN_IN_FAILURE',

    'FB_SIGN_IN',
    'FB_SIGN_IN_SUCCESS',
    'FB_SIGN_IN_FAILURE',

    'SIGN_OUT',
    'CHANGE_PASSWORD',
    'GET_USE',
    'EDIT_USER',
    'UPDATE_USER_SUCCESS',
    'UPDATE_USER_FAILURE',

    'SET_AUTH',

    'SHOW_AUTH_DRAWER',

    'GET_ACCOUNT_INFO',
    'GET_ACCOUNT_INFO_SUCCESS',
    'GET_ACCOUNT_INFO_FAILURE',

    'UPDATE_ACCOUNT_INFO',
    'UPDATE_ACCOUNT_INFO_SUCCESS',
    'UPDATE_ACCOUNT_INFO_FAILURE'
  ),
};

// const CRUDActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);

// TODO: Custom actions
/** Facebook Sign In */

const fbSignIn = (accessToken, info) =>
  makeActionCreator(Types.FB_SIGN_IN, { accessToken, info });
const fbSignInSuccess = token =>
  makeActionCreator(Types.FB_SIGN_IN_SUCCESS, { token });
const fbSignInFailure = error =>
  makeActionCreator(Types.FB_SIGN_IN_FAILURE, { error });

/** Google Sign In */
const googleSignIn = accessToken =>
  makeActionCreator(Types.GOOGLE_SIGN_IN, { accessToken });
const googleSignInSuccess = token =>
  makeActionCreator(Types.GOOGLE_SIGN_IN_SUCCESS, { token });
const googleSignInFailure = error =>
  makeActionCreator(Types.GOOGLE_SIGN_IN_FAILURE, { error });

/** Email Sign In */
const signIn = ({ email, password }) =>
  makeActionCreator(Types.SIGN_IN, {
    email,
    password,
  });
const signInSuccess = token =>
  makeActionCreator(Types.SIGN_IN_SUCCESS, { token });
const signInFailure = error =>
  makeActionCreator(Types.SIGN_IN_FAILURE, { error });

/** Email Sign Up */
const signUp = ({ email, password, firstName, lastName }) =>
  makeActionCreator(Types.SIGN_UP, {
    email,
    password,
    firstName,
    lastName,
  });
const signUpSuccess = token =>
  makeActionCreator(Types.SIGN_UP_SUCCESS, { token });
const signUpFailure = error =>
  makeActionCreator(Types.SIGN_UP_FAILURE, { error });

const signOut = () => makeActionCreator(Types.SIGN_OUT);

/**
 * Set Authentication Status
 * @param {*} status
 */
const setAuth = status => makeActionCreator(Types.SET_AUTH, { status });

/**
 * Show authentication drawer
 * @param {*} status
 */
const showAuthDrawer = status =>
  makeActionCreator(Types.SHOW_AUTH_DRAWER, { status });

/**
 * Get account info
 * @param {*} status
 */
const getAccountInfo = () => makeActionCreator(Types.GET_ACCOUNT_INFO);

const getAccountInfoSuccess = data =>
  makeActionCreator(Types.GET_ACCOUNT_INFO_SUCCESS, { ...data });

const getAccountInfoFailure = error =>
  makeActionCreator(Types.GET_ACCOUNT_INFO_SUCCESS, { ...error });

// TODO: Auto generated actions will be like this
export default {
  fbSignIn,
  fbSignInSuccess,
  fbSignInFailure,

  googleSignIn,
  googleSignInSuccess,
  googleSignInFailure,

  signIn,
  signInSuccess,
  signInFailure,

  signUp,
  signUpSuccess,
  signUpFailure,

  setAuth,
  showAuthDrawer,

  signOut,

  getAccountInfo,
  getAccountInfoSuccess,
  getAccountInfoFailure,
};
