import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator('CHANGE_HOME_TAB', 'LOADING', 'SHOW_LOGIN_MODAL'),
};

export const changeHomeTab = tabIndex =>
  makeActionCreator(Types.CHANGE_HOME_TAB, { tabIndex });

export const showLoginModal = isShowLoginModal =>
  makeActionCreator(Types.SHOW_LOGIN_MODAL, { isShowLoginModal });

export const setLoading = loading =>
  makeActionCreator(Types.LOADING, { loading });
