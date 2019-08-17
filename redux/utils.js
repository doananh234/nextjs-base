import _, { keyBy, uniq } from 'lodash';
// import LoginActions from '../Redux/LoginRedux/actions';

export function convertGetAllData(response, key = '_id') {
  return {
    data: keyBy(response, key),
    ids: uniq(response && response.map(data => data[key])),
  };
}

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
