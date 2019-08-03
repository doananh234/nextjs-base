import { call } from 'redux-saga/effects';
import _ from 'lodash';
// import LoginActions from '../Redux/LoginRedux/actions';

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, param => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action
) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

export function* apiWrapper(isHaveProgress = false, apiFunc, ...params) {
  try {
    // dismissInAppNoti();
    // isHaveProgress && showProgress();
    const response = yield call(apiFunc, ...params);
    // isHaveProgress && showProgress(false);
    // if (response?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }
    return response;
  } catch (error) {
    // isHaveProgress && showProgress(false);
    // if (error?.code === 401) {
    //   yield put(LoginActions.clearToken());
    // }
    return error;
  }
}
