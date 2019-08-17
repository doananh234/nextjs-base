import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  data: {},
  ids: [],
});

const getBrandPromotionsSuccess = (state, { data }) => state.merge({ ...data });

const ACTION_HANDLERS = {
  [Types.GET_BRAND_PROMOTIONS_SUCCESS]: getBrandPromotionsSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
