import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  data: {},
  ids: [],
});

const getPromotions = state => state.setIn(['loading'], true);
const getPromotionsSuccess = (state, { data }) =>
  state.setIn(['loading'], false).merge({ ...data });
const getPromotionsFailure = (state, { error }) =>
  state.setIn(['loading'], false).setIn(['error'], error);

const ACTION_HANDLERS = {
  [Types.GET_PROMOTIONS]: getPromotions,
  [Types.GET_PROMOTIONS_SUCCESS]: getPromotionsSuccess,
  [Types.GET_PROMOTIONS_FAILURE]: getPromotionsFailure,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
