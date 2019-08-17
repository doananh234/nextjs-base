import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../utils';
import { Types } from './actions';

export const INITIAL_STATE = Immutable({});

const setLoading = (state, { key, loading }) => state.merge({ [key]: loading });

const ACTION_HANDLERS = {
  [Types.LOADING]: setLoading,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
