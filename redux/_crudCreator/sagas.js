import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import _ from 'lodash';
import { notification } from 'antd';
import { apiWrapper } from '../../utils/redux';
import {
  getAllApi,
  getDataByIdApi,
  postApi,
  putApi,
  delApi,
} from '../../api/crud';
import { makeActionName } from '../../utils/text';
import { PRIMARY_KEY, CRUD_ACTIONS } from './actions';
import { convertResponseData, convertRequestParams } from './dataProvider';

function* getAllSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction
) {
  try {
    const { pageSize, page } = yield select(state => state[resource]);
    // const { setting } = yield select(state => state.app);

    const convertRequest = convertRequestParams(
      'GET_ALL',
      {
        limit: pageSize,
        page,
        ...data,
      }
      // {
      //   setting,
      // }
    );
    const response = yield call(
      apiWrapper,
      false,
      getAllApi,
      options.customApi || resource,
      convertRequest
    );
    const result = convertResponseData('GET_ALL', response);
    if (result.data) {
      const numberOfPages = Math.round(result.total / pageSize);
      yield put(
        successAction(
          {
            numberOfPages: numberOfPages === 0 ? 1 : numberOfPages,
            ...result,
          },
          options
        )
      );
    } else {
      notification.error({
        message: 'Notification:',
        description: response.message,
      });
      yield put(failureAction(response, options));
    }
  } catch (error) {
    notification.error({
      message: 'Notification:',
      description: error.message || 'Something wrong!',
    });
    yield put(failureAction(error));
  }
}

function* getDataByIdSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction
) {
  try {
    const response = yield call(
      apiWrapper,
      true,
      getDataByIdApi,
      options.customApi || resource,
      data[PRIMARY_KEY]
    );
    const result = convertResponseData('GET_BY_ID', response);
    if (result) {
      yield put(successAction(result, options));
    } else {
      yield put(failureAction(result, options));
    }
  } catch (error) {
    yield put(failureAction(error));
  }
}

function* editSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction
  // getByIdFunc
) {
  // delete data.c
  try {
    const response = yield call(
      apiWrapper,
      true,
      putApi,
      options.customApi || resource,
      data[PRIMARY_KEY],
      data,
      options.customApi
    );
    const result = convertResponseData('EDIT', response);
    if (result) {
      yield put(successAction({ ...data, ...result }, options));
    } else {
      yield put(failureAction({ ...data, ...response }, options));
    }
  } catch (error) {
    yield put(failureAction(error));
    //
  }
}

function* createSaga(
  data,
  options = {},
  resource,
  successAction,
  failureAction
) {
  try {
    const response = yield call(
      apiWrapper,
      true,
      postApi,
      options.customApi || resource,
      data
    );
    const result = convertResponseData('CREATE', {
      requestData: data,
      ...response,
    });
    if (result) {
      yield put(successAction(result, options));
    } else {
      yield put(failureAction(response, options));
    }
  } catch (error) {
    //
    yield put(failureAction(error));
  }
}

function* delSaga(data, options = {}, resource, successAction, failureAction) {
  try {
    const response = yield call(
      apiWrapper,
      true,
      delApi,
      options.customApi || resource,
      data.path || data[PRIMARY_KEY]
    );
    const result = convertResponseData('DELETE', {
      requestData: data,
      ...response,
    });
    if (result) {
      yield put(successAction(result || {}, options));
    } else {
      yield put(failureAction(response, options));
    }
  } catch (error) {
    yield put(failureAction(error));
  }
}

const makeCRUDSagaCreator = (resource, actions) => {
  function* getAllSagaCreator({ data, options }) {
    yield fork(
      getAllSaga,
      data,
      options,
      resource,
      actions[
        makeActionName(`GET_ALL_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)
      ],
      actions[
        makeActionName(`GET_ALL_${_.snakeCase(resource).toUpperCase()}_FAILURE`)
      ]
    );
  }
  function* getDataByIdSagaCreator({ data, options }) {
    yield fork(
      getDataByIdSaga,
      data,
      options,
      resource,
      actions[
        makeActionName(
          `GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_SUCCESS`
        )
      ],
      actions[
        makeActionName(
          `GET_BY_ID_${_.snakeCase(resource).toUpperCase()}_FAILURE`
        )
      ]
    );
  }
  function* editSagaCreator({ data, options }) {
    yield fork(
      editSaga,
      data,
      options,
      resource,
      actions[
        makeActionName(`EDIT_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)
      ],
      actions[
        makeActionName(`EDIT_${_.snakeCase(resource).toUpperCase()}_FAILURE`)
      ],
      getDataByIdSaga
    );
  }
  function* deleteSagaCreator({ data, options }) {
    yield fork(
      delSaga,
      data,
      options,
      resource,
      actions[
        makeActionName(`DELETE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)
      ],
      actions[
        makeActionName(`DELETE_${_.snakeCase(resource).toUpperCase()}_FAILURE`)
      ]
    );
  }
  function* createSagaCreator({ data, options }) {
    yield fork(
      createSaga,
      data,
      options,
      resource,
      actions[
        makeActionName(`CREATE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`)
      ],
      actions[
        makeActionName(`CREATE_${_.snakeCase(resource).toUpperCase()}_FAILURE`)
      ]
    );
  }
  const sagas = {
    GET_ALL: getAllSagaCreator,
    GET_BY_ID: getDataByIdSagaCreator,
    EDIT: editSagaCreator,
    DELETE: deleteSagaCreator,
    CREATE: createSagaCreator,
  };
  return sagas;
};

const rootCRUDSaga = (resource, ignoreActions = [], actions) => {
  const sagaCreators = makeCRUDSagaCreator(resource, actions);
  const acceptActions = _.xor(CRUD_ACTIONS, [
    ...ignoreActions,
    'SET_CURRENT',
    'CLEAR',
  ]);
  const debug = acceptActions.map(data =>
    takeLatest(
      `${data}_${_.snakeCase(resource).toUpperCase()}`,
      sagaCreators[data]
    )
  );
  return debug;
};

export default rootCRUDSaga;
