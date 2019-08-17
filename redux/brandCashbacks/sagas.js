import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getBrandCashBacksFailure,
  getBrandCashBacksSuccess,
  Types,
} from './actions';
import { apiWrapper } from '../apiWrapper';
import { convertGetAllData } from '../utils';
import { getCashbackBrandsById } from '../../api/brands';
import { showError } from '../exceptions';

export function* getBrandCashbacksSaga({ id, ctx }) {
  try {
    const response = yield call(apiWrapper, {}, getCashbackBrandsById, id, ctx);
    if (response.data) {
      yield put(
        getBrandCashBacksSuccess({
          app: convertGetAllData(response.data.app.items),
          web: convertGetAllData(response.data.web.items),
        })
      );
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getBrandCashBacksFailure(err));
    showError(err);
  }
}

export default [takeLatest(Types.GET_BRAND_CASHBACKS, getBrandCashbacksSaga)];
