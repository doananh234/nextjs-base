import { put, takeLatest } from 'redux-saga/effects';
import { Types, loadDataSuccess, loadDataError } from './actions';

function* loadDataSaga() {
  try {
    const res = yield fetch(`${process.env.API_URL}users`);
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataError(err));
  }
}

export default takeLatest(Types.LOAD_DATA, loadDataSaga);
