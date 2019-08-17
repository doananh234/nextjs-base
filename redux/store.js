/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';
// import deferredMiddleware from './ExposedPromiseMiddleware';
import rootReducer from './reducers';

import rootSaga from './sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
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
