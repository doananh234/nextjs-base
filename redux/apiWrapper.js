import { call, select, put } from 'redux-saga/effects';
import { setLoading } from './loading/actions';
import { showLoginModal } from './app/actions';

export function* apiWrapper(
  { key, isHaveProgress = false, requireSignIn = false },
  apiFunc,
  ...params
) {
  try {
    const isAuth = yield select(state => state.auth.isAuth);
    if (requireSignIn && !isAuth) {
      yield put(showLoginModal(true));
      return;
    }
    // dismissInAppNoti();
    isHaveProgress && setLoading(key, isHaveProgress);
    const response = yield call(apiFunc, ...params);
    isHaveProgress && setLoading(key, false);
    // isHaveProgress && showProgress(false);
    // if (response?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }
    return response;
  } catch (error) {
    isHaveProgress && setLoading(key, false);
    // isHaveProgress && showProgress(false);
    // if (error?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }
    return error;
  }
}
