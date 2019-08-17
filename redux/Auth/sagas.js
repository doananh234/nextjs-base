import { takeLatest, call, put } from 'redux-saga/effects';
import Actions, { Types } from './actions';
import { getHomeData } from '../home/actions';
import { showLoginModal } from '../app/actions';
import * as snsAPI from '../../api/SNS';
import * as userAPI from '../../api/user';

import { setToken, removeToken } from '../../utils/cookies';
import { showError } from '../exceptions';

export function* signOut() {
  try {
    yield call(removeToken);
  } catch (err) {
    //
  }
}

export function* fbSignIn({ accessToken }) {
  try {
    const response = yield call(snsAPI.fbSignIn, accessToken);
    if (!response || !response.data) {
      throw response;
    }

    yield put(Actions.fbSignInSuccess(response.data.token));
    // TODO: Set token in cookies
    setToken(response.data.token);
    yield put(getHomeData());
    yield put(showLoginModal(false));
  } catch (err) {
    yield put(Actions.fbSignInFailure(err));
    showError(err);
  }
}

export function* googleSignIn({ accessToken }) {
  try {
    const response = yield call(snsAPI.googleSignIn, accessToken);

    if (!response || !response.data) {
      throw response;
    }
    yield put(Actions.googleSignInSuccess(response.data.token));
    setToken(response.data.token);
    yield put(getHomeData());
    yield put(showLoginModal(false));
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
    yield put(getHomeData());
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
  takeLatest(Types.SIGN_OUT, signOut),
];
