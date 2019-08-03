import { all } from 'redux-saga/effects';
import placeholderSaga from './placeholder/sagas';
import AuthSagas from './Auth/sagas';

function* rootSaga() {
  yield all([...AuthSagas, placeholderSaga]);
}

export default rootSaga;
