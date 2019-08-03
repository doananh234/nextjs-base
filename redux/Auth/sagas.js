import { takeLatest, call, put } from 'redux-saga/effects';
import Actions, { Types } from './actions';
import * as snsAPI from '../../api/SNS';
import * as userAPI from '../../api/user';

import { setToken } from '../../utils/cookies';
import { showError } from '../exceptions';

export function* fbSignIn(payload) {
  try {
    const response = yield call(snsAPI.fbSignIn, payload);
    const { token } = response || {};

    if (!token) {
      throw response;
    }

    yield put(Actions.fbSignInSuccess(response));
    yield put(Actions.showAuthDrawer(false));
    // TODO: Set token in cookies
    setToken(token);
  } catch (err) {
    yield put(Actions.fbSignInFailure(err));
    showError(err);
  }
}

export function* googleSignIn(payload) {
  try {
    const response = yield call(snsAPI.googleSignIn, payload);
    const { token } = response || {};

    if (!token) {
      throw response;
    }

    yield put(Actions.googleSignInSuccess(response));
    yield put(Actions.showAuthDrawer(false));
    // TODO: Set token in cookies
    setToken(token);
  } catch (err) {
    yield put(Actions.googleSignInFailure(err));
    showError(err);
  }
}

export function* signIn(payload) {
  try {
    const response = yield call(snsAPI.signIn, payload);
    const { token } = response || {};

    if (!token) {
      throw response;
    }
    yield put(Actions.signInSuccess(response));
    yield put(Actions.showAuthDrawer(false));
    // // TODO: Set token in cookies
    setToken(token);
    yield put(Actions.getAccountInfo());
  } catch (err) {
    yield put(Actions.signInFailure(err));
    showError(err);
  }
}

export function* signUp(payload) {
  try {
    const response = yield call(snsAPI.signUp, payload);
    const { token } = response || {};
    if (!token) {
      throw response;
    }
    yield put(Actions.signUpSuccess(response));
    yield put(Actions.showAuthDrawer(false));
    // TODO: Set token in cookies
    setToken(token);
  } catch (err) {
    yield put(Actions.signUpFailure(err));
    showError(err);
  }
}

export function* getAccountInfo(payload) {
  try {
    const response = yield call(userAPI.getAccountInfo, payload);
    // TODO: Set token in cookies
    if (!response) {
      throw response;
    }
    yield put(Actions.getAccountInfoSuccess(response));
  } catch (err) {
    yield put(Actions.getAccountInfoFailure(err));
    showError(err);
  }
}

// export function* updateUser(payload) { }

export default [
  takeLatest(Types.FB_SIGN_IN, fbSignIn),
  takeLatest(Types.GOOGLE_SIGN_IN, googleSignIn),
  takeLatest(Types.SIGN_IN, signIn),
  takeLatest(Types.SIGN_UP, signUp),
  takeLatest(Types.GET_ACCOUNT_INFO, getAccountInfo),
];
