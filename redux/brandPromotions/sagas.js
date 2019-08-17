import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getBrandPromotionsFailure,
  getBrandPromotionsSuccess,
  Types,
} from './actions';
import { apiWrapper } from '../apiWrapper';
import { convertGetAllData } from '../utils';
import { getPromotionBrandsById } from '../../api/brands';
import { showError } from '../exceptions';

export function* getBrandPromotionsSaga({ id, ctx }) {
  try {
    const response = yield call(
      apiWrapper,
      {},
      getPromotionBrandsById,
      id,
      ctx
    );
    if (response.data) {
      yield put(
        getBrandPromotionsSuccess(convertGetAllData(response.data.categories))
      );
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getBrandPromotionsFailure(err));
    showError(err);
  }
}

export default [takeLatest(Types.GET_BRAND_PROMOTIONS, getBrandPromotionsSaga)];
