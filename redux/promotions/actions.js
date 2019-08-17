import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator(
    'GET_PROMOTIONS',
    'GET_PROMOTIONS_SUCCESS',
    'GET_PROMOTIONS_FAILURE',

    'REDIRECT_TO_PROMOTIONS'
  ),
};

export const getPromotions = () => makeActionCreator(Types.GET_PROMOTIONS);
export const getPromotionsSuccess = data =>
  makeActionCreator(Types.GET_PROMOTIONS_SUCCESS, { data });
export const getPromotionsFailure = error =>
  makeActionCreator(Types.GET_PROMOTIONS_FAILURE, { error });

export const redirectToPromotions = data =>
  makeActionCreator(Types.REDIRECT_TO_PROMOTIONS, { data });
