import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator(
    'GET_BRANDS',
    'GET_BRANDS_SUCCESS',
    'GET_BRANDS_FAILURE',

    'GET_BRANDS_BY_ID',
    'GET_BRANDS_BY_ID_SUCCESS',
    'GET_BRANDS_BY_ID_FAILURE',

    'REDIRECT_TO_BRAND'
  ),
};

export const getBrands = () => makeActionCreator(Types.GET_BRANDS);
export const getBrandsSuccess = data =>
  makeActionCreator(Types.GET_BRANDS_SUCCESS, { data });
export const getBrandsFailure = error =>
  makeActionCreator(Types.GET_BRANDS_FAILURE, { error });

export const getBrandsById = (id, ctx) =>
  makeActionCreator(Types.GET_BRANDS_BY_ID, { id, ctx });
export const getBrandsByIdSuccess = data =>
  makeActionCreator(Types.GET_BRANDS_BY_ID_SUCCESS, { data });
export const getBrandsByIdFailure = error =>
  makeActionCreator(Types.GET_BRANDS_BY_ID_FAILURE, { error });

export const redirectToBrands = data =>
  makeActionCreator(Types.REDIRECT_TO_BRAND, { data });
