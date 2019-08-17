import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  categories: [],
  topCashbackBrands: [],
});

const getHomeData = state => state.setIn(['loading'], true);
const getHomeDataSuccess = (state, { data }) =>
  state.setIn(['loading'], false).merge({ ...data });
const getHomeDataFailure = (state, { error }) =>
  state.setIn(['loading'], false).setIn(['error'], error);

const ACTION_HANDLERS = {
  [Types.GET_HOME_DATA]: getHomeData,
  [Types.GET_HOME_DATA_SUCCESS]: getHomeDataSuccess,
  [Types.GET_HOME_DATA_FAILURE]: getHomeDataFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
