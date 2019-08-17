import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator(
    'GET_BRAND_PROMOTIONS',
    'GET_BRAND_PROMOTIONS_SUCCESS',
    'GET_BRANDS_FAILURE'
  ),
};

export const getBrandPromotions = (id, ctx) =>
  makeActionCreator(Types.GET_BRAND_PROMOTIONS, { id, ctx });
export const getBrandPromotionsSuccess = data =>
  makeActionCreator(Types.GET_BRAND_PROMOTIONS_SUCCESS, { data });
export const getBrandPromotionsFailure = error =>
  makeActionCreator(Types.GET_BRAND_PROMOTIONS_FAILURE, { error });
