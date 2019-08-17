import { takeLatest, call, put } from 'redux-saga/effects';
import { getHomeDataSuccess, getHomeDataFailure, Types } from './actions';
import { getHomeData } from '../../api/home';
import { showError } from '../exceptions';

export function* getHomeDataSaga({ ctx }) {
  try {
    const response = yield call(getHomeData, ctx);
    if (response.data) {
      yield put(getHomeDataSuccess(response.data));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getHomeDataFailure(err));
    showError(err);
  }
}

export default [takeLatest(Types.GET_HOME_DATA, getHomeDataSaga)];
