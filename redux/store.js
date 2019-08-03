import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';
import rootReducer from './reducers';

import rootSaga from './sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return applyMiddleware(...middleware);
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    Immutable(initialState),
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
