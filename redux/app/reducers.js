import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  homeTabIndex: '1',
  loading: false,
  isShowLoginModal: false,
});

const setHomeTabIndex = (state, { tabIndex }) =>
  state.merge({ homeTabIndex: tabIndex });

const setLoading = (state, { loading }) => state.merge({ loading });

const setShowLoginModal = (state, { isShowLoginModal }) =>
  state.merge({ isShowLoginModal });

const ACTION_HANDLERS = {
  [Types.CHANGE_HOME_TAB]: setHomeTabIndex,
  [Types.LOADING]: setLoading,
  [Types.SHOW_LOGIN_MODAL]: setShowLoginModal,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
