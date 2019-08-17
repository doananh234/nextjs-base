import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  data: {},
  ids: [],
});

const getBrandsSuccess = (state, { data }) => state.merge({ ...data });
const getBrandsFailure = (state, { error }) => state.setIn(['error'], error);

const getBrandsById = (state, { id }) => state.setIn(['currentId'], id);
const getBrandsByIdSuccess = (state, { data }) =>
  state.setIn(['data', data._id], data);

const ACTION_HANDLERS = {
  [Types.GET_BRANDS_SUCCESS]: getBrandsSuccess,
  [Types.GET_BRANDS_FAILURE]: getBrandsFailure,
  [Types.GET_BRANDS_BY_ID]: getBrandsById,
  [Types.GET_BRANDS_BY_ID_SUCCESS]: getBrandsByIdSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
