import { makeConstantCreator, makeActionCreator } from '../utils';

export const Types = {
  ...makeConstantCreator('LOADING'),
};

export const setLoading = (key, loading) =>
  makeActionCreator(Types.LOADING, { key, loading });
