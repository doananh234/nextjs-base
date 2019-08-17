import { all } from 'redux-saga/effects';
import placeholderSaga from './placeholder/sagas';
import authSagas from './auth/sagas';
import homeSaga from './home/sagas';
import brandsSaga from './brands/sagas';
import promotionsSaga from './promotions/sagas';
import brandPromotionsSaga from './brandPromotions/sagas';
import brandCashbacksSaga from './brandCashbacks/sagas';

function* rootSaga() {
  yield all([
    ...brandCashbacksSaga,
    ...brandPromotionsSaga,
    ...promotionsSaga,
    ...brandsSaga,
    ...homeSaga,
    ...authSagas,
    placeholderSaga,
  ]);
}

export default rootSaga;
