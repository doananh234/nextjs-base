import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator(
    'GET_HOME_DATA',
    'GET_HOME_DATA_SUCCESS',
    'GET_HOME_DATA_FAILURE'
  ),
};

export const getHomeData = ctx =>
  makeActionCreator(Types.GET_HOME_DATA, { ctx });
export const getHomeDataSuccess = data =>
  makeActionCreator(Types.GET_HOME_DATA_SUCCESS, { data });
export const getHomeDataFailure = error =>
  makeActionCreator(Types.GET_HOME_DATA_FAILURE, { error });
