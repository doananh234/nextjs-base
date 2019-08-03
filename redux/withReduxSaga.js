import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import nextReduxWrapper from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import Immutable from 'seamless-immutable';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    Immutable(initialState),
    applyMiddleware(sagaMiddleware)
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default function(BaseComponent) {
  return nextReduxWrapper(configureStore)(nextReduxSaga(BaseComponent));
}
