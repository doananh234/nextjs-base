import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getBrandsSuccess,
  getBrandsFailure,
  getBrandsByIdSuccess,
  getBrandsByIdFailure,
  Types,
} from './actions';
import { apiWrapper } from '../apiWrapper';
import { convertGetAllData } from '../utils';
import { getBrands, getBrandsById } from '../../api/brands';
import { showError } from '../exceptions';
import { getBrandCashBacks } from '../brandCashbacks/actions';
import { getBrandPromotions } from '../brandPromotions/actions';

export function* getBrandsSaga() {
  try {
    const response = yield call(apiWrapper, {}, getBrands);
    if (response.data) {
      yield put(getBrandsSuccess(convertGetAllData(response.data.brands)));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getBrandsFailure(err));
    showError(err);
  }
}

export function* getBrandsByIdSaga({ id, ctx }) {
  try {
    yield put(getBrandCashBacks(id, ctx));
    yield put(getBrandPromotions(id, ctx));
    const response = yield call(apiWrapper, {}, getBrandsById, id, ctx);
    if (response.data) {
      yield put(getBrandsByIdSuccess(response.data.brand));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getBrandsByIdFailure(err));
    showError(err);
  }
}
export default [
  takeLatest(Types.GET_BRANDS, getBrandsSaga),
  takeLatest(Types.GET_BRANDS_BY_ID, getBrandsByIdSaga),
];
