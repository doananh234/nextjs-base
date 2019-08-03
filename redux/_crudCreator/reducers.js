import Immutable from 'seamless-immutable';
import _ from 'lodash';
import { PRIMARY_KEY } from './actions';

export const INITIAL_CRUD_STATE = Immutable({
  currentId: null,
  loading: false,
  data: {},
  ids: [],
  error: null,
  filter: {},
  page: 1,
  pageSize: 10,
  total: 0,
  numberOfPages: 1,
  sort: '',
});

// TODO: Reset state
export const resetState = state => state.merge(INITIAL_CRUD_STATE);

// TODO: Get all data
export const getAll = (state, { data = {}, options = {} }) =>
  options.isRefresh
    ? state.merge({
        ...INITIAL_CRUD_STATE,
        ...data, // Get other properties
        loading: true,
      })
    : state.merge({
        loading: true,
        error: null,
        page: state.page + 1,
        ...data,
      });

export const getAllSuccess = (state, { data }) =>
  state.merge({
    loading: false,
    ...data,
    ids: _.union(state.ids, data.ids),
    data: { ...state.data, ...data.data },
  });

export const getAllFailure = (state, { data }) =>
  state.merge({ loading: false, error: data });

// TODO: Get by id
export const setCurrent = (state, { data }) =>
  state.merge({
    currentId: data[PRIMARY_KEY],
    loading: false,
  });

export const getById = (state, { data }) =>
  state.merge({
    currentId: data[PRIMARY_KEY],
    loading: true,
  });
export const getByIdSuccess = (state, { data }) =>
  state.merge({
    data: { ...state.data, [data[PRIMARY_KEY]]: data },
    loading: false,
  });

export const getByIdFailure = (state, { data }) =>
  state.merge({ loading: false, error: data });

// TODO: Create
export const create = state =>
  state.merge({
    error: null,
    loading: true,
  });

export const createSuccess = (state, { data }) =>
  state.merge({
    data: { ...state.data, [data[PRIMARY_KEY]]: data },
    ids: [...state.ids, data[PRIMARY_KEY]],
    currentId: data[PRIMARY_KEY],
    loading: false,
    error: null,
  });

export const createFailure = (state, { data }) =>
  state.merge({
    loading: false,
    error: data,
  });

// TODO: Edit
export const edit = (state, { data }) =>
  state.merge({
    currentId: data[PRIMARY_KEY],
    error: null,
    loading: true,
  });

export const editSuccess = (state, { data }) =>
  state.merge({
    data: {
      ...state.data,
      [data[PRIMARY_KEY]]: { ...state.data[data[PRIMARY_KEY]], ...data },
    },
    error: null,
  });

export const editFailure = (state, { data }) =>
  state.merge({
    error: data,
  });

// TODO: Delete
export const del = (state, { data }) =>
  state.merge({
    currentId: data[PRIMARY_KEY],
    error: null,
  });

export const delSuccess = (state, { data }) =>
  state.merge({
    currentId: null,
    data: state.data.withoutIn(data[PRIMARY_KEY]),
    ids: _.xor(state.ids, [data[PRIMARY_KEY]]),
    error: null,
  });

export const delFailure = (state, { data }) =>
  state.merge({
    error: data,
  });

export const makeCRUDReducerCreator = (resource, ignoreActions = []) => {
  const listReducerHandlers =
    ignoreActions.indexOf('GET_ALL') > -1
      ? []
      : {
          [`GET_ALL_${_.snakeCase(resource).toUpperCase()}`]: getAll,
          [`GET_ALL_${_.snakeCase(
            resource
          ).toUpperCase()}_SUCCESS`]: getAllSuccess,
          [`GET_ALL_${_.snakeCase(
            resource
          ).toUpperCase()}_FAILURE`]: getAllFailure,
        };

  const getByIdReducerHandlers =
    ignoreActions.indexOf('GET_BY_ID') > -1
      ? []
      : {
          [`GET_BY_ID_${_.snakeCase(resource).toUpperCase()}`]: getById,
          [`GET_BY_ID_${_.snakeCase(
            resource
          ).toUpperCase()}_SUCCESS`]: getByIdSuccess,
          [`GET_BY_ID_${_.snakeCase(
            resource
          ).toUpperCase()}_FAILURE`]: getByIdFailure,
        };
  const editReducerHandlers =
    ignoreActions.indexOf('EDIT') > -1
      ? []
      : {
          [`EDIT_${_.snakeCase(resource).toUpperCase()}`]: edit,
          [`EDIT_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: editSuccess,
          [`EDIT_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: editFailure,
        };

  const createReducerHandlers =
    ignoreActions.indexOf('CREATE') > -1
      ? []
      : {
          [`CREATE_${_.snakeCase(resource).toUpperCase()}`]: create,
          [`CREATE_${_.snakeCase(
            resource
          ).toUpperCase()}_SUCCESS`]: createSuccess,
          [`CREATE_${_.snakeCase(
            resource
          ).toUpperCase()}_FAILURE`]: createFailure,
        };

  const delReducerHandlers =
    ignoreActions.indexOf('DELETE') > -1
      ? []
      : {
          [`DELETE_${_.snakeCase(resource).toUpperCase()}`]: del,
          [`DELETE_${_.snakeCase(resource).toUpperCase()}_SUCCESS`]: delSuccess,
          [`DELETE_${_.snakeCase(resource).toUpperCase()}_FAILURE`]: delFailure,
        };

  const unuseSagaReducerHandlers = {
    [`RESET_${_.snakeCase(resource).toUpperCase()}`]: resetState,
    [`SET_CURRENT_${_.snakeCase(resource).toUpperCase()}`]: setCurrent,
  };
  return {
    ...listReducerHandlers,
    ...getByIdReducerHandlers,
    ...editReducerHandlers,
    ...createReducerHandlers,
    ...delReducerHandlers,
    ...unuseSagaReducerHandlers,
  };
};
