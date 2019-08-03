import _ from 'lodash';
import { makeActionName } from '../../utils/text';
import { makeActionCreator } from '../../utils/redux';

export const CRUD_ACTIONS = [
  'GET_ALL',
  'GET_BY_ID',
  'DELETE',
  'EDIT',
  'CREATE',
  'CLEAR',
  'SET_CURRENT',
];
export const ACTIONS_STATE = ['', 'SUCCESS', 'FAILURE'];
export const PRIMARY_KEY = 'id';

export function makeCRUDConstantCreator(resource, ignoreActions = []) {
  const constants = {};
  _.xor(CRUD_ACTIONS, ignoreActions).forEach(action => {
    ACTIONS_STATE.forEach(state => {
      const convertActionStr = [action, _.snakeCase(resource).toUpperCase()];
      if (state !== '') {
        convertActionStr.push(state);
      }
      const type = convertActionStr.join('_');
      constants[type] = type;
    });
  });
  return constants;
}

export const makeCRUDActionsCreator = (resource, ignoreActions = []) => {
  const actions = {};
  const constants = makeCRUDConstantCreator(resource, ignoreActions);
  _.values(constants).forEach(type => {
    const actionName = makeActionName(type);
    actions[actionName] = (data, options) =>
      makeActionCreator(type, { data, options });
  });
  return actions;
};
