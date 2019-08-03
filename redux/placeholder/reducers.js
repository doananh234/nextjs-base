import Immutable from 'seamless-immutable';
import { Types } from './actions';

export const initialState = Immutable({
  data: null,
  error: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_DATA_SUCCESS:
      return state.merge({
        data: action.data,
      });

    case Types.LOAD_DATA_ERROR:
      return state.merge({
        error: action.error,
      });

    default:
      return state;
  }
}

export default reducer;
