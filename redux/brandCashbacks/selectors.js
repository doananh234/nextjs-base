import { createSelector } from 'reselect';

const getRestResourceForApp = (state, resources) => state.brandCashbacks.app;
const getRestResourceForWeb = (state, resources) => state.brandCashbacks.web;

export const getDataForApp = createSelector(
  [getRestResourceForApp],
  resources => {
    const { data, ids } = resources;
    return ids.map(id => data[id]);
  }
);
export const getDataForWeb = createSelector(
  [getRestResourceForWeb],
  resources => {
    const { data, ids } = resources;
    return ids.map(id => data[id]);
  }
);
