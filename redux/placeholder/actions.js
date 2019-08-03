export const Types = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR',
};

export function loadData() {
  return { type: Types.LOAD_DATA };
}

export function loadDataSuccess(data) {
  return {
    type: Types.LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadDataError(error) {
  return {
    type: Types.LOAD_DATA_ERROR,
    error,
  };
}
