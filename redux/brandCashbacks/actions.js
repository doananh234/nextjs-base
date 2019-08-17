import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator(
    'GET_BRAND_CASHBACKS',
    'GET_BRAND_CASHBACKS_SUCCESS',
    'GET_BRAND_CASHBACKS_FAILURE'
  ),
};

export const getBrandCashBacks = (id, ctx) =>
  makeActionCreator(Types.GET_BRAND_CASHBACKS, { id, ctx });
export const getBrandCashBacksSuccess = data =>
  makeActionCreator(Types.GET_BRAND_CASHBACKS_SUCCESS, { data });
export const getBrandCashBacksFailure = error =>
  makeActionCreator(Types.GET_BRAND_CASHBACKS_FAILURE, { error });
