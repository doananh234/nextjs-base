import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getPromotionsSuccess, getPromotionsFailure, Types } from './actions';
import { getPromotions, getDeeplink } from '../../api/brands';
import { showError } from '../exceptions';
import { convertGetAllData } from '../utils';
import { apiWrapper } from '../apiWrapper';

export function* getPromotionsSaga() {
  try {
    const response = yield call(getPromotions);
    if (response.data) {
      yield put(getPromotionsSuccess(convertGetAllData(response.data.brands)));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getPromotionsFailure(err));
    showError(err);
  }
}

export function* redirectToPromotionsSaga(payload) {
  try {
    const isAuth = yield select(state => state.auth.isAuth);
    if (isAuth) {
      window.open(
        payload?.data?.openvia
          ? payload?.data?.openvia[0]?.value
          : payload?.data?.buyURL,
        '_blank'
      );
      return;
    }

    const response = yield call(
      apiWrapper,
      { requireSignIn: true, prevPayload: payload },
      getDeeplink,
      { brand: payload.data._id, url: payload.data.buyURL }
    );

    if (response?.data?.openvia) {
      response.data.openvia[0];
      window.open(response?.data?.openvia[0]?.value, '_blank');
    } else {
      //
    }
  } catch (err) {
    //
    // console.log(err);
  }
}

export default [
  takeLatest(Types.GET_PROMOTIONS, getPromotionsSaga),
  takeLatest(Types.REDIRECT_TO_PROMOTIONS, redirectToPromotionsSaga),
];
