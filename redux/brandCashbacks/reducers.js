import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  app: {
    data: {},
    ids: [],
  },
  web: {
    data: {},
    ids: [],
  },
});

const getBrandCashbacksSuccess = (state, { data }) => state.merge({ ...data });

const ACTION_HANDLERS = {
  [Types.GET_BRAND_CASHBACKS_SUCCESS]: getBrandCashbacksSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
